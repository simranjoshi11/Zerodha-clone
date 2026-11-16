import React from 'react'

export default function RightImg({imageURL, productName ,productDescription,LearnMore}) {
  return (
   <div className="conatainer ">
        <div className="row p-5 align-items-center ">
        
          <div className="col-5 p-5 console-text">
            <h1>{productName}</h1>
            <p className="fs-5 text-muted">{productDescription}</p>
            <div >
           
              <a href={LearnMore}>Learn More</a>
            </div>

          </div>
            <div className="col-7 p-5 mt-n5 ">
            <img src={imageURL} />
          </div>
        </div>
      </div>
  )
}
