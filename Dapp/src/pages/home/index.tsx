import React, { useEffect, useState } from 'react';
import { connect } from 'umi';
const BigNumber = require('bignumber.js')

const HomeMainView = (props: any) => {
  const { contractAddr,accounts,devToken,totalSupply,accountBalance,userHasStake,dispatch } = props;
  console.log("contractAddr:",contractAddr)
  console.log("accounts:",accounts)
  console.log("devToken:",devToken)
  console.log("totalSupply:",totalSupply)
  console.log("accountBalance:",accountBalance)
  console.log("userHasStake:",userHasStake)
  //合约质押方法
  const stake =async () => {
    //estimateGas计算质押多少wei，要消费的gas。比如1000wei。
    const gas = await devToken.methods.stake(1000).estimateGas({from: accounts[0]})
    const data = await devToken.methods.stake(1000).send({
      from: accounts[0],
      gas: gas
    });
    const big_accountBalance = new BigNumber(accountBalance)
    console.log('res:',data);
    //质押减少用户余额
    await dispatch({
      type:'baseData/changeAccountBalance',
      payload:big_accountBalance.minus(1000).toFixed()
    })
  }
  return (
    <>
      <div>
        <header className="App-header">
          <p> Welcome to your DAPP</p>
          <p>The total supply is {totalSupply}</p>
          <p>Account balance: {accountBalance}</p>
          <p>User HasStake: {userHasStake}</p>
          <button onClick={stake}><p>Stake</p></button>
        </header>
      </div>
    </>
  );
};
export default connect(({ baseData }: any) => {
  return {
    ...baseData,
  };
})(HomeMainView);
