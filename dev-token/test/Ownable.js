const Ownable = artifacts.require("DevToken");
contract('Ownable', async accounts =>{
    it('transfer ownership', async ()=>{
        ownable = await Ownable.deployed();
        let owner =await ownable.owner();
        //Make sure account 0 is owner
        assert.equal(owner,accounts[0],'Make sure account 0 is owner')
        // Transfer it to account 1 
        await ownable.transferOwnership(accounts[1])
        // Verify that accounts 1 is now the new owner
        let new_owner = await ownable.owner();
        assert.equal(new_owner,accounts[1],'The ownership was not transferred')
    })
    it('onlyOwner modifier', async ()=>{
        ownable = await Ownable.deployed();
        //尝试从账户 2 执行转账
        try {
            await ownable.transferOwnership(accounts[2], { from: accounts[3]});
            let owner =await ownable.owner();
            console.log('owner',owner)
        }catch(error){
            console.log('owner',error.reason)
            assert.equal(error.reason, "Ownable: only owner can call this function", "Failed to stop non-owner from calling onlyOwner protected function");
        }
    })

    it("renounce ownership", async () => {
        ownable = await Ownable.deployed();

        // renounce from accounts 1 as it is the new owner
        await ownable.renounceOwnership({ from: accounts[1]});
        
        let owner = await ownable.owner();

        assert.equal(owner, '0x0000000000000000000000000000000000000000', 'Renouncing owner was not correctly done')
        
    })
})