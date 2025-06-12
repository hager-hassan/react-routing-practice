import React, { useEffect } from 'react'
import '../Navbar/Navbar.modules.css'
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
    useEffect(() => {
        const navbar = document.querySelector('.navbar');

        let handelScroll = () => {
            if(scrollY > 10){
                navbar.classList.remove('py-4');
                navbar.classList.add('py-2');
            }
            else{
                navbar.classList.remove('py-2');
                navbar.classList.add('py-4');
            }
        };

        window.addEventListener('scroll' , handelScroll);

        return () => {
            window.removeEventListener('scroll' , handelScroll);
        };
    },[]);


  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light py-4 fixed-top">
  <div className="container">
    <Link className="navbar-brand text-uppercase text-white me-3 fw-bold" to="/">start framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item me-3">
          <NavLink className="nav-link text-white p-2 mt-3 mt-lg-0 fw-bold text-uppercase rounded d-inline-block" aria-current="page" to="/about">about</NavLink>
        </li>
        <li className="nav-item me-3">
          <NavLink className="nav-link text-white p-2 mt-3 mt-lg-0 fw-bold text-uppercase rounded d-inline-block" aria-current="page" to="/portfolio">portfolio</NavLink>
        </li>
        <li className="nav-item me-3">
          <NavLink className="nav-link text-white p-2 mt-3 mt-lg-0 fw-bold text-uppercase rounded d-inline-block" to="/contact">contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  
  );
}
