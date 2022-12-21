import { useState, useContext } from "react";
import EstimateContext from "./estimateContext";
import currConvert from "./currConvert";
import CurrContext from "./currContext";
import { Link } from "react-router-dom";

const Landing = () => {
  const [money, setMoney] = useState("");
  const [curr, setCurr] = useState("usd");
  const [estimate, setEstimate] = useContext(EstimateContext);
  const [, setCurry] = useContext(CurrContext);

  // useEffect(
  //   () => {
  //     updateMoney();
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [money, curr]
  // );

  const updateMoney = () => {
    if (curr === "usd") {
      const item = {
        val: money,
        estimateSet: true,
      };
      setEstimate(item);
    } else {
      const data = currConvert(curr);
      data.then((data) => {
        const updatedTotal = ((money * 1) / data).toFixed(2);
        const item = {
          val: updatedTotal,
          estimateSet: true,
        };
        setEstimate(item);
        const currItem = {
          name: curr,
          value: data,
        };
        setCurry(currItem);
      });
    }
  };

  return (
    <>
      <div className="container d-flex align-items-center justify-content-center mt-5">
        <div className="d-flex flex-column align-items-center justify-content-center text-center col-12 col-md-10">
          <h3>
            Hey! You must have dreamed of buying luxurious things or experiences
            when you will have money. Ever thought how much money do you
            actually need to fullfill those dreams? Let's find out! <br />{" "}
            <br />
            Make a guess of how much money do you think you need? <br />
          </h3>
          <form
            className="mt-3 mb-3"
          >
            <fieldset disabled={estimate.estimateSet}>
              <div className="row align-items-center mb-4">
                <div className="col-auto">
                  <select
                    className="form-select test-dark text-bold currBtnLand fw-bold"
                    onChange={(e) => {
                      setCurr(e.target.value);
                    }}
                    id="curr"
                  >
                    <option value="USD">$</option>
                    <option value="INR">₹</option>
                    <option value="EUR">€</option>
                  </select>
                </div>
                <div className="col-auto">
                  <input
                    type="number"
                    id="money"
                    placeholder="10000000"
                    min="100"
                    className="form-control"
                    onChange={(e) => {
                      setMoney(e.target.value);
                    }}
                  />
                </div>
              </div>
              <button
                  type="button"
                  className="btn btn-color"
                  style={{ fontSize: "22px" }}
                  disabled={money === "" || estimate.estimateSet ? true : false}
                >
              <Link to="/products" onClick={updateMoney} className="link-dark text-decoration-none">
                  Let's Calculate  
              </Link>
              </button>
            </fieldset>
          </form>

          {/* <span
            style={{ pointerEvents: money === "" ? "none" : "auto" }}
            onClick={() => {
              setEstimate({ val: estimate.val, estimateSet: true });
            }}
          >
            <Button
              text={"Let's Calculate"}
              fontSize={22}
              disable={money === "" ? true : false}
              path="/products"
            />
          </span> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Landing;
