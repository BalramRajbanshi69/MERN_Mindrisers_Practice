
import React, { useEffect, useReducer, useState } from "react";
import ProductContext from "./ProductContext";
import cartReducer from "./Reducer";

const ProductState = (props) => {
  const prod = [
    {
      _id: 1,
      title: "sweater",
      description: "this is a woolen sweater",
      price: 1000,
      inStock: 10,
    },
    {
      _id: 2,
      title: "jeans",
      description: "blue jeans",
      price: 500,
      inStock: 5,
    },
    {
      _id: 3,
      title: "tshirt ",
      description: "summer shirt",
      price: 400,
      inStock: 5,
    },
    {
      _id: 4,
      title: "cap ",
      description: "summer cap",
      price: 400,
      inStock: 5,
    },
  ];
  const [product, setProduct] = useState(prod);
  const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [state, dispatch] = useReducer(cartReducer, {
    products: product,
    cart: initialCart,
  });
  
  useEffect(()=>{
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  const allProduct = async (searchQuery = "") => {
    const response = await fetch(
      `http://localhost:5000/api/product/getallproducts?searchQuery=${searchQuery}`, 
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };

  // edit product
  const editProduct = async (selectedProduct, updateData) => {
    console.log("edit product", selectedProduct);
    const { title, description, price, inStock } = updateData;
    try {
      const response = await fetch(
        `http://localhost:5000/api/product/updateproduct/${selectedProduct}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({ title, description, price, inStock }),
        }
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const json = await response.json();
      console.log(json);
    } catch (error) {
      throw new Error("fail to update");
    }
  };

  // delete product
  const deleteProduct = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/product/deleteproduct/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        }
      );
      if (response.ok) {
        console.log("product deleted succesfully!");
      } else {
        console.log("failed to delete the product");
      }
      allProduct();
    } catch (error) {
      console.error("internal server error");
    }
  };

  return (
    <ProductContext.Provider
      value={{
        product,
        state,
        dispatch,
        allProduct,
        editProduct,
        deleteProduct,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
