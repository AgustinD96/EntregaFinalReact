import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css';
import { Link } from 'react-router-dom';
import Logo from "./logo/Logo.jpeg"; 

const NavBar = () => {
  return (
    <div>
  
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/'><img src={Logo} alt="nav-bar" /></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="cuencos" to='/'>Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/tazas">Tazas</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/cuencos">Cuencos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/sets">Sets</Link>
        </li>
      </ul>
    </div>
    
  <Link class="nav-link" to="/cart">
    <CartWidget class="cart-icon" />
  </Link>

  </div>
</nav>


    </div>
  )
}

export default NavBar