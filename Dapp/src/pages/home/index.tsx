import React, { useEffect, useState } from 'react';
import { connect } from 'umi';
import { Toast,Button } from 'antd-mobile';
const BigNumber = require('bignumber.js');
import './index.less'
const HomeMainView = (props: any) => {
  const { contractAddr,accounts,devToken,totalSupply,accountBalance,userHasStake,dispatch } = props;
  const [allreward, setallreward] = useState('')
  console.log("contractAddr:",contractAddr)
  console.log("accounts:",accounts)
  console.log("devToken:",devToken)
  console.log("totalSupply:",totalSupply)
  console.log("accountBalance:",accountBalance)
  console.log("userHasStake:",userHasStake)
  console.log("allreward:",allreward)
  //获取质押奖励
  const getReward = () => {
    const stakes = userHasStake[1]
    let num =new BigNumber(0)
    for(let i = 0; i<stakes.length; i++){
      num =num.plus(stakes[i][3])
    }
    setallreward(num.toFixed())
  }
  useEffect(()=>{
    if(userHasStake){
      getReward()
    }
  },[userHasStake])
  //合约质押方法
  const stake =async () => {
    try {
      //estimateGas计算质押多少wei，要消费的gas。比如1000wei。
      const gas = await devToken.methods.stake(1000).estimateGas({from: accounts[0]})
      //执行stake方法  并 发送计算的gas
      //改变区块链状态 使用send()
      //不改变 使用call()
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
      //重新获取信息
      await dispatch({
        type:'baseData/getTokenEffects',
      })
    } catch (error:any) {
      Toast.show({
        content:error.message
      })
    }
  }

  //解质押
  const withdrawStake = async (v:any,index:number) => {
    const stakes = userHasStake[1] 
    console.log('aaa',stakes[0][1])
    try {
      await devToken.methods.withdrawStake(v[1],index).send({from:accounts[0]})
      //重新获取信息
      await dispatch({
        type:'baseData/getTokenEffects',
      })
    } catch (error) {
      console.log(error)
    }
    
  }

  //转账
  const transfer = async () => {
    //接受账户0xa2AB455D67B1Dd4F81b9Ab73D7D1b0a0eAcCbba4 金额200000000000
    console.log('转账=====')
    console.log('金额:200000000000')
    console.log('接受账户:0xa2AB455D67B1Dd4F81b9Ab73D7D1b0a0eAcCbba4')
    await devToken.methods.transfer('0xa2AB455D67B1Dd4F81b9Ab73D7D1b0a0eAcCbba4',200000000000).send({from:accounts[0]})
    //重新获取信息
    await dispatch({
      type:'baseData/getTokenEffects',
    })
  }
  return (
    <>
      <div>
        <header className="App-header">
          <p className='wel'> Welcome to your DAPP</p>
          <p className='des'>The total supply is {totalSupply}</p>
          <p className='des'>Account balance: {accountBalance}</p>
          <p className='des'>User HasStake: {userHasStake&&userHasStake[0]}</p>
          <p className='des'>Account All Reward: {allreward}</p>
          <div>
            <Button onClick={transfer} className="stake-btn">Transfer</Button>
          </div>
          <Button onClick={stake} className="stake-btn">Stake</Button>
          <div>
            <p  className='des' style={{
              marginTop:60
            }}>Stake List</p>
            <div>
              <div>
                { 
                  userHasStake&&
                  userHasStake[1].map((item:any,index:number)=>{
                    return(
                      <div key={index}>
                      {
                        item.user != '0x0000000000000000000000000000000000000000'?
                        <div className='list' >
                          <div className='reward'>Reward:{item[3]}</div>
                          <Button onClick={()=>withdrawStake(item,index)} size='small' >withdrawStake</Button>
                        </div>:''
                      }
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
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
