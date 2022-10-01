import { useState } from "react";
import { createContext } from "react"

export const CartContext = createContext ( );

export default function CartContextProvider ({children}) {

    const [CartData,SetCartData] = useState([ ]);
    const [TotalCartPrice,SetTotalCartPrice] = useState(0);
    const [ToPayment,SetToPayment] = useState({ });

    return (

        <>
        <CartContext.Provider value={{CartData,SetCartData,TotalCartPrice,SetTotalCartPrice, ToPayment,SetToPayment}}>
            {children}
        </CartContext.Provider>
        </>
    )
}