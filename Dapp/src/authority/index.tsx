import { ReactChild, ReactFragment, ReactPortal, useCallback } from 'react';
import { Redirect, connect } from 'umi';
import Cookies from 'js-cookie';

const Authorization = (props: any) => {
  const { dispatch } = props;
  const useAuth = () => {
    let isLogin = false;
    console.log('userName----');
    const userName = Cookies.get('MODCART_USER_NAME');
    console.log('userName', userName);
    if (userName) {
      isLogin = true;
    }
    return { isLogin };
  };
  const { isLogin } = useAuth();
  if (isLogin) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/login" />;
  }
};
export default connect(({ loginState }: any) => {
  return {
    ...loginState,
  };
})(Authorization);
