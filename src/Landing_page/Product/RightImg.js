import React from 'react'

export default function RightImg({imageURL, productName ,productDescription,TryDemo}) {
  return (
   <div className="container">
    <div className="row">
          <div className="col-6 p-5 mt-5">
            <h1>{productName}</h1>
            <p className="fs-5 text-muted">{productDescription}</p>
              <a href={TryDemo} >try Demo</a>
          </div>
 <div className="col-6 p-5 ">
            <img src={imageURL} />
          </div>

    </div>
   </div>
  )
}
