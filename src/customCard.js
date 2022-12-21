import { useState } from "react";
import Modal from "./Modal";
import CustomModal from "./CustomModal";
import { FiPlus } from "react-icons/fi";

const CustomCard = ({ customCart, setCustomCart }) => {
  const [showModal, setShowModal] = useState(false);

//   if (showModal === true) {
//     document.getElementById("root").style.position = "fixed";
//     document.getElementById("root").style.bottom = "0";
//     document.getElementById("root").style.overflow = "hidden";
//   } else {
//     document.getElementById("root").style.overflow = "auto";
//     document.getElementById("root").style.position = "static";
//   }
  return (
    <div className="col-12 mt-3 d-flex justify-content-center">
      <div
        className="col-6 col-md-3 cursor-pointer"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <div
          className="card text-dark d-flex align-items-center justify-content-center flex-column"
          style={{ minHeight: "230px" }}
        >
          <span
            className="border rounded-circle fw-bold mb-3 fs-5 px-1"
            style={{ backgroundColor: "#DE774E" }}
          >
            <FiPlus />
          </span>
          <h2>
            {customCart.length === 0
              ? "Add Custom Items"
              : "Custom Items Added"}
          </h2>
        </div>
      </div>
      {showModal ? (
        <Modal>
          <CustomModal
            setShowModal={setShowModal}
            customCart={customCart}
            setCustomCart={setCustomCart}
          />
        </Modal>
      ) : null}
    </div>
  );
};

export default CustomCard;
