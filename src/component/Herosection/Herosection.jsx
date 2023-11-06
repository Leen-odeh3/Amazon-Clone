import React from "react";
import './Herosection.scss'
import Product from "../Product/Product";

import shortid from "shortid";
import ProductImg1 from "./../../images/products/1.png";
import ProductImg2 from "./../../images/products/2.png";
import ProductImg3 from "./../../images/products/3.png";
import ProductImg4 from "./../../images/products/4.png";
import ProductImg5 from "./../../images/products/5.png";
import ProductImg6 from "./../../images/products/6.png";
import ProductImg7 from "./../../images/products/7.png";

const Herosection = () => {
  return (
    <div className="home">
      <div className="home-container">
        <img className="home-image" src="/home.jpg" alt="home-img" width="100%" height="520px" />
        <div className="home-row-one">
          <Product className="d-one"
            id={shortid.generate()}
            image={ProductImg1}
            price={64}
            title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
            rating={2}
          />
          <Product className="d-two"
            id={shortid.generate()}
            image={ProductImg2}
            price={682.95}
            title="Lenovo - 2021 - IdeaPad 3 - Gaming Laptop - AMD Ryzen 5 5600H - 8GB RAM - 256GB Storage - NVIDIA GeForce GTX 1650-15.6 FHD Display - Windows 11 Home"
            rating={4}
          />
        </div>
        <div className="home-row-two" style={{width:"100%"}}>
          <Product className="div-one"
            id={shortid.generate()}
            image={ProductImg3}
            price={449}
            title="Fujitsu ScanSnap iX1600 Wireless or USB High-Speed Cloud Enabled Document, Photo & Receipt Scanner with Large Touchscreen and Auto Document Feeder for Mac or PC, White"
            rating={5}
          />
          <Product className="div-two" 
            id={shortid.generate()}
            image={ProductImg4}
            price={229}
            title="Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB"
            rating={3}
          />
          <Product className="div-three" 
            id={shortid.generate()}
            image={ProductImg5}
            price={239}
            title="MeLE PCG02 Fanless Mini PC Stick Windows 11 Pro J4125 8GB/128GB Portable Mini Desktop Computer Stick Business & Home Video Support HDMI 4K 60Hz, BT4.2, 2.4G/5.8G Dual Band Wi-Fi, USB, Ethernet..."
            rating={5}
          />
        </div>
        <div className="home-row">
          <Product
         
            id={shortid.generate()}
            image={ProductImg6}
            price={(1, 142)}
            title="SAMSUNG Galaxy S22 Ultra Cell Phone, Factory Unlocked Android Smartphone, 128GB, 8K Camera & Video, Brightest Display Screen, S Pen, Long Battery Life, Fast 4nm Processor, US Version, Phantom Black"
            rating={3}
          />
            <Product
         
            id={shortid.generate()}
            image={ProductImg7}
            price={(3, 22)}
            title="INIU Wireless Charger, 15W Fast Wireless Charging Station with Sleep-Friendly Adaptive Light Compatible with iPhone 15 14 13 12 Pro XR XS 8 Plus Samsung Galaxy S23 S22 S21 S20 Note 20 10 Google etc"
            rating={4}
          />
        </div>
        <div> </div>
      </div>
    </div>
  );
};

export default Herosection;