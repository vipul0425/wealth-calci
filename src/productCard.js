import { useState,useContext, useEffect } from "react";
import cartContext from "./cartContext";
import CurrContext from "./currContext";

const ProductCard = ({ id, name, price, image }) => {
  const [cart,setCart] = useContext(cartContext);
  const [quantity, setQuantity] = useState(cart[id] ? cart[id]['quantity'] : 0);
  const [totalPrice, setPrice] = useState(cart[id] ? cart[id]['price'] : 0);
  const [curr] = useContext(CurrContext);
 
  // images import function
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => ( images[item.replace('./', '')] = r(item) ));
    return images;
  }
  const images = importAll(require.context('./product_images', false));
  // import images ends

  useEffect(()=>{
    handleChange();
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [quantity])

  // handleChangeAdd function
  const handleChange = ()=>{
    if(cart[id]){
      cart[id]['quantity'] = quantity;
      cart[id]['price'] = totalPrice;
    } else{
      const item = {
        name: name,
        quantity: quantity,
        price: totalPrice
      }
      setCart({...cart,[id]:item})
    }
  }
  return (
    <div className="col-6 col-md-3 mt-3">
      <div className="card">
        <div className="img-div">
          
          <img src={images[image]} className="card-img-top" alt="product" />
        </div>
        <div className="card-body text-dark p-0">
          <h6 className="fs-6">{name}</h6>
          <h6><span>{{USD : "$", INR : "₹", EUR: "€" }[curr.name]}</span> {(price * curr.value).toLocaleString({USD : 'en-US', INR : 'en-IN', EUR: 'en-US'}[curr.name])}</h6>
          <div className="d-flex flex-wrap p-0 justify-content-between align-items-center border-top border-1 border-orange">
            <button
              className={`btn card-btn btn-sm order-md-first px-md-3 px-2 ${
                quantity !== 0 ? "" : "disabled"
              } `}
              type="button"
              id="sell-btn"
              style={{ borderBottomLeftRadius: "0.375rem" }}
              onClick={() => {
                setQuantity(quantity - 1);
                setPrice(totalPrice - price);
              }}
            >
              Sell
            </button>
            <p className="d-md-block mb-0 text-cente fw-bold">
              {quantity !== 0 ? `x${quantity}` : ""}
            </p>
            <button
              className="btn card-btn btn-sm order-last order-md-last px-md-3 px-2"
              type="button"
              id="buy-btn"
              style={{ borderBottomRightRadius: "0.375rem" }}
              onClick={() => {
                setQuantity(quantity + 1);
                setPrice(totalPrice + price);
              }}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
