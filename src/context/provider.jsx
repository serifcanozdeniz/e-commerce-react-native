//import liraries
import React, {useState} from 'react';
import StoreContext from './index';

// create a component
const Provider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  const addCart = product => {
    setCart([...cart, product]);
  };

  const addFavorites = product => {
    product.favorite = true;
    setFavorites([...favorites, product]);
  };
  return (
    <StoreContext.Provider
      value={{
        cart,
        addCart,
        isLogin,
        setIsLogin,
        favorites,
        setFavorites,
        addFavorites,
      }}>
      {children}
    </StoreContext.Provider>
  );
};

export default Provider;
