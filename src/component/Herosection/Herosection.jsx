import React from "react";
import './Herosection.scss';
import Product from "../Product/Product";
// import CartContext from '../../Context/CartContext'

import shortid from "shortid";
import ProductImg1 from "./../../images/products/1.png";
import ProductImg2 from "./../../images/products/2.png";
import ProductImg3 from "./../../images/products/3.png";
import ProductImg4 from "./../../images/products/4.png";
import ProductImg5 from "./../../images/products/5.png";
import ProductImg6 from "./../../images/products/6.png";
import ProductImg7 from "./../../images/products/7.png";
import { useTranslation } from "react-i18next";

const Herosection = () => {
  const { t, i18n } = useTranslation();
  // const {addToCart}=useContext(CartContext);

  return (
    <div className="home">
      <div className="home-container">
        <img className="home-image" src="/home.jpg" alt="home-img" width="100%" height="650px" />
        <div className="home-row-one">
          <Product className="d-one"
            id={1}
            image={ProductImg1}
            price={64}
            title={t("product1.title")}
            rating={2}
          />
          <Product className="d-two"
            id={2}
            image={ProductImg2}
            price={682.95}
            title={t("product2.title")}
            rating={4}
          />
        </div>
        <div className="home-row-two" style={{ width: "100%" }}>
          <Product className="div-one"
            id={3}
            image={ProductImg3}
            price={449}
            title={t("product3.title")}
            rating={5}
          />
          <Product className="div-two"
            id={4}
            image={ProductImg4}
            price={229}
            title={t("product4.title")}
            rating={3}
          />
          <Product className="div-three"
            id={5}
            image={ProductImg5}
            price={239}
            title={t("product5.title")}
            rating={5}
          />
        </div>
        <div className="home-row">
          <Product
            id={6}
            image={ProductImg6}
            price={1142} 
            title={t("product6.title")}
            rating={3}
          />
          <Product
            id={7}
            image={ProductImg7}
            price={322}
            title={t("product7.title")}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
