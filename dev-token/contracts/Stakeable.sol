// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
//Stakeable 是一种合约，旨在被其他需要 Staking 功能的合约继承
contract Stakeable {
    constructor(){
        //构造函数，因为这个合约不能在没有继承的情况下使用 * 向利益相关者推送一次，以使其正常工作
        // This push is needed so we avoid index 0 causing bug of index-1
        //需要此推送，因此我们避免index为0 _stake方法导致错误
        stakeholders.push();
    }
    /*定义奖励机制 我们将实施一个奖励系统，以每小时 0.1% 的质押奖励用户。
        rewardPerHour 是 1000，它用于表示 0.001 , 我们只使用整数
       这将为每个质押的代币/ H 给用户 0.1% 的奖励
    
    */
    uint256 rewardPerHour = 1000;

    /*
        StakingSummary 是一个结构体，用于包含某个帐户执行的所有质押
    */
    struct StakingSummary {
        uint256 total_amount;
        Stake[] stakes;
    }
    /*
    struct类似js的数组 ，数组里是Stake对象， 这个结构用于表示我们存储 Stake对象 的方式，
      * 质押将包含用户地址、质押数量和时间戳，
      * 从哪一天开始下注
    */
    struct Stake {
        address user; //用户
        uint256 amount; //stake的数量
        uint256 since; //从哪一天开始stake
        //这个可申请的字段是新的，用于说明当前可用的奖励有多大
        uint256 claimable;
    }
    //储存活跃的质押者的方式
    struct Stakeholder {
        address user;
        Stake[] address_stakes;
    }
    /*定义一个 Stakeholder 类型的数组，我们存储在合约上执行的所有的 stakes 
     * 每个地址的 stakes 都存储在某个索引中，可以使用权益映射找到该索引
     */
    Stakeholder[] internal stakeholders;

    // stakes 用于跟踪数组中 address  的 index；
    mapping(address => uint256) internal stakes;

    //每当用户质押代币时触发质押事件，地址被索引以使其可过滤
    event Staked(address indexed user, uint256 amount, uint256 index, uint256 timestamp);

    //_addStakeholder 负责将质押者添加到质押者数组中 返回userIndex，相当于用户id
    function _addStakeholder(address staker) internal returns (uint256){
        //在 Stakeholders 数组中添加一个空白区域并为其分配新的 Stakeholder 值
        stakeholders.push();
        //计算数组最后一项的索引
        uint256 userIndex = stakeholders.length - 1;
        //将地址分配给新index
        stakeholders[userIndex].user = staker;
        //Add index to the stakeHolders
        stakes[staker] = userIndex;
        return userIndex; 
    }
    /*_stake 用于为 sender 进行质押。 它将从质押者账户中移除质押金额并将这些代币放入质押容器中
     * StakeID
     */
     function _stake(uint256 _amount) internal {
         //让我们确保 Stake 不为 0。
         require(_amount>0,'Cannot stake nothing');
         //检查地址是否在stakes中
         uint256 index = stakes[msg.sender];
         //block.timestamp当前区块时间的时间戳
         uint256 timestamp = block.timestamp;
        //查看质押者是否已经拥有质押索引，或者是否是第一次
        if(index == 0){
            //This stakeholder stakes for the first time 质押者第一次质押
            //我们需要将他添加到stakeHolders，并将其映射到stakes的索引中
            // 返回的索引将是stakes数组中staker的索引
            index = _addStakeholder(msg.sender);
        }
        // 使用 index 推送新的 Stake
         // 使用当前区块时间戳推送新创建的 Stake。
        stakeholders[index].address_stakes.push(Stake(msg.sender, _amount, timestamp,0));
        //发出一个发生质押的事件
        emit Staked(msg.sender,_amount,index,timestamp);
     }

    //计算质押者 获得的代币
    //临时存储数据 memory
    function calculateStakeReward(Stake memory _current_stake) internal view returns(uint256){
        //首先计算质押了多长时间
        //用当前时间 减去 质押时间
        //我们将每小时奖励用户 0.1% 即每 3600 秒 0.1%
        /*
        该算法将如下
        通过 block.timestamp 计算持续时间——质押的时间，这将返回秒
        除以 1 小时（Solidity 内部变量为 3600 秒）
        乘以赌注金额
        除以rewardPerHour 费率。
        */
        return (((block.timestamp - _current_stake.since) / 1 hours) * _current_stake.amount) / rewardPerHour; 
    } 

    /*
    解除质押，取出代币
        _withdrawStake 接受一个 数量amount 和 一个 Stake的 索引index ，并且会 删除stake里的对应token
    */
    function _withdrawStake(uint256 amount,uint256 index) internal returns(uint256) {
        //获取合约调用者的 索引index
        uint256 user_index  = stakes[msg.sender];
        // 通过 index 获取当前合约调用者质押的stakes
        Stake memory current_stake = stakeholders[user_index].address_stakes[index];

        //判断当前用户质押的amount 大于等于 输入的amount
        require(current_stake.amount >= amount,"Staking: Cannot withdraw more than you have staked");
        //在我们开始修改数据之前先计算可用的奖励
        uint256 reward = calculateStakeReward(current_stake);
        //计算用户解押后的current_stake.amount
        current_stake.amount = current_stake.amount - amount;
        if(current_stake.amount == 0){
        //判断如果current_stake.amount为空， 0 则删除address_stakes中的stake
            delete stakeholders[user_index].address_stakes[index];
        }else{
            //计算后重新给 stake 的 amount 赋值为当前计算后的 current_stake.amount
            stakeholders[user_index].address_stakes[index].amount = current_stake.amount;
            //重置时间戳
            stakeholders[user_index].address_stakes[index].since = block.timestamp;
        }
        return amount + reward;
    }
}