import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../mock/FakeApi";
import ItemDetail from "../ItemDetail/ItemDetail";

import "./ItemDetailContainer.scss";

const ItemDetailContainer = (props) => {
  const [loading, setLoading] = useState(true);
  const [productDetail, setProductDetail] = useState({});

  const { id } = useParams();

  const getItem = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(product => product.id === parseInt(id)))
    },2000);
  });

  useEffect(() => {
    getItem
      .then((response) => setProductDetail(response))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [id]);

  return (
    <>
      <div className="description">
        {loading ? "Loading..." : <ItemDetail productDetail={productDetail} />}
      </div>
    </>
  );
};

export default ItemDetailContainer;