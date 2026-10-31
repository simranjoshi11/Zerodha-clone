import React from 'react'

export default function Stats() {
  return (
    <div className='container p-3'>
     <div className="row p-5">  

      <div className="col-6 p-5 mr-5">
        <h1 className='mb-5 fs-2'>Trust building with stats</h1>
        <h2 className='fs-4'>Largest stack</h2>
        <p className='text-muted'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa voluptates ipsam eveniet perferendis.</p>

        <h2  className='fs-4'>Largest stack</h2>
        <p className='text-muted'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa voluptates ipsam eveniet perferendis, repudiandae </p>
         <h2 className='fs-4'>Largest stack</h2>
        <p className='text-muted'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa voluptates ipsam eveniet perferendi</p>
         <h2 className='fs-4'>Largest stack</h2>
        <p className='text-muted'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa voluptates ipsam eveniet perferendi</p>
      </div>
      <div className='col-6'>
        <img src="media\images\ecosystem.png" style={{width:"100%"}} alt="" />
         <div className='text-center'>
      <a className='mx-5' href='' style={{textDecoration:"none"}}>Explore our product <i className='fa fa-long-arrow-right' aria-hidden="true"></i></a>
       <a  className= "mx-5" href=''  style={{textDecoration:"none"}}>try kit demo</a>
      </div>
      </div>
      
     </div>
    </div>
  )
}
