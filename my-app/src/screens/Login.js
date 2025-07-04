import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'

export default function Login() {
  let Navigate = useNavigate();

  const [credentials, setcredentials] = useState({ email: "", password: "" })
  const handleSubmit = async (e) => {

    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email,password: credentials.password })
    })

    const json = await response.json()
    console.log(json);

    if (!json.success) {
      alert("enter valid credentials")
    }
    else {

      localStorage.setItem("authToken",json.authToken);
      console.log(localStorage.getItem("authToken"));
      Navigate("/");
    }

    
  }

  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  return (
    <div>

      <div className='container'>
        <form onSubmit={handleSubmit}>
          
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange}></input>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange}></input>
          </div>
          
          
          <button type="submit" className="btn btn-success">Submit</button>
          <Link to="/createuser" className='m-3 btn btn-danger'>Not a user</Link>
        </form>
      </div>


    </div>
  )
}
