import React, { useState, useEffect } from "react";

import "./styles.scss";

import api from "../../Service/api";
import { SYMBOL_BRL, format } from "../../Service/formatCurrency";
import Product from "../../Components/Product/index";

function Home() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    api
      .get("products")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  });
  return (
    <section className="container">
      <h1>Produtos</h1>

      <div className="container-products">
        {product.map((item) => {
          return (
            <Product
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              oldPrice={format(item.oldPrice, SYMBOL_BRL)}
              price={format(item.price, SYMBOL_BRL)}
              times={item.installments.times}
              value={format(item.installments.value, SYMBOL_BRL)}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Home;
