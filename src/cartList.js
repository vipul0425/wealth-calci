import { useContext } from "react";
import CurrContext from "./currContext";

const CartList = ({ name, quantity, price, index=1 }) => {
  const[curr] = useContext(CurrContext);

  return (
    <li
      className="list-group-item d-flex                    justify-content-between align-items-start"
      key={name+index}
      
    >
      <div className="fw-bold">
        {quantity}x {name}
      </div>
      <span className="fw-bold"><span>{{USD : "$", INR : "₹", EUR: "€" }[curr.name]}</span> {(price * curr.value).toLocaleString({USD : 'en-US', INR : 'en-IN', EUR: 'en-US'}[curr.name])}</span>
    </li>
  );
};

export default CartList;
