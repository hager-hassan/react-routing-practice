import React from 'react'

export default function About() {
  return (
    <section className='about' style={{backgroundColor: '#1abc9c'}}>
        <div className='container text-white d-flex align-items-center justify-content-center flex-column pt-5'>
            <h2 className='fw-bold mb-3 text-center text-uppercase pt-4'>about component</h2>
        <div className='pb-3 d-flex align-items-center justify-content-center'>
            <div className='line d-inline-block me-3'></div>
            <i className="fa-solid fa-star"></i>
            <div className='line d-inline-block ms-3'></div>
        </div>
        <div className='row'>
            <div className='col-md-6'>
                <div>
                    <p>
                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including 
                    HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                    </p>
                </div>
            </div>
            <div className='col-md-6'>
                <div>
                    <p>
                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including 
                    HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                    </p>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}
