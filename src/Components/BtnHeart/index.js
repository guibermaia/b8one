import React, { useEffect, useState } from "react";

import "./styles.scss";

function BtnHeart(props) {
  let persistedItems = [
    { id: 1, status: true },
    { id: 2, status: true },
  ];

  const [isClicked, setIsClicked] = useState(true);

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(persistedItems));
  }, []);

  const handleClick = () => {
    let data = JSON.parse(localStorage.getItem("favorite"));
    isClicked === false ? setIsClicked(true) : setIsClicked(false);
    console.log("props.productId", props.productId);
    data.map((item) => {
      if (item.id === props.productId) {
        setFavorites([
          ...favorites,
          {
            id: props.productId,
            status: isClicked === false ? true : false,
          },
        ]);
        localStorage.setItem("favorite", JSON.stringify(favorites));
      }
    });
  };

  let btnBuy;
  if (isClicked) {
    btnBuy = <button className="btn btnActive" onClick={handleClick}></button>;
  } else {
    btnBuy = <button className="btn btnWish" onClick={handleClick}></button>;
  }
  return <>{btnBuy}</>;
}

export default BtnHeart;
