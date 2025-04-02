import React, { useContext, useEffect, useState } from "react";
import s1 from "../assets/picTwo.jpg";
import ProductContext from "../context/ProductContext";
import { BsThreeDots } from "react-icons/bs";
import EditModal from "./EditModal";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import "./Profile.css";
import { FaPlus } from "react-icons/fa";
import "./Profile.css";

const Profile = () => {
  const params = useParams();
  const searchQuery = params.searchQuery;
  const {
    product,
    state: { cart },
    dispatch,
    allProduct,
    editProduct,
    deleteProduct,
  } = useContext(ProductContext);
  console.log("Product items:", product);
  console.log("Carts items:", cart);
  console.log(allProduct);

  const [menuVisible, setMenuVisible] = useState(false);
  const [modelVisible, setModelVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const showAddNotification = () => toast.success("Added Cart Successfully");
  const showRemoveNotification = () => toast.error("Removed Cart Successfully");

  const handleMenu = (id) => {
    setMenuVisible((prevMenu) => ({
      ...prevMenu,
      [id]: !prevMenu[id],
    }));
  };

  const OpenEditModal = (prod) => {
    setModelVisible(true);
    setSelectedProduct(prod);
  };

  const EditCloseModal = () => {
    setModelVisible(false);
    setSelectedProduct(null);
  };

  const EditSave = (updatedData) => {
    console.log("save changing or changed");
    editProduct(selectedProduct._id, updatedData);
  };

  const handleDeleteMenu = async (id) => {
    console.log("deleting products");
    await deleteProduct(id);
  };
  // useEffect(() => {
  //   allProduct(searchQuery);
  // }, [searchQuery]);

  // In your JSX, update the card structure:
  // return (
  //   <div className="container mt-4">
  //     <div className="row">
  //       <div className="title mb-4">
  //         <h4>My products</h4>
  //       </div>
  //       {product &&
  //         product?.map((item) => (
  //           <div key={item._id} className="col-md-3">
  //             <div className="card" style={cardStyles.card}>
  //               <div style={cardStyles.imageContainer}>
  //                 <img
  //                   style={cardStyles.image}
  //                   src={
  //                     item.image && item.image.length > 0
  //                       ? `http://localhost:5000/uploads/${item.image[0]}`
  //                       : s1
  //                   }
  //                   alt={item.title || "Product Image"}
  //                 />
  //               </div>
  //               <div style={cardStyles.cardBody}>
  //                 <div>
  //                   <div
  //                     style={{
  //                       display: "flex",
  //                       justifyContent: "space-between",
  //                       alignItems: "center",
  //                     }}
  //                   >
  //                     <h5 style={cardStyles.cardTitle}>{item.title}</h5>
  //                     <div style={cardStyles.menuContainer}>
  //                       <BsThreeDots
  //                         onClick={() => handleMenu(item._id)}
  //                         style={{ cursor: "pointer" }}
  //                       />
  //                       {menuVisible[item._id] && (
  //                         <div style={cardStyles.menu}>
  //                           <button
  //                             className="btn btn-sm btn-outline-primary mb-2 w-100"
  //                             onClick={() => OpenEditModal(item)}
  //                           >
  //                             Edit
  //                           </button>
  //                           <button
  //                             className="btn btn-sm btn-outline-danger w-100"
  //                             onClick={() => handleDeleteMenu(item._id)}
  //                           >
  //                             Delete
  //                           </button>
  //                         </div>
  //                       )}
  //                     </div>
  //                   </div>
  //                   <p style={cardStyles.description}>{item.description}</p>
  //                   <div style={cardStyles.priceStock}>
  //                     <p className="mb-1">
  //                       <strong>Price:</strong> ${item.price}
  //                     </p>
  //                     <p className="mb-0">
  //                       <strong>InStock:</strong> {item.inStock}
  //                     </p>
  //                   </div>
  //                 </div>
  //                 <div style={cardStyles.buttonContainer}>
  //                   {cart && cart.some((p) => p._id === item._id) ? (
  //                     <button
  //                       className="btn btn-danger w-100"
  //                       onClick={() => {
  //                         showRemoveNotification();
  //                         dispatch({
  //                           type: "REMOVE_FROM_CART",
  //                           payload: item,
  //                         });
  //                       }}
  //                     >
  //                       Remove From Cart
  //                     </button>
  //                   ) : (
  //                     <button
  //                       className="btn btn-primary w-100"
  //                       onClick={() => {
  //                         showAddNotification();
  //                         dispatch({
  //                           type: "ADD_TO_CART",
  //                           payload: item,
  //                         });
  //                       }}
  //                     >
  //                       Add To Cart
  //                     </button>
  //                   )}
  //                 </div>
  //               </div>
  //             </div>

  //             {modelVisible &&
  //               selectedProduct &&
  //               selectedProduct._id === item._id && (
  //                 <EditModal
  //                   isOpen={modelVisible}
  //                   onClose={EditCloseModal}
  //                   prod={selectedProduct}
  //                   onSave={EditSave}
  //                 />
  //               )}
  //           </div>
  //         ))}
  //     </div>
  //   </div>
  // );

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="title mb-4 d-flex justify-content-between align-items-center">
          <h4>My products</h4>
          <Link to="/addproduct" className="btn btn-primary">
            <FaPlus className="me-1" size={20} />
            Add Products
          </Link>
        </div>

        {product &&
          product?.map((item) => (
            <div key={item._id} className="col-lg-3 ">
              <div className="product-card">
                <div className="image-container">
                  <img
                    className="product-image"
                    src={
                      item.image?.length > 0
                        ? `http://localhost:5000/uploads/${item.image[0]}`
                        : s1
                    }
                    alt={item.title || "Product Image"}
                  />
                </div>
                <div className="card-body">
                  <div>
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="card-title">{item.title}</h5>
                      <div className="menu-container">
                        <BsThreeDots
                          onClick={() => handleMenu(item._id)}
                          style={{ cursor: "pointer" }}
                        />
                        {menuVisible[item._id] && (
                          <div className="menu-dropdown">
                            <button
                              className="btn btn-sm btn-outline-primary mb-2 w-100"
                              onClick={() => OpenEditModal(item)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-sm btn-outline-danger w-100"
                              onClick={() => handleDeleteMenu(item._id)}
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                    <p className="card-description">{item.description}</p>
                    <div className="price-stock">
                      <p className="mb-1">
                        <strong>Price:</strong> ${item.price}
                      </p>
                      <p className="mb-0">
                        <strong>InStock:</strong> {item.inStock}
                      </p>
                    </div>
                  </div>
                  <div className="button-container">
                    {cart && cart.some((p) => p._id === item._id) ? (
                      <button
                        className="btn btn-danger action-button"
                        onClick={() => {
                          showRemoveNotification();
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: item,
                          });
                        }}
                      >
                        Remove From Cart
                      </button>
                    ) : (
                      <button
                        className="btn btn-primary action-button"
                        onClick={() => {
                          showAddNotification();
                          dispatch({
                            type: "ADD_TO_CART",
                            payload: item,
                          });
                        }}
                      >
                        Add To Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
              {modelVisible &&
                selectedProduct &&
                selectedProduct._id === item._id && (
                  <EditModal
                    isOpen={modelVisible}
                    onClose={EditCloseModal}
                    prod={selectedProduct}
                    onSave={EditSave}
                  />
                )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Profile;
