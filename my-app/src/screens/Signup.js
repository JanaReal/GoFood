import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'

export default function Signup() {
    let navigate = useNavigate();
    const [credentials, setcredentials] = useState({name:"",email:"",password:"",geolocation:""})
    const handleSubmit = async(e)=>{

        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:credentials.name,password:credentials.password,email:credentials.email,location:credentials.geolocation})
        })

        const json = await response.json()
        console.log(json);

        if(!json.success){
            alert("enter valid credentials")
        }
        else{
            console.log("account created...please log in");
            navigate("/login");
        }
  
    }

    const onChange = (event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }


    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="name" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} ></input>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange}></input>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange}></input>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputLocation" className="form-label">Location</label>
                        <input type="location" className="form-control" id="exampleInputGeolocation1" name='geolocation' value={credentials.location} onChange={onChange}></input>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                    <Link to="/login"  className='m-3 btn btn-danger'>Already a user</Link>
                </form>
            </div>

        </>
    )
}
