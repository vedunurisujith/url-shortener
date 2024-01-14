import React from 'react'
import "./InsertUrl.css";
const InsertUrl = () => {
  return (
    <div className='box'>
    <input type='text' className='box-input' placeholder='Enter a URL to shorten' />
    <button className='box-btn'> Shorten </button>
    </div>
    );
}

export default InsertUrl