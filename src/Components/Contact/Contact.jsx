import React from 'react'
import '../Contact/Contact.modules.css'
import { useState } from 'react';

export default function Contact() {
  let [userName, setName] = useState('');
  let [userAge, setAge] = useState('');
  let [userEmail, setEmail] = useState('');
  let [userPassword, setPassword] = useState('');

  return (
    <section className='contact min-vh-100 d-flex justify-content-center align-items-center'>
      <div className='container-md'>
        <h2 className='fw-bold text-center text-uppercase pt-4 mb-3'>contact section</h2>
        <div className='pb-3 d-flex align-items-center justify-content-center line-container'>
          <div className='line d-inline-block me-3'></div>
          <i className="fa-solid fa-star"></i>
          <div className='line d-inline-block ms-3'></div>
        </div>

        <div className='inputs-container p-3 mt-5'>
          <form className='mx-auto'>
            <label
              htmlFor='userName'
              style={{ bottom: userName ? '10px' : '-40px' }}
            >
              userName
            </label>
            <input
              id="userName"
              type="text"
              placeholder='userName'
              value={userName}
              className='form-control d-block mx-auto'
              onChange={(event) => {
                setName(event.target.value);
              }}
            />

            <label
              htmlFor='userAge'
              style={{ bottom: userAge ? '10px' : '-40px' }}
            >
              userAge
            </label>
            <input
              id="userAge"
              type="number"
              placeholder='userAge'
              value={userAge}
              className='form-control d-block mx-auto'
              onChange={(event) => {
                setAge(event.target.value);
              }}
            />

            <label
              htmlFor='userEmail'
              style={{ bottom: userEmail ? '10px' : '-40px' }}
            >
              userEmail
            </label>
            <input
              id="userEmail"
              type="email"
              placeholder='userEmail'
              value={userEmail}
              className='form-control d-block mx-auto'
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />

            <label
              htmlFor='userPassword'
              style={{ bottom: userPassword ? '10px' : '-40px' }}
            >
              userPassword
            </label>
            <input
              id="userPassword"
              type="password"
              placeholder='userPassword'
              value={userPassword}
              className='form-control d-block mx-auto'
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />

            <button className='rounded text-white border-0 mt-1'
            onClick={(event)=> event.preventDefault()}
            >Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
