import React from 'react'
import { useCart, useDispatchCart } from '../components/ContextReducer';
//import trash from "../trash.svg";
export default function Cart() {
    let data = useCart();

    let dispatch = useDispatchCart();
    if (!data || data.length === 0) {
        return (
            <div>
                <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
            </div>
        )
    }

    console.log(data);
    const handleCheckOut = async () => {
        let userEmail = localStorage.getItem("userEmail");

        const response = await fetch("http://localhost:5000/api/orderData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                order_data: data,              // ✅ should be a non-empty array
                email: userEmail,              // ✅ must be a valid string
                order_date: new Date().toDateString()
            })
        });

        console.log("Order Response: ", response);

        if (response.status === 200) {
            dispatch({ type: "DROP" });
            alert("Order placed!");
        } else {
            alert("Order failed!");
        }
        console.log("Sending order to backend:", {
            order_data: data,
            email: userEmail,
            order_date: new Date().toDateString()
        });
    }





    let totalPrice = data.reduce((total, food) => total + food.price, 0);
    return (
        <div><div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
            <table className='table table-hover '>
                <thead className=' text-success fs-4'>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Quantity</th>
                        <th scope='col'>Option</th>
                        <th scope='col'>Amount</th>
                        <th scope='col'></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((food, index) => (
                        <tr>
                            <th scope='row'>{index + 1}</th>
                            <td>{food.name}</td>
                            <td>{food.qty}</td>
                            <td>{food.size}</td>
                            <td>{food.price}</td>
                            <td>
                                <button type="button" className="btn p-0">
                                    <img src='https://img.icons8.com/?size=100&id=85081&format=png&color=000000' alt="delete" onClick={() => { dispatch({ type: "REMOVE", index: index }) }} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <h1 className='fs-2'>Total Price: {totalPrice}/-</h1>
            </div>
            <div>
                <button className='btn bg-success mt-5' onClick={handleCheckOut}>Check Out</button>
            </div>
        </div></div>
    )
}

