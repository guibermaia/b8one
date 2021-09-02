import React, { useState } from "react";

import "./styles.scss";

import BtnHeart from "../BtnHeart";

import { BsCheck } from "react-icons/bs";

function Product(props) {
  let btnBuy;
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    isClicked === false ? setIsClicked(true) : setIsClicked(false);
  }

  if (isClicked) {
    btnBuy = (
      <button className="btn-buy-default active" onClick={handleClick}>
        <BsCheck /> ADICIONADO
      </button>
    );
  } else {
    btnBuy = (
      <button className="btn-buy-default" onClick={handleClick}>
        ADICIONAR
      </button>
    );
  }

  return (
    <div className="product">
      <BtnHeart productId={props.id} />
      <img src={props.img} alt="img photo" />
      <h1 className="title">{props.name}</h1>
      <div className="container-price">
        <p className="old-price">{props.oldPrice}</p>
        <p className="price">{props.price}</p>
        <p className="installments">
          em até
          <span className="installments-contrast">
            {props.times}x de {props.value}
          </span>
          sem juros
        </p>
      </div>
      {btnBuy}
    </div>
  );
}

export default Product;
