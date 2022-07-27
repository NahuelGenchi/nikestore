import "./ItemListContainer.scss";

import { ItemList } from "../../components";
import { data } from "../../mock/FakeApi";
import { useEffect, useState } from "react";

const ItemListContainer = function() {
  const [loading, setLoading] = useState(true)
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    data
    .then((res) => setProductList(res))
    .catch((error) => console.log(error))
    .finally(()=> setLoading(false))
  }, []);

  return (
    <div className="il-container">
      {loading ? <h1>Nike Store</h1> : <ItemList productList={productList}/>}
    </div>
  );
};

export default ItemListContainer;