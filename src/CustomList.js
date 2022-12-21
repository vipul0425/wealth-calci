import { useContext } from "react";
import { FiTrash } from "react-icons/fi";
import CurrContext from "./currContext";

const CustomList = ({ customCart, setCustomCart }) => {
  const handleDelete = (index) => {
    const newCart = [...customCart];
    newCart.splice(index, 1);
    setCustomCart(newCart);
  };
  const [curr] = useContext(CurrContext);

  return (
    <ul className="listgroup ps-0">
      {customCart.map((item, index) => (
        <li
          className="list-group-item d-flex justify-content-between align-items-start"
          key={index}
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              <span className="pe-2">x{item.quantity}</span>
              {item.name}
              <span className="ps-2"><span>{{USD : "$", INR : "₹", EUR: "€" }[curr.name]}</span> {(item.total * curr.value).toLocaleString({USD : 'en-US', INR : 'en-IN', EUR: 'en-US'}[curr.name])}</span>
              {console.log(item.total)}
            </div>
          </div>
          <span
            className="ps-2 text-danger cursor-pointer"
            onClick={() => {
              handleDelete(index);
            }}
          >
           <FiTrash />
          </span>
        </li>
      ))}
    </ul>
  );
};

export default CustomList;
