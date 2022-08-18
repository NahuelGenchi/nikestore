import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../../components";

import "./ItemListContainer.scss";

import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = function() {
  const [loading, setLoading] = useState(true)
  const [productList, setProductList] = useState([]);
  const {categoryId} = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    getDocs(itemsCollection)
      .then((snapshot) => {
        const categoryItems = snapshot.docs.filter((doc) => doc.data().category === categoryId);
        const categoryItemsArray = [];
        for (let i = 0; i < categoryItems.length; i++) {
          categoryItemsArray.push({id: categoryItems[i].id, ...categoryItems[i].data()});
        };
        setProductList(categoryItemsArray.length > 0 ? categoryItemsArray : snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() })));
      })
      .finally(() => {
        setLoading(false);
      })
  }, [categoryId]);

  return (
    <div className="il-container">
      {loading ? <h1>Nike Store</h1> : <ItemList productList={productList}/>}
    </div>
  );
};

export default ItemListContainer;