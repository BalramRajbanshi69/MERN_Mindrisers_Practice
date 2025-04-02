import React, { useState } from "react";
import { toast } from "react-toastify";

const EditModal = ({ prod, isOpen, onClose, onSave }) => {
  if (!isOpen) return null;
  const [formData, setFormData] = useState({
    title: prod.title,
    description: prod.description,
    price: prod.price,
    inStock: prod.inStock,
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // const handleSave = () => {
  //   onSave(formData);
  //   onClose();
  // };


  const handleSave = async () => {
    try {
      await onSave(formData);
      toast.success("Product updated successfully!");
      onClose();
    } catch (error) {
      toast.error("Failed to update product");
      console.error("Error updating product:", error);
    }
  };


  return (
    <div>
      <div
        className="modal d-block"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Product</h5>
              <button
                className="btn-close"
                type="button"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <form action="">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title:
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="form-control"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">
                    Price:
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="form-control"
                    value={formData.price}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description:
                  </label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    className="form-control"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inStock" className="form-label">
                    In Stock:
                  </label>
                  <input
                    type="number"
                    name="inStock"
                    id="inStock"
                    className="form-control"
                    value={formData.inStock}
                    onChange={handleChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                onClick={onClose}
                className="btn btn-outline-danger"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
