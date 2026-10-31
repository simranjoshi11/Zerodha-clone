import React from 'react'

export default function Pricing() {
  return (
    <div className='container'>
     <div className="row">
      <div className="col-4 p-5">
        <h2 className='mb-3'>Unbeatable pricing</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam fugiat vel consequatur magni.</p>
        <a href='' style={{textDecoration:"none"}}>See pricing <i className='fa fa-long-arrow-right' aria-hidden="true"></i> </a>
      </div>
      <div className="col-2"></div>
      <div className="col-6">
<div className="row text-center p-5 ">
  <div className="col border">
    <h1 className='m-3'>$0</h1>
      <p>
       Free equity delivery and <br/>direct mutual funds
      </p>
  </div>
   <div className="col border">
    <h1 className='m-3'>$20</h1>
      <p>
      Intraday and F&O
      </p>
   </div>
</div>

      </div>
     </div>
    </div>
  )
}
