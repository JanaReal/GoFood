import React, { createContext, useReducer, useContext } from 'react'


const CartStateContext = createContext([]);
const CartDispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { id: action.id, name: action.name, qty: action.qty, size: action.size, price: action.price, imp: action.img }];

        case "REMOVE":
            let newArr = [...state]
            newArr.splice(action.index, 1)
            return newArr;

        case "UPDATE":
            return state.map((food) => {
                if (food.id === action.id && food.size === action.size) {
                    return {
                        ...food,
                        qty: parseInt(food.qty) + parseInt(action.qty),
                        price: parseInt(food.price) + parseInt(action.price)
                    };
                }
                return food;
            });

        case "DROP":
            let empArr = [];
            return empArr;

        default:
            console.log("error in reducer");
    }
}


export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, [])
    return (


        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>

    )
}

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);