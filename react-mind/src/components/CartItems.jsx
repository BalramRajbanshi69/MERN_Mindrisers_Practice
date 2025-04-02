import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import p3 from "../assets/picThree.jpg";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const CartItems = () => {
  const {
    state: { cart },
    dispatch,
  } = useContext(ProductContext);
  const navigate = useNavigate();

  const GrandTotal = cart.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );
  const totalQuantities = cart.reduce(
    (acc, item) => acc + Number(item.quantity),
    0
  );

  const goBack = () => {
    navigate(-1);
  };

  if (cart.length === 0) {
    return (
      <div className="container mt-4">
        <div
          className="alert alert-danger d-flex align-items-center"
          role="alert"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
            viewBox="0 0 16 16"
            role="img"
            aria-label="Warning:"
          >
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
          <div>
            <span>Cart is Empty! </span>
            <span>Please select cart items</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container my-5">
      <div className="row">
        <div
          className="col-md-9"
          style={{
            border: "2px solid black",
            padding: "10px 15px",
            borderRadius: "4px",
            marginRight: " 20px",
          }}
        >
          <ul className="p-0">
            {cart.map((item) => {
              return (
                <li
                  key={item._id}
                  style={{
                    listStyle: "none",
                    margin: "25px 10px",
                    borderBottom: "2px solid black",
                  }}
                >
                  <div className="row mb-3 ">
                    <div className="col-md-3">
                      <img
                        // src={p3}
                        src={
                          item.image?.length > 0
                            ? `http://localhost:5000/uploads/${item.image[0]}`
                            : p3
                        }
                        alt="Picture"
                        className="img-fluid"
                        style={{ borderRadius: "8px" }}
                      />
                    </div>
                    <div className="col-md-3">
                      <p>
                        Product Name: <strong> {item.title}</strong>
                      </p>
                    </div>
                    <div className="col-md-2">
                      <p>
                        Price: <strong>$ {item.price * item.quantity}</strong>
                      </p>
                    </div>
                    <div className="col-md-1">
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          dispatch({
                            type: "UPDATE_CART",
                            payload: {
                              _id: item._id,
                              quantity: e.target.value,
                            },
                          })
                        }
                        className="form-control"
                      >
                        {[...Array(item.inStock).keys()].map((x) => (
                          <option key={x + 1}>{x + 1}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-1">
                      <button
                        className=" btn btn-danger"
                        onClick={() =>
                          dispatch({ type: "REMOVE_FROM_CART", payload: item })
                        }
                      >
                        <MdDeleteOutline size={25} />
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className="col-md-2"
          style={{
            border: "2px solid black",
            padding: "10px 15px",
            borderRadius: "4px",
            display: "grid",
            alignContent: "center",
            justifyContent: "start",
          }}
        >
          <p>
            Totol CartItems: <strong> {cart.length}</strong>
          </p>
          <p>
            Total Quantities: <strong>{totalQuantities}</strong>
          </p>
          <p>
            Grand Price: <strong>{GrandTotal}</strong>
          </p>
        </div>
        <div>
          <button className="btn btn-success mt-4" onClick={goBack}>
            <IoMdArrowRoundBack size={30} color="white"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
