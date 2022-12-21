import { useContext } from "react";
import cartContext from "./cartContext";
import Billionare from "./billionare";
import EstimateContext from "./estimateContext";
import Footer from "./footer";
import CustomContext from "./CustomContext";
import CurrContext from "./currContext";

const Compare = () => {
  const [cart] = useContext(cartContext);
  const [customCart] = useContext(CustomContext);
  const total = (
    Object.values(cart).reduce((acc, obj) => acc + obj.price, 0) +
    customCart.reduce((acc, item) => acc + item.total, 0)
  ).toFixed(2);
  const data = require("./billion-data.json");
  const [estimate] = useContext(EstimateContext);
  const [curr] = useContext(CurrContext);

  return (
    <div className="container text-center">
      <h3 className="mb-5">
        Your Total : <span>{{ USD: "$", INR: "₹", EUR: "€" }[curr.name]}</span>{" "}
        {(total * curr.value).toLocaleString(
          { USD: "en-US", INR: "en-IN", EUR: "en-US" }[curr.name]
        )}
        {console.log("val",estimate.val)}
        {console.log("set",estimate.estimateSet)}
      </h3>
      <div className="row mt-4">
        <Billionare
          key={"estimate"}
          name={"your estimated"}
          percent={((total / estimate.val) * 100).toFixed(5)}
          wealth={0}
          img={"yours.jpg"}
          rank={0}
        />
        {Object.values(data).map((item) => (
          <Billionare
            key={item.name}
            name={item.name}
            percent={((total / item.wealth) * 100).toFixed(5)}
            wealth={item["wealth-string"]}
            img={item.img}
            rank={item.rank}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};
export default Compare;
