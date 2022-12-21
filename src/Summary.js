import Button from "./button";
import { useContext } from "react";
import cartContext from "./cartContext";
import CustomContext from "./CustomContext";
import CartList from "./cartList";
import CurrContext from "./currContext";

const Summary = () => {
  const [cart] = useContext(cartContext);
  const [customCart] = useContext(CustomContext);
  const [curr] = useContext(CurrContext);

  return (
    <>
      <div className="container text-center">
        <h3>Here is the reciet of all the items that you want to have...</h3>
        <div className="overflow-auto border rounded reciet-div bg-light text-dark my-3">
          <ul className="list-group" id="section-to-print">
            {Object.values(cart)
              .filter((item) => item.quantity !== 0)
              .map((item) => (
                <CartList
                  name={item.name}
                  quantity={item.quantity}
                  price={item.price}
                />
              ))}
            {customCart.map((item, index) => (
              <CartList
                name={item.name}
                quantity={item.quantity}
                price={item.total}
                index={index}
              />
            ))}
            <li
              className="list-group-item d-flex                    justify-content-between align-items-start"
              key="total"
            >
              <div className="fw-bold fs-5">Total</div>

              <h5 className="fw-bold fs-5">
                <span>{{ USD: "$", INR: "₹", EUR: "€" }[curr.name]}</span>{" "}
                {(
                  ((
                    Object.values(cart).reduce(
                      (acc, obj) => acc + obj.price,
                      0
                    ) + customCart.reduce((acc, item) => acc + item.total, 0)
                  ).toFixed(2)) * curr.value
                ).toLocaleString(
                  { USD: "en-US", INR: "en-IN", EUR: "en-US" }[curr.name]
                )}
              </h5>
            </li>
          </ul>
        </div>
        <div>
          <span
            onClick={() => {
              window.print();
            }}
          >
            <Button text="Print 🖨️" fontSize={18} />
          </span>
        </div>
        <Button
          text={`Compare 💵`}
          fontSize={18}
          disable={false}
          path="/compare"
        />
      </div>
    </>
  );
};

export default Summary;
