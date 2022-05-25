import type { IRouteComponentProps } from 'umi';
import { connect } from 'umi';
import React, { useEffect, useMemo, useState } from 'react';
import type { BadgeProps } from 'antd-mobile/es/components/badge';
import TabBarLayout from './tab-bar';
import './index.less';

export interface TabBarItemValueProps {
  homeBadge?: BadgeProps['content'];
  todoBadge?: BadgeProps['content'];
  messageBadge?: BadgeProps['content'];
  meBadge?: BadgeProps['content'];
}
export interface OptionProps {
  filter?:{}
}
export const TabBarContext = React.createContext<{
  items: TabBarItemValueProps;
  callback?: (values: TabBarItemValueProps) => void;
}>({
  items: {},
});

/**
 * 不同的全局 layout
 * @param props
 * @url https://umijs.org/zh-CN/docs/convention-routing#%E4%B8%8D%E5%90%8C%E7%9A%84%E5%85%A8%E5%B1%80-layout
 */

const PageView = (props: any) => {
  
  const { dispatch,accounts,devToken } = props

  const [accountsstate,setaccountsstate] = useState()
  let options = {
    filter: {
        address: accounts?[accounts[0]]:[]
    },
  };

  useEffect(()=>{
    getInit()
  },[])
  const getInit = async ()=>{

    await dispatch({
      type:'baseData/getAbiEffects'
    })
    await dispatch({
      type:'baseData/getWeb3Effects',
    })
    await dispatch({
      type:'baseData/getTokenEffects'
    })
  }

  useEffect(()=>{
    if(accounts?.length>0 && devToken){
      subscriptions(options)
    }
  },[accounts,devToken])

  const subscriptions = async (options:OptionProps) => {
    // Our contract has a field called events which has all Available events.
    //合约中自带的通用事件
    console.log('监听事件=====')
    devToken.events.Staked(options).
    on('data',(event:any)=>console.log('Data:',event)) //以日志对象作为参数在每个传入日志上触发
    .on('changed',(changed:any)=>console.log('Changed:',changed))//在从区块链中删除的每个日志上触发。日志将具有附加属性"removed: true"。
    .on('error',(error:any)=>console.log('Error:',error))//当订阅中发生错误时触发。
    .on('connected',(connected:any)=>console.log('Connected:',connected))//返回String：订阅成功连接后触发一次。返回订阅 ID。
    devToken.events.Transfer(options)
    .on('data',(event:any)=>console.log('Data:',event)) //以日志对象作为参数在每个传入日志上触发
    .on('changed',(changed:any)=>console.log('Changed:',changed))//在从区块链中删除的每个日志上触发。日志将具有附加属性"removed: true"。
    .on('error',(error:any)=>console.log('Error:',error))//当订阅中发生错误时触发。
    .on('connected',(connected:any)=>console.log('Connected:',connected))//返回String：订阅成功连接后触发一次。返回订阅 ID。
  }
  const [taBarItemValues, setTabBarItemValues] = useState<
    TabBarItemValueProps | any
  >({});
  const getLayoutChildren = useMemo(() => {
    if (props.location.pathname.includes('/tabBar/')) {
      console.log('====== TabBarLayout ======');
      return <TabBarLayout {...props}>{props.children}</TabBarLayout>;
    }
    console.log('basic-layout-warp');
    return <div className="basic-layout-warp">{props.children}</div>;
  }, [props]);
  return (
    <TabBarContext.Provider
      value={{
        items: taBarItemValues,
        callback: (items) => setTabBarItemValues({ ...items }),
      }}
    >
      <div className="global-layout" >{getLayoutChildren}</div>
    </TabBarContext.Provider>
  );
};
export default connect((props:any)=>({...props.baseData}))(React.memo(PageView))