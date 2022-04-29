const BigNumber = require('bignumber.js')
const DevToken = artifacts.require("DevToken");
const { assert } = require('chai');
const truffleAssert = require('truffle-assertions');
const helper = require("./helpers/truffleTestHelpers");

//启动一个名为 DevToken 的测试系列，它将使用 10 个测试帐户
contract('DevToken', async accounts => {
    //每个都是一个新的测试，我们将我们的第一个测试命名为初始供应
    it('initial supply', async () => {
        //等到 devtoken 被部署后，将结果存储在 devToken 中
        //结果是智能合约 api 的客户端
        const devToken = await DevToken.deployed()
        
        //调用我们的 totalSUpply 函数
        const supply = await devToken.totalSupply()
        //判断 供应与我们在部署中设置的相匹配
        //大数字要转换为string对比  否则js报错Number最大储存53位
        assert.equal(supply.toString(),'50000000000000000000000',"Initial supply was not the same as in migration")
    })

    it('minting', async () => {
        const devToken = await DevToken.deployed()
        //使用 1 账户 ，他的代币余额是0
        const intial_balance = await devToken.balanceOf(accounts[1])
        //验证余额
        assert.equal(intial_balance.toString(),'0',"intial balance for account 1 should be 0")
        //让我们向用户铸造 100 个代币并再次获取余额
        let totalSupply = await devToken.totalSupply();
        await devToken.mint(accounts[1],100);
        //再次获取用户余额和总量，看mint后的结果
        let after_balance = await devToken.balanceOf(accounts[1])
        let after_supply = await devToken.totalSupply();

        //使用bigNumber计算
        let bigNum_after_balance = new BigNumber(after_balance)
        let bigNum_after_supply = new BigNumber(after_supply)
        let bigNum_totalSupply = new BigNumber(totalSupply)
        console.log('bigNum_after_balance',bigNum_after_balance.toFixed())
        console.log('bigNum_after_supply',bigNum_after_supply.toFixed())
        console.log('bigNum_totalSupply',bigNum_after_supply.minus(bigNum_totalSupply).toFixed())
        //对比结果
        assert.equal(new BigNumber(after_balance),'100',"The balance after minting 100 should be 100")
        assert.equal(bigNum_after_supply.minus(bigNum_totalSupply).toFixed(),'100',"The totalSupply should have been increasesd")
        try {
            // Mint with address 0
            await devToken.mint('0x0000000000000000000000000000000000000000', 100);
        }catch(error){
            assert.equal(error.reason, "DevToken: cannot mint to zero address", "Failed to stop minting on zero address")
        }
    })
    it('burning', async () => {
        const devToken = await DevToken.deployed();
        //继续使用 1 用户 他已经有了 100 token
        let initial_balance = await devToken.balanceOf(accounts[1]);
        let bigNum_initial_balance = new BigNumber(initial_balance)
        // Burn to address 0 
        try{
            await devToken.burn('0x0000000000000000000000000000000000000000', 100);
        }catch(error){
            assert.equal(error.reason, "DevToken: cannot burn from zero address", "Failed to notice burning on 0 address")
        }
        // Burn 超过用户余额的数值
        try {
            await devToken.burn(accounts[1], bigNum_initial_balance.plus(bigNum_initial_balance).toFixed());
        }catch(error){
            assert.equal(error.reason, "DevToken: Cannot burn more than the account owns", "Failed to capture too big burns on an account")
        }
        let totalSupply = await devToken.totalSupply();
        try {
            await devToken.burn(accounts[1], bigNum_initial_balance.minus(50).toFixed());
        }catch(error){
            assert.fail(error);
        }
        let balance = await devToken.balanceOf(accounts[1]);
        let bigNum_balance = new BigNumber(balance)
        //判断 余额是否减少 并且 总量是否减少
        assert.equal(bigNum_balance.toFixed(), bigNum_initial_balance.minus(50).toFixed(), "Burning 50 should reduce users balance")

        let newSupply = await devToken.totalSupply();
        let bigNum_newSupply = new BigNumber(newSupply)
        let bigNum_totalSupply = new BigNumber(totalSupply)
        assert.equal(bigNum_newSupply.toFixed(), bigNum_totalSupply.minus(50).toFixed(), "Total supply not properly reduced")
    })
    it('transfer', async () => {
        const devToken = await DevToken.deployed();
        let balance = await devToken.balanceOf(accounts[1]);
        const istransfer = await devToken.transfer(accounts[1],10);
        const one_balance = await devToken.balanceOf(accounts[0]);
        const two_balance = await devToken.balanceOf(accounts[1]);
        let big_one_balance = new BigNumber(one_balance)
        let big_two_balance = new BigNumber(two_balance)
        let big_balance = new BigNumber(balance)
        assert.equal(big_two_balance.minus(10).toFixed(),big_balance.toFixed(),"transfer 10 is not")
    })
    it('allow account some allowance', async () =>{
        devToken = await DevToken.deployed();
        try {
            //让 address(0) 在 0 账户 上访问 100 个令牌
            await devToken.approve('0x0000000000000000000000000000000000000000',100);
        } catch (error) {
            assert.equal(error.reason, 'DevToken: approve cannot be to zero address', "Should be able to approve zero address");
        }
        
        try {
            //让账户 1 访问 0 账户上的 100 个令牌
            await devToken.approve(accounts[1], 100)
        } catch (error) {
            assert.fail(error); // shold not fail
        }
        //通过检查津贴来验证
        let allowance =await devToken.allowance(accounts[0],accounts[1])
        let big_allowance = new BigNumber(allowance)
        assert.equal(big_allowance.toFixed(),100,'Allowance was not correctly inserted')
    })
    it('transfering with allowance', async ()=>{
        devToken = await DevToken.deployed();
        try {
            //账户 1 现在应该有 100 个代币可以在账户 0 上使用
            // lets try using more
            await devToken.transferFrom(accounts[0],accounts[2],200,{from:accounts[1]})
        } catch (error) {
            assert.equal(error.reason, "DevToken: You cannot spend that much on this account", "Failed to detect overspending")
        }
        //获取 1 用户的津贴
        let init_allowance = await devToken.allowance(accounts[0], accounts[1]);
        let big_init_allowance = new BigNumber(init_allowance)
        console.log("init balalnce: ", big_init_allowance.toFixed())
        try{
            // Account 1 should have 100 tokens by now to use on account 0 
            // lets try using more 
            let worked = await devToken.transferFrom(accounts[0], accounts[2], 50, {from:accounts[1]});
        }catch(error){
            assert.fail(error);
        }

        // Make sure allowance was changed
        let allowance = await devToken.allowance(accounts[0], accounts[1]);
        assert.equal(allowance.toNumber(), 50, "The allowance should have been decreased by 50")
    })
    it('staking', async () => {
        devToken = await DevToken.deployed();
        //Stake 100 用于两次质押 100 个代币，并查看正确添加质押和烧钱
        let owner = accounts[0];
        let stake_amount = 100;
        //给 1 用户添加token
        await devToken.mint(accounts[1],1000);
        //获取owner的balance
        balance = await devToken.balanceOf(owner);

        //质押金额，注意 FROM 参数，该参数指定 msg.sender 地址是什么
        stakeID = await devToken.stake(stake_amount, { from: owner });
        //使用 truffleassert 断言发出的事件
         // 这将捕获事件并在事件回调中我们可以对返回的值使用断言
         /*
         truffleAssert.eventEmitted(ReturnedTransaction,"EventName",(ev) => {
            Your custom callback logic with assertion, ev is your event
            },
            "The error message to trigger if assertion faileed");
         */
         truffleAssert.eventEmitted(stakeID,'Staked',(ev)=>{
            //在这里，我们可以对 ev 变量进行断言（它是事件并将包含我们发出的值）
            assert.equal(ev.amount, stake_amount, "Stake amount in event was not correct");
            assert.equal(ev.index, 1, "Stake index was not correct");
            return true;
         },'Stake 事件应该已经触发');


         //第二次stake测试
         // Stake again on owner because we want hasStake test to assert summary
        stakeID = await devToken.stake(stake_amount, { from: owner });
        // Assert on the emittedevent using truffleassert
        // This will capture the event and inside the event callback we can use assert on the values returned
        truffleAssert.eventEmitted(
            stakeID,
            "Staked",
            (ev) => {
                // In here we can do our assertion on the ev variable (its the event and will contain the values we emitted)
                assert.equal(ev.amount, stake_amount, "Stake amount in event was not correct");
                assert.equal(ev.index, 1, "Stake index was not correct");
                return true;
            },
            "Stake event should have triggered");
    })
    it("cannot stake more than owning", async() => {

        // Stake too much on accounts[2]
        devToken = await DevToken.deployed();

        try{
            await devToken.stake(1000000000, { from: accounts[2]});
        }catch(error){
            assert.equal(error.reason, "DevToken: Cannot stake more than you own");
        }
    });
    //我们还将添加一个测试以确保正确分配利益相关者的索引，因此将在账户 1 上进行质押，现在索引应该是 2。
    it("new stakeholder should have increased index", async () => {
        let stake_amount = 100;
        stakeID = await devToken.stake(stake_amount, { from: accounts[1] });
        // Assert on the emittedevent using truffleassert
        // This will capture the event and inside the event callback we can use assert on the values returned
        truffleAssert.eventEmitted(
            stakeID,
            "Staked",
            (ev) => {
                // In here we can do our assertion on the ev variable (its the event and will contain the values we emitted)
                assert.equal(ev.amount, stake_amount, "Stake amount in event was not correct");
                assert.equal(ev.index, 2, "Stake index was not correct");
                return true;
            },
            "Stake event should have triggered");
    })
    //检查我们不能提取超过最初质押的数量
    it("cant withdraw bigger amount than current stake", async() => {
        devToken = await DevToken.deployed();

        let owner = accounts[0];

        // Try withdrawing 200 from first stake
        try {
            await devToken.withdrawStake(200, 0, {from:owner});
        }catch(error){
            assert.equal(error.reason, "Staking: Cannot withdraw more than you have staked", "Failed to notice a too big withdrawal from stake");
        }
    });
    //我们将看看提款是否真的按预期工作，我们将从 Stake 中提取 50 个代币
    it("withdraw 50 from a stake", async() => {
        devToken = await DevToken.deployed();

        let owner = accounts[0];
        let withdraw_amount = 50;
        // Try withdrawing 50 from first stake
        await devToken.withdrawStake(withdraw_amount, 0, {from:owner});
        // Grab a new summary to see if the total amount has changed
        let summary = await devToken.hasStake(owner);

        assert.equal(summary.total_amount, 200-withdraw_amount, "The total staking amount should be 150");
        // Itterate all stakes and verify their amount aswell. 
        let stake_amount = summary.stakes[0].amount;

        assert.equal(stake_amount, 100-withdraw_amount, "Wrong Amount in first stake after withdrawal");
    });
    //测试空质押账户
    it("remove stake if empty", async() => {
        devToken = await DevToken.deployed();

        let owner = accounts[0];
        let withdraw_amount = 50;
        // Try withdrawing 50 from first stake AGAIN, this should empty the first stake
        await devToken.withdrawStake(withdraw_amount, 0, {from:owner});
        // Grab a new summary to see if the total amount has changed
        let summary = await devToken.hasStake(owner);
        console.log(summary);

        assert.equal(summary.stakes[0].user, "0x0000000000000000000000000000000000000000", "Failed to remove stake when it was empty");
    });
    //使用 helper 中的advanceTimeAndBlock方法 快进时间
    it("calculate rewards", async() => {
        devToken = await DevToken.deployed();

        let owner = accounts[0];

        // Owner has 1 stake at this time, its the index 1 with 100 Tokens staked
        // So lets fast forward time by 20 Hours and see if we gain 2% reward     20小时是否收获2%
        const newBlock = await helper.advanceTimeAndBlock(3600*20);
        let summary = await devToken.hasStake(owner);

        
        let stake = summary.stakes[1];
        assert.equal(stake.claimable, 100*0.02, "Reward should be 2 after staking for twenty hours with 100")
        // Make a new Stake for 1000, fast forward 20 hours again, and make sure total stake reward is 24 (20+4)
        // Remember that the first 100 has been staked for 40 hours now, so its 4 in rewards.
        await devToken.stake(1000, {from: owner});
        await helper.advanceTimeAndBlock(3600*20);

        summary = await devToken.hasStake(owner);

        stake = summary.stakes[1];
        let newstake = summary.stakes[2];

        assert.equal(stake.claimable, (100*0.04), "Reward should be 4 after staking for 40 hours")
        assert.equal(newstake.claimable, (1000*0.02), "Reward should be 20 after staking 20 hours");
    });
    //测试获取的奖励是否正确
    it("reward stakes", async() => {
        devToken = await DevToken.deployed();
        // Use a fresh Account, Mint 1000 Tokens to it
        let staker = accounts[3];
        await devToken.mint(accounts[3],1000);
        let initial_balance = await devToken.balanceOf(staker);
        // Make a stake on 200, fast forward 20 hours, claim reward, amount should be Initial balanace +4
        await devToken.stake(200, {from: staker});
        await helper.advanceTimeAndBlock(3600*20);

        let stakeSummary = await devToken.hasStake(staker);
        let stake = stakeSummary.stakes[0];
        // Withdraw 100 from stake at index 0 
        await devToken.withdrawStake(100, 0, { from: staker});

        // Balance of account holder should be updated by 104 tokens
        let after_balance = await devToken.balanceOf(staker);

        let expected = 1000-200+100+Number(stake.claimable);
        assert.equal(after_balance.toNumber(), expected, "Failed to withdraw the stake correctly")
    
        // Claiming them again should not return any rewards since we reset timer
    
        try{
            await devToken.withdrawStake(100, 0 , {from:staker});
        }catch(error){
            assert.fail(error);
        }
        let second_balance = await devToken.balanceOf(staker);
        // we should have gained 100 this time.
        assert.equal(second_balance.toNumber(), after_balance.toNumber()+100, "Failed to reset timer second withdrawal reward")
    });
})