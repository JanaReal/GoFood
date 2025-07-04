import React from 'react'


const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {

}


export const CartProvider = ({ children }) => {

    const [state, dispatch] = usseReducer(reducer, [])
    return (
        <CartProvider>

            <CartDispatchContext.Provider value={dispatch}>
                <CartStateContext.Provider value={state}>
                    {children}
                </CartStateContext.Provider>
            </CartDispatchContext.Provider>
        </CartProvider>
    )
}

export const useCart =()=> useContext(CartStateContext);
export const  useDispatchCart = ()=> useContext(CartDispatchContext)