import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../../components";
import { data } from "../../mock/FakeApi";

import "./ItemListContainer.scss";


const ItemListContainer = function() {
  const [loading, setLoading] = useState(true)
  const [productList, setProductList] = useState([]);
  const {categoryId} = useParams();

  useEffect(() => {
    data
    .then(res => {
      const allItems = res;
      /*
      const categoryItems = allItems.filter(item => item.category === categoryId);
      console.log(categoryItems);
      */
      let categoryItems = [];
      for (let i = 0; i < allItems.length; i++) {
        if (allItems[i].category === categoryId) {
          categoryItems.push(allItems[i]);
        }
      };
      console.log(allItems);
      console.log(categoryItems);
      setProductList(categoryItems.length >= 1 ? categoryItems : allItems);
    }).catch(error => {
      console.log(error);
    }).finally(() => {
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