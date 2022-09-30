import { useState } from "react";
import { createContext } from "react"

export const CartContext = createContext ( );
export default function CartContextProvider ({children}) {

    const [CartData,SetCartData] = useState([ ]);
    const [TotalCartPrice,SetTotalCartPrice] = useState(0);

    console.log(CartData)
    return (

        <>
        <CartContext.Provider value={{CartData,SetCartData,TotalCartPrice,SetTotalCartPrice}}>
            {children}
        </CartContext.Provider>
        </>
    )
}