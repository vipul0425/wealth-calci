import { useContext } from "react";
import ProductCard from "./productCard";
import Button from "./button";
import CustomCard from "./customCard";
import CustomContext from "./CustomContext";

const Products = () => {
  const [customCart, setCustomCart] = useContext(CustomContext);
  const res = require("./data.json");
  const products = res.accessories;
    
  return (
    <div className="container text-center mb-3">
      <h3>Buy Items as much as you want...</h3>
      <div className="row mb-3">
        {products.map((item) => {
          const { id, name, price, image, } = item;

          return (
            <ProductCard
              key={name}
              id={id}
              name={name}
              price={price}
              image={image}
            />
          );
        })}
        <CustomCard customCart={customCart} setCustomCart={setCustomCart} />
      </div>
      <Button
        text="Check Summary"
        fontSize={22}
        disable={false}
        path="/summary"
      />
    </div>
  );
};

export default Products;
