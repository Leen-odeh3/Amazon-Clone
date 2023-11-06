import React from "react";
import "./Product.scss";
import { useTranslation } from "react-i18next";

import starIcon from "../../images/star.png";

const Product = ({ title, price, image, rating, id }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="product-rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p key={i}>
              <img src={starIcon} alt="rating" />
            </p>
          ))}
      </div>
      <img src={image} alt="product-img" width="1000px" />
      <button> {t("Add to Basket")}</button>
    </div>
  );
};

export default Product;
