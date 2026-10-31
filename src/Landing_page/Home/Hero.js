import React from 'react'

export default function Hero () {
  return (
    <>
       <div className='container p-5 mb-5'>
        <div className="row text-center">
         <img src= 'media/images/homeHero.png' alt='Hero images' className='mb-5'/>
         <h1 className='mt-10 text-center'>Invent in Everything</h1>
         <p>online platform and this that about zerodha only not necessary but have to right.</p>
         <button type='button' className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin: "0 auto"}}>Signup now</button>
        </div>
       </div>
    </>
  );
}
