import React, { useEffect } from 'react'
import Check from "../assets/check-green.png";


const toast = ({ isShown, message, onClose }) => {
  
  useEffect(() => {
    const timeoutId = setTimeout(()=> {
      onClose();
    },3000);
    return () => {
      clearTimeout(timeoutId);
    }
  },[isShown])
  
  return (
    <>
      {!isShown ? null :
        <div className='toastContainer'>
          <div className='message'>
            <img className='img' src={Check} />
          </div>
          <p className='message1'>{message}</p>
        </div>
      }
    </>
  )
}

export default toast