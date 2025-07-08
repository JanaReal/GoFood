import { Button } from 'bootstrap/dist/js/bootstrap.bundle';
import React, { useState, useRef, useEffect } from 'react'
import { data } from 'react-router-dom';
import { useDispatchCart, useCart } from './ContextReducer';

export default function Card(props) {

  let data = useCart();
  const priceRef = useRef();
  let dispatch = useDispatchCart();



  const handleAddToCart = async () => {
    let food = [];
    for (const item of data) {
      if (item.id === props.foodItem._id && item.size === size) {
        food = item;
        break;
      }
    }
    if (food != [] && food.size === size) {
      await dispatch({ type: "UPDATE", id: props.foodItem._id,size: size, price: finalPrice, qty: qty});
      return;
    }
    await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size });

  }
  
  let options = props.options;
  let priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("")

  let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])


  return (
    <div><div><div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
      {props.foodItem ? (
        <>
          <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: "200px", objectFit: "fill" }} />
          <h5 className="card-title">{props.foodItem.name}</h5>
        </>
      ) : (
        <p>Loading item...</p>
      )}

      <div className='container w-100'>
        <select className='m-2 h-100 bg-success rounded' onChange={(e) => setQty(e.target.value)}>
          {Array.from(Array(6), (e, i) => {
            return (
              <option key={i + 1} value={i + 1}> {i + 1}</option>
            )
          })}
        </select>



        <select className='m-2 h-100 bg-success rounded' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
          {priceOptions.map((data) => {
            return <option key={data} value={data}>{data}</option>
          })}
        </select>
        <div className='d-line h-200 fs-5'>Rs. {finalPrice}/-</div>

      </div>
      <hr />
      <button className={"btn btn-success justify-center ms-2"} onClick={handleAddToCart}>Add to cart</button>
    </div>
    </div></div>

  )
}
