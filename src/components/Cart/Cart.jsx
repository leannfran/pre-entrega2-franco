import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import ItemList from "../ItemList/ItemList";
import { useCarritoContext } from "../../context/carritoContext";
const Cart = () => {
  const {carrito, totalPrice, emptyCart } = useCarritoContext()
  return (
    <>
      {carrito.length === 0 ? <>
        <div className="flex flex-col justify-start items-center mt-10 min-h-[90vh] gap-10">
          <h3 className="text-3xl font-semibold"> Su carrito esta vacio</h3>
          <Link to={"/Productos"} className="flex items-center font-light border py-2 px-4 rounded-full border-primary">
            <BiArrowBack />Volver a comprar
          </Link>
        </div>
      </> : <>
        <div className="flex flex-col items-center justify-center">
          {<ItemList products={carrito} plantilla={'itemCart'}/>}
          <div>
          <p>Resumen de la compra: $ {new Intl.NumberFormat('de-DE').format(totalPrice())}</p>
            <button onClick={()=> emptyCart()}>Vaciar Carrito</button>
            <Link to={"/Productos"}>
              <button>continuar Comprando</button>
            </Link>
            <button >Finalizar Compra</button>
          </div>
        </div>
      </>}
    </>
  );
};

export default Cart;
