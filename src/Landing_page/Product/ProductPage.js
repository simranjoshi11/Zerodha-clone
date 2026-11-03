import React from "react";
import Hero from "../Product/Hero";
import LeftImg from "../Product/LeftImg";
import RightImg from "../Product/RightImg";
import Universe from "../Product/Universe";

export default function PricingPage() {
  return (
    <>
      <Hero />
      <LeftImg
        imageURL="media\images\kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        TryDemo=""
        LearnMore=""
        googlePlay=""
        appStore=""
      />
      <RightImg imageURL="media\images\console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        TryDemo=""/>

       <LeftImg
        imageURL="media\images\coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices"
        TryDemo=""
        LearnMore=""
        googlePlay=""
        appStore=""
      />
 <RightImg  imageURL="media\images\kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        TryDemo=""/>
       <LeftImg
        imageURL="media\images\varsity.png"
        productName="Versity Mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        TryDemo=""
        LearnMore=""
        googlePlay=""
        appStore=""
      />
      <Universe />
    </>
  );
}
