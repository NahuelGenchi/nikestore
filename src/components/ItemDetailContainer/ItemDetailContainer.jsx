import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";

import "./ItemDetailContainer.scss";

const ItemDetailContainer = (props) => {
  const [loading, setLoading] = useState(true);
  const [productDetail, setProductDetail] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    getDocs(itemsCollection)
      .then((snapshot) => {
        let idItem = snapshot.docs.filter(doc => doc.id === id);
        idItem = {id, ...idItem[0].data()};
        setProductDetail(idItem);
      })
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