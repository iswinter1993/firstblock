import type { IRouteComponentProps } from 'umi';
import React, { useEffect, useMemo, useState } from 'react';
import type { BadgeProps } from 'antd-mobile/es/components/badge';
import TabBarLayout from '../../layouts/tab-bar';
import './index.less';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
export interface TabBarItemValueProps {
  homeBadge?: BadgeProps['content'];
  todoBadge?: BadgeProps['content'];
  messageBadge?: BadgeProps['content'];
  meBadge?: BadgeProps['content'];
}
import { Toast } from 'antd-mobile';
// 根据前进还是后退显示不同的转场动画效果
const ANIMATION_MAP: any = {
  PUSH: 'forward',
  POP: 'back',
};

//底部导航状态管理
export const TabBarContext = React.createContext<{
  items: TabBarItemValueProps;
  callback?: (values: TabBarItemValueProps) => void;
}>({
  items: {},
});

//开启推送前 注册serviceWorker
const registerServiceWorker = () => {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(
      (e) => {
        console.log('serviceWorker注册成功');
      },
      (err) => {
        console.log('serviceWorker register err:', err);
      },
    );
  });
};

/**
 * 不同的全局 layout
 * @param props
 * @url https://umijs.org/zh-CN/docs/convention-routing#%E4%B8%8D%E5%90%8C%E7%9A%84%E5%85%A8%E5%B1%80-layout
 */

export default (props: IRouteComponentProps) => {
  console.log(props)
  const { children, location, history } = props;
  const connectMetaMask = async () => {
    // We need to make the connection to MetaMask work.
    // Send Request for accounts and to connect to metamask.
    window.web3.requestAccounts().then((res:any)=>{
      console.log('result:',res)
    }).catch((err:any)=>{
      console.log('error:',err)
      Toast.show({
        content: err.message,
      })
    });
    
  }
  useEffect(()=>{
    // Check if its MetaMask that is installed
    if (window.web3.currentProvider.isMetaMask === true) {
      console.log('isMetaMask:true')
      // connectMetaMask();
    } else {
      // Another web3 provider, add support if you want
      console.log('isMetaMask:false')
    }
    console.log('web3:',web3.currentProvider)
  },[])

  if (!('serviceWorker' in navigator)) {
    console.log('此浏览器不支持 serviceWorker 请禁用或隐藏UI');
    return;
  }
  if (!('PushManager' in window)) {
    console.log('此浏览器不支持 Push 请禁用或隐藏UI');
    return;
  }

  const [taBarItemValues, setTabBarItemValues] = useState<
    TabBarItemValueProps | any
  >({});
  //底部导航栏getLayoutChildren
  const getLayoutChildren = useMemo(() => {
    if (props.location.pathname.includes('/tabBar/')) {
      console.log('====== TabBarLayout ======');
      return <TabBarLayout {...props}>{props.children}</TabBarLayout>;
    }
    console.log('basic-layout-warp');
    return <div className="basic-layout-warp">{props.children}</div>;
  }, [props]);
  //头部navbar显示隐藏判断
  const getTopNavBarLayoutChildren = useMemo(() => {
    if (props.location.pathname.includes('/nav/')) {
      console.log('====== nav ======');
      return (
        <div className="big_box">
          {/* <TopNavBar /> */}
          {props.children}
          {/* <PageFooter /> */}
        </div>
      );
    }
    console.log('basic-layout-warp');
    return <div className="basic-layout-warp">{props.children}</div>;
  }, [props]);
  return (
    // <TabBarContext.Provider
    //     value={{
    //         items: taBarItemValues,
    //         callback: (items) => setTabBarItemValues({ ...items }),
    //     }}
    // >
    <TransitionGroup
      childFactory={(child: any) =>
        React.cloneElement(child, { classNames: ANIMATION_MAP[history.action] })
      }
    >
      <CSSTransition key={location.pathname} timeout={300}>
        <div className="global-layout">{getTopNavBarLayoutChildren}</div>
      </CSSTransition>
    </TransitionGroup>

    // </TabBarContext.Provider>
  );
};
