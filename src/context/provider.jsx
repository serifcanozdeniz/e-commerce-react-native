//import liraries
import React, {useState} from 'react';
import StoreContext from './index';

// create a component
const Provider = ({children}) => {
  const [cart, setCart] = useState([]);
  const addCart = product => {
    setCart([...cart, product]);
  };
  return (
    <StoreContext.Provider value={{cart, addCart}}>
      {children}
    </StoreContext.Provider>
  );
};

export default Provider;
