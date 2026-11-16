import React from "react";

export default function LeftImg({
  imageURL,
  productName,
  productDescription,
  TryDemo,
  LearnMore,
  googlePlay,
  appStore,
}) {
  return (
    <>
      <div className="conatainer ">
        <div className="row p-5">
          <div className="col-7 p-5 ">
            <img src={imageURL} />
          </div>
          <div className="col-5 p-5 mt-5">
            <h1>{productName}</h1>
            <p className="fs-5 text-muted">{productDescription}</p>
            <div >
              <a href={TryDemo} >try Demo</a>
              <a href={LearnMore} style={{marginLeft:"50px"}}>Learn More</a>
            </div>
<div className="mt-3">

            <a href={googlePlay} >
              <img src="media\images\googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img src="media\images\appstoreBadge.svg" style={{marginLeft:"30px"}}/>
                
            </a>
</div>
          </div>
        </div>
      </div>
    </>
  );
}
