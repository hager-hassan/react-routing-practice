import React from 'react'
import home from '../../assets/images/home.svg';

export default function Home() {
  return (
    <section className='home' style={{backgroundColor: '#1abc9c'}}>
        <div className='container d-flex align-items-center justify-content-center text-center text-white flex-column'>
          <div className='mb-3 home-img-container pt-5' style={{width: '250px'}}>
          <img src={home} className='w-100'/>
        </div>
        <h2 className='text-uppercase fw-bold mb-3 pt-4 w-100'>start framework</h2>
        <div className='mb-3 d-flex align-items-center justify-content-center'>
          <div className='line d-inline-block me-3'></div>
          <i className="fa-solid fa-star"></i>
          <div className='line d-inline-block ms-3'></div>
        </div>
        <p className='m-0 w-100'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </section>
  )
}
