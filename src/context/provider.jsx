//import liraries
import React, {useState} from 'react';
import StoreContext from './index';

// create a component
const Provider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const addCart = product => {
    setCart([...cart, product]);
  };
  return (
    <StoreContext.Provider value={{cart, addCart, isLogin, setIsLogin}}>
      {children}
    </StoreContext.Provider>
  );
};

export default Provider;
