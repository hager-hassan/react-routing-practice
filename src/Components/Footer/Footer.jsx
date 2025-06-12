import React from 'react'
import '../Footer/Footer.modules.css'

export default function Footer() {
  return (
    <footer>
        <div>
  <div className="container">
    <div className='row text-white footer-top'>
      <div className='col-sm-4'>
        <div className='location text-center'>
          <h3 className='text-uppercase'>location</h3>
          <p className='mb-3'>2215 John Daniel Drive</p>
          <p className='mb-3'>Clark, MO 65243</p>
        </div>
      </div>

      <div className='col-sm-4'>
        <div className='social-links'>
          <h3 className='text-uppercase text-center'>around the web</h3>
          <ul className='d-flex justify-content-center align-items-center gap-2 p-0 m-0 flex-wrap'>
            <li><a className='d-flex justify-content-center align-items-center'><i className="fa-brands fa-facebook-f"></i></a></li>
            <li><a className='d-flex justify-content-center align-items-center'><i className="fa-brands fa-twitter"></i></a></li>
            <li><a className='d-flex justify-content-center align-items-center'><i className="fa-brands fa-linkedin-in"></i></a></li>
            <li><a className='d-flex justify-content-center align-items-center'><i className="fa-solid fa-globe"></i></a></li>
          </ul>
        </div>
      </div>

      <div className='col-sm-4'>
        <div className='text-center'>
          <h3 className='text-uppercase'>about freelancer</h3>
          <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
      </div>
    </div>
  </div>
</div>


        <div className='footer-bottom'>
          <p className='text-center'>Copyright © Your Website 2021</p>
        </div>
    </footer>
  )
}
