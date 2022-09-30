import { useState } from "react";
import { createContext } from "react"

export const CartContext = createContext ( );
export default function CartContextProvider ({children}) {

    const [CartData,SetCartData] = useState([ ]);
    return (

        <>
        <CartContext.Provider value={{CartData,SetCartData}}>
            {children}
        </CartContext.Provider>
        </>
    )
}