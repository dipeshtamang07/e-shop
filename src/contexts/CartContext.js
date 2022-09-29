import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [cartLength, setCartLength] = useState(0);
    // const [cartItems, setCartItems] = useState([]);

    return (
        <CartContext.Provider value={{ cartLength, setCartLength }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;