import { Map, List } from 'immutable';
import { getABI } from '@/abi/service';
import Web3 from 'web3-eth';
import { Toast } from 'antd-mobile';

// connectMetaMask is used to connect to MetaMask and ask permission to grab account information
const connectMetaMask = async () => {
  // We need to make the connection to MetaMask work.
  // Send Request for accounts and to connect to metamask.
  try {
    const data = await web3.requestAccounts();
    console.log('success', data);
    return data;
  } catch (error) {
    console.log('error:', error);
    Toast.show({
      content: error.message,
    });
  }
};

const connectToSelectedNetwork = async (contractAddr) => {
  // This will connect to the selected network inside MetaMask
  const web3 = new Web3(Web3.givenProvider);
  // Set the ABI of the Built contract so we can interact with it
  const abi = await getABI();
  const address = contractAddr;
  // Make a new instance of the contract by giving the address and abi
  const devtoken = new web3.Contract(abi.abi, address);
  // Set the state of the app by passing the contract so we can reach it from other places
  return devtoken;
};

// getUserProfile will fetch account information from the block chain network
const getUserProfile = async (params) => {
  console.log('params:',params)
  const {devtoken,accounts} = params;
  // Let's grab the tokens total supply, the method is named the same as in the Solidity code, and add call() to execute it. 
  // We will add the keyword await to let the code know that it should block until the reponse arrives. 
  //获取总的货币
  const devTokenSupply = await devtoken.methods.totalSupply().call();
  //获取用户余额
  const balanceOf = await devtoken.methods.balanceOf(accounts[0]).call();
  //获取质押余额
  const hasStake = await devtoken.methods.hasStake(accounts[0]).call();
  return {devTokenSupply,balanceOf,hasStake};
}
export default {
  //命名空间
  namespace: 'baseData',
  state: {
    //初始数据
    abi: {},
    accounts: [],
    contractAddr: '0xf9CA807eb155F0060e3B41C0329aF53Bc13839a4',
    devToken: {},
    totalSupply: null,
    accountBalance:null,
    userHasStake:null
  },
  effects: {
    //管理异步操作
    *getAbiEffects({ payload }, { call, put, select }) {
      const data = yield call(getABI, null);
      yield put({
        type: 'changeABI',
        payload: data,
      });
    },

    *getWeb3Effects({ payload }, { call, put, select }) {
      let res;
      if (typeof web3 !== 'undefined') {
        web3 = yield new Web3(web3.currentProvider);
        if (web3.currentProvider.isMetaMask === true) {
          res = yield call(connectMetaMask, null);
        } else {
          // Another web3 provider, add support if you want
        }
      } else {
        // The browser has no web3
        // Suggest the user to install a web3 compatible browser plugin
        Toast.show({
          content:
            'No web3 support, redirect user to a download page or something :) ',
        });
      }
      yield put({
        type: 'changeAccounts',
        payload: res,
      });
    },
    *getTokenEffects({ payload }, { call, put, select }) {
      const  {contractAddr,accounts}  = yield select((state) => state.baseData);
      try {
        const devtoken = yield call(connectToSelectedNetwork, contractAddr);
        
        yield put({
          type: 'changedevToken',
          payload: devtoken,
        });

        if(devtoken&&accounts.length>0){
          const {devTokenSupply:totalSupply,balanceOf:accountBalance,hasStake:userHasStake} = yield call(getUserProfile, {devtoken,accounts})
          yield put({
            type:'changetotalSupply',
            payload:totalSupply
          })
          yield put({
            type:'changeAccountBalance',
            payload:accountBalance
          })
          yield put({
            type:'changeUserHasStake',
            payload:userHasStake
          })
        }
      } catch (error) {
        console.log('error:', error);
        Toast.show({
          content: error.message,
        });
      }
    },
  },
  reducers: {
    changeABI(state, { payload }) {
      return {
        ...state,
        abi: payload,
      };
    },
    changeAccounts(state, { payload }) {
      return {
        ...state,
        accounts: payload,
      };
    },
    changedevToken(state, { payload }) {
      return {
        ...state,
        devToken: payload,
      };
    },
    changetotalSupply(state, { payload }) {
      return {
        ...state,
        totalSupply: payload
      }
    },
    changeAccountBalance(state, { payload }) {
      return {
        ...state,
        accountBalance: payload
      }
    },
    changeUserHasStake(state, { payload }) {
      return {
        ...state,
        userHasStake: payload
      }
    }
  },
};
