import React from 'react'

export default function Hero() {
  return (
  <>
  <div className="container ">
    

      <div className="row p-5 mt-5 text-center border-bottom ">
<h1>Charges</h1>
<h3 className='text-muted mt-2 fs-5'>List of all charges and taxes</h3>

        <div className="col-4 p-3 mt-5">
            <img src="media\images\pricing0.svg" className="img-fluid "/>
            <h2 >Free equity delivery</h2>
            <p className="mt-3 text-muted">
             All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.


            </p>
          </div>

  <div className="col-4 p-3 mt-5">
            <img src="media\images\intradayTrades.svg" className="img-fluid "/>
           <h2 >Intraday and F&O trades</h2>
            <p className="mt-3 text-muted">
           Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
            </p>
          </div>

            <div className="col-4 p-3 mt-5">
            <img src="media\images\pricing0.svg" className="img-fluid "/>
            
            <h2>
              Free direct MF</h2><p className=" mt-3 text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
            </p>
          </div>

        <div className="col-6 p-5 text-muted">
<p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>

<p> <a href="" style={{textDecoration:"none"}}>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>

<p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.</p>
        </div>

      </div>
    </div>
  
  </>
  )
}
