import React, { useEffect, useState } from 'react';
import { connect } from 'umi';
import { Toast, Button, Input, Card } from 'antd-mobile';
const BigNumber = require('bignumber.js');
import './index.less';
import { getprice } from '@/abi/service';

var Web3 = require('web3');

const HomeMainView = (props: any) => {
  const {
    contractAddr,
    accounts,
    devToken,
    totalSupply,
    accountBalance,
    userHasStake,
    dispatch,
  } = props;
  const [allreward, setallreward] = useState('');
  const [devTokenNum, setdevTokenNum] = useState(0);
  const [to_address, setto_address] = useState('');
  const [ethTokenNum, setethTokenNum] = useState(0);
  const [eth_to_address, seteth_to_address] = useState('');
  // console.log("contractAddr:",contractAddr)
  // console.log("accounts:",accounts)
  // console.log("devToken:",devToken)
  // console.log("totalSupply:",totalSupply)
  // console.log("accountBalance:",accountBalance)
  // console.log("userHasStake:",userHasStake)
  // console.log("allreward:",allreward)
  //获取质押奖励
  const getReward = () => {
    const stakes = userHasStake[1];
    let num = new BigNumber(0);
    for (let i = 0; i < stakes.length; i++) {
      num = num.plus(stakes[i][3]);
    }
    setallreward(num.toFixed());
  };
  useEffect(() => {
    if (userHasStake) {
      getReward();
      getprice();
    }
  }, [userHasStake]);
  //合约质押方法
  const stake = async () => {
    try {
      //estimateGas计算质押多少wei，要消费的gas。比如1000wei。
      const gas = await devToken.methods
        .stake(1000)
        .estimateGas({ from: accounts[0] });
      //执行stake方法  并 发送计算的gas
      //改变区块链状态 使用send()
      //不改变 使用call()
      const data = await devToken.methods.stake(1000).send({
        from: accounts[0],
        gas: gas,
      });
      const big_accountBalance = new BigNumber(accountBalance);
      console.log('res:', data);
      //质押减少用户余额
      await dispatch({
        type: 'baseData/changeAccountBalance',
        payload: big_accountBalance.minus(1000).toFixed(),
      });
      //重新获取信息
      await dispatch({
        type: 'baseData/getTokenEffects',
      });
    } catch (error: any) {
      Toast.show({
        content: error.message,
      });
    }
  };

  //解质押
  const withdrawStake = async (v: any, index: number) => {
    const stakes = userHasStake[1];
    console.log('aaa', stakes[0][1]);
    try {
      await devToken.methods
        .withdrawStake(v[1], index)
        .send({ from: accounts[0] });
      //重新获取信息
      await dispatch({
        type: 'baseData/getTokenEffects',
      });
    } catch (error) {
      console.log(error);
    }
  };

  //转账
  const transfer = async () => {
    if(devTokenNum&&to_address){
      //接受账户0xa2AB455D67B1Dd4F81b9Ab73D7D1b0a0eAcCbba4 金额200000000000
      console.log('转账=====');
      console.log('金额:', devTokenNum);
      console.log('接受账户:', to_address);
      await devToken.methods
        .transfer(to_address, devTokenNum)
        .send({ from: accounts[0] });
      //重新获取信息
      await dispatch({
        type: 'baseData/getTokenEffects',
      });
    }
  };

  //eth 转账
  const transfer_eth = async () => {
    if(ethTokenNum&&eth_to_address){

      let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
      let balance =await web3.eth.getBalance(accounts[0])
      console.log(web3); 
      console.log(balance,'wei'); 
      console.log('转账=====');
      console.log('金额:', ethTokenNum,'eth');
      console.log('接受账户:', eth_to_address);
      //获取指定地址发起的交易数，可用于下一次交易的Nonce值
      let nonce =await web3.eth.getTransactionCount(accounts[0])
      let value = await web3.utils.toWei(ethTokenNum) 
      let params = {
        nonce,
        to:eth_to_address,
        value,
        from:accounts[0]
      }
      console.log('params:', params);
      await web3.eth.sendTransaction(params,(err:any,transactionHash:any)=>{
        if(!err){
          Toast.show({
            content:`交易成功${transactionHash}`
          })
        }else{
          Toast.show({
            content:'交易失败'
          })
        }
      })
    }

    
  };
  return (
    <>
      <div>
        <header className="App-header">
          <p className="wel"> Welcome to your DAPP</p>
          <p className="des">The total supply is {totalSupply}</p>
          <p className="des">Account balance: {accountBalance}</p>
          <p className="des">
            User HasStake: {userHasStake && userHasStake[0]}
          </p>
          <p className="des">Account All Reward: {allreward}</p>
          <Card
            title="我的token转账"
            style={{
              color:'#000',
              margin: 10,
            }}
          >
            <div>
              <div style={{color:'#000'}}>转账devToken的数量</div>
              <Input
                placeholder="转账devToken"
                type="number"
                onChange={(v: any) => {
                  setdevTokenNum(v);
                }}
              />
            </div>
            <div>
              <div style={{color:'#000'}}>转账到账户</div>
              <Input
                placeholder="转账到账户"
                type="text"
                onChange={(v: any) => {
                  setto_address(v);
                }}
              />
            </div>
            <div>
              <Button onClick={transfer} className="stake-btn">
                Transfer
              </Button>
            </div>
          </Card>
          <Card
            title="我的eth转账"
            style={{
              margin: 10,
              color:'#000'
            }}
          >
            <div>
              <div style={{color:'#000'}}>转账eth</div>
              <Input
                placeholder="转账eth"
                type="number"
                onChange={(v: any) => {
                  setethTokenNum(v);
                }}
              />
            </div>
            <div>
              <div style={{color:'#000'}}>转账到账户</div>
              <Input
                placeholder="转账到账户"
                type="text"
                onChange={(v: any) => {
                  seteth_to_address(v);
                }}
              />
            </div>
            <div>
              <Button onClick={transfer_eth} className="stake-btn">
                Transfer_eth
              </Button>
            </div>
          </Card>
          <Button onClick={stake} className="stake-btn">
            Stake
          </Button>
          <div>
            <p
              className="des"
              style={{
                marginTop: 60,
              }}
            >
              Stake List
            </p>
            <div>
              <div>
                {userHasStake &&
                  userHasStake[1].map((item: any, index: number) => {
                    return (
                      <div key={index}>
                        {item.user !=
                        '0x0000000000000000000000000000000000000000' ? (
                          <div className="list">
                            <div className="reward">Reward:{item[3]}</div>
                            <Button
                              onClick={() => withdrawStake(item, index)}
                              size="small"
                            >
                              withdrawStake
                            </Button>
                          </div>
                        ) : (
                          ''
                        )}
                      </div>
                    );
                  })}
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
})(React.memo(HomeMainView));
