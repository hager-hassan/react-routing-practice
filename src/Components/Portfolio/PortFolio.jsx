import React, { useRef, useState } from 'react'
import '../Portfolio/PortFolio.modules.css'
import port1 from '../../assets/images/port1.png'
import port2 from '../../assets/images/port2.png'
import port3 from '../../assets/images/port3.png'

export default function PortFolio() {
    let [lightBoxImg , setImg] = useState();
    let [showLightBox, setShowLightBox] = useState(false);
    let imageRef = useRef();

    function handelLightBoxImg(src){
        setImg(src);
    }


  return (
    <section className='container portfolio'>
        <h2 className='fw-bold text-center text-uppercase pt-4 mb-3'>portfolio component</h2>
        <div className='pb-3 d-flex align-items-center justify-content-center line-container'>
          <div className='line d-inline-block me-3'></div>
          <i className="fa-solid fa-star"></i>
          <div className='line d-inline-block ms-3'></div>
        </div>

        <div className='row'>
            <div className='col-md-6 col-lg-4 px-4 mb-5'>
                <div className='item rounded overflow-hidden position-relative'
                onClick={() => {
                    handelLightBoxImg(port1);
                    setShowLightBox(true);
                }}
                >
                    <img src={port1} className='w-100 image' />
                    <div className='layer text-white d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 start-0 end-0'>
                        <i className="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>

            <div className='col-md-6 col-lg-4 px-4 mb-5'>
                <div className='item rounded overflow-hidden position-relative'
                onClick={() => {
                    handelLightBoxImg(port2);
                    setShowLightBox(true);
                }}
                >
                    <img src={port2} className='w-100' />
                    <div className='layer text-white d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 start-0 end-0'>
                        <i className="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>

            <div className='col-md-6 col-lg-4 px-4 mb-5'>
                <div className='item rounded overflow-hidden position-relative'
                onClick={() => {
                    handelLightBoxImg(port3);
                    setShowLightBox(true);
                }}
                >
                    <img src={port3} className='w-100' />
                    <div className='layer text-white d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 start-0 end-0'>
                        <i className="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>

            <div className='col-md-6 col-lg-4 px-4 mb-5 mb-lg-3'>
                <div className='item rounded overflow-hidden position-relative'
                onClick={() => {
                    handelLightBoxImg(port1);
                    setShowLightBox(true);
                }}
                >
                    <img src={port1} className='w-100' />
                    <div className='layer text-white d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 start-0 end-0'>
                        <i className="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>

            <div className='col-md-6 col-lg-4 px-4 mb-5 mb-md-3'>
                <div className='item rounded overflow-hidden position-relative'
                onClick={() => {
                    handelLightBoxImg(port2);
                    setShowLightBox(true);
                }}
                >
                    <img src={port2} className='w-100' />
                    <div className='layer text-white d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 start-0 end-0'>
                        <i className="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>

            <div className='col-md-6 col-lg-4 px-4 mb-3'>
                <div className='item rounded overflow-hidden position-relative'
                onClick={() => {
                    handelLightBoxImg(port3);
                    setShowLightBox(true);
                }}
                >
                    <img src={port3} className='w-100' />
                    <div className='layer text-white d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 start-0 end-0'>
                        <i className="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
        </div>

        <div className='light-box' style={{display: showLightBox ? 'flex' : 'none'}}
        onClick={(event) => {
            if(event.target !== imageRef.current){
                setShowLightBox(false);
            }
        }}
        >
            <img src={lightBoxImg} ref={imageRef}/>
        </div>
    </section>
  )
}
