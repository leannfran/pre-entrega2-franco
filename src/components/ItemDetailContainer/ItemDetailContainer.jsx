import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Itemdetail from "../ItemDetail/ItemDetail";
//firebase
import { getProducto } from "../../firebase/firebase";
const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    getProducto(id)
    .then(item => {
    setProducto(item);
    });
  }, []);

  return (
    <div className=" mx-10 my-10 flex items-center justify-between flex-wrap gap-8">
      <Itemdetail item={producto} />
    </div>
  );
};

export default ItemDetailContainer;
