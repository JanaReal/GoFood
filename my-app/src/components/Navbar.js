import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function Navbar() {


  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
        </li>
        {localStorage.getItem("authToken") &&
          <li className="nav-item">
            <Link className="nav-link active fs-5" aria-current="page" to="/orders">My Orders</Link>
          </li>
        }
      </ul>

      <div className="d-flex ms-auto">
        {localStorage.getItem("authToken") ? (
          <>
            <div className="btn bg-white text-danger mx-2" onClick={handleLogout}>Logout</div>
            <div className="btn bg-white text-success mx-2">My Cart</div>
          </>
        ) : (
          <>
            <Link className="btn bg-white text-success mx-1 nav-link active fs-5" to="/login">Login</Link>
            <Link className="btn bg-white text-success mx-1 nav-link active fs-5" to="/createuser">Sign Up</Link>
          </>
        )}
      </div>
    </div>
  </div>
</nav>


    </div>

  )
}
