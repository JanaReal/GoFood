import { Button } from 'bootstrap/dist/js/bootstrap.bundle';
import React from 'react'
import { data } from 'react-router-dom';

export default function Card(props) {

  const handleAddToCart = () => {

  }
  let options = props.options;
  let priceOptions = Object.keys(options);

  return (
    <div><div><div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
      <img src={props.imgSrc} className="card-img-top" alt="..." style={{ height: "200px", objectFit: "fill" }}></img>
      <div className="card-body">
        <h5 className="card-title">{props.foodName}</h5>

        <div className='container w-100'>
          <select className='m-2 h-100 bg-success rounded'>
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}> {i + 1}</option>
              )
            })}
          </select>



          <select className='m-2 h-100 bg-success rounded'>
            {priceOptions.map((data) => {
              return <option key={data} value={data}>{data}</option>
            })}
          </select>
          <div className='d-line h-200 fs-5'>Total price</div>

        </div>
        <hr />
        <button className={"btn btn-success justify-center ms-2"} onClick={handleAddToCart}>Add to cart</button>
      </div>
    </div></div>
    </div>
  )
}
