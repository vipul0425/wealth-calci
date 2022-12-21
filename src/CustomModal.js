import { useContext, useEffect, useState } from "react";
import CurrContext from "./currContext";
import CustomList from "./CustomList";

const CustomModal = ({ setShowModal, customCart, setCustomCart }) => {
  const [item, setItem] = useState({});
  const [curr] = useContext(CurrContext);

  useEffect(() => {
    if (item.name) {
      setCustomCart([...customCart, item]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);

  return (
    <div className="row overlay d-flex justify-content-center align-items-center">
      <div className="col-8 col-md-6 card p-2 modal-box">
        <div className="modal-content text-dark " style={{ maxHeight: "80vh" }}>
          <div className="modal-header">
            <h1 className="modal-title fs-5 fw-bold">Add Your Custom Items</h1>
            <button
              type="button"
              className="btn-close"
              onClick={() => {
                setShowModal(false);
              }}
            ></button>
          </div>
          <hr />
          <div className="modal-body px-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setItem({
                  name: e.target.productName.value,
                  price: e.target.productPrice.value,
                  quantity: e.target.productQuantity.value,
                  total:
                    curr.name === "USD"
                      ? +e.target.productPrice.value *
                        +e.target.productQuantity.value
                      : +e.target.productPrice.value *
                          +e.target.productQuantity.value *
                          1 /
                        curr.value,
                });
                e.target.reset();
              }}
            >
              <div className="mb-3">
                <label htmlFor="productName" className="form-label">
                  Product Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control text-dark"
                  id="productName"
                  required
                />
              </div>
              <div className="row">
                <div className="col-auto">
                  <label htmlFor="productPrice" className="form-label">
                    Price <span className="text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    className="form-control text-dark"
                    id="productPrice"
                    min={1}
                    required
                  />
                </div>
                <div className="col-auto">
                  <label htmlFor="productQuantity" className="form-label">
                    Quantity <span className="text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    className="form-control text-dark"
                    id="productQuantity"
                    min={1}
                    required
                  />
                </div>
              </div>
              <div className="mb-2 mt-2">
                <input type="submit" className="btn btn-color" value="Add" />
              </div>
            </form>
            <hr />
            <CustomList customCart={customCart} setCustomCart={setCustomCart} />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-color"
              onClick={() => {
                setShowModal(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
