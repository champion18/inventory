import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  updateProduct,
  getProductDetails,
} from "../../actions/productAction";
import { UPDATE_PRODUCT_RESET } from "../../constants/productConstants";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, product } = useSelector((state) => state.productDetails);

  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.product);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(0);

  const categories = ["milkshake", "soft-drink", "juice"];

  const { id } = useParams();
  useEffect(() => {
    if (product && product._id !== id) {
      dispatch(getProductDetails(id));
    } else {
      setName(product.name);
      setPrice(product.price);
      setCategory(product.category);
      setStock(product.stock);
    }
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    if (updateError) {
      alert(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert("Product Updated Successfully");
      navigate("/products");
      dispatch({ type: UPDATE_PRODUCT_RESET });
    }
  }, [dispatch, error, navigate, isUpdated, id, product, updateError]);

  const updateProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("category", category);
    myForm.set("stock", stock);

    dispatch(updateProduct(id, myForm));
  };

  return (
    <Fragment>
      <div className="newProductContainer">
        <form
          className="createProductForm"
          encType="multipart/form-data"
          onSubmit={updateProductSubmitHandler}
        >
          <h1>Update Product</h1>

          <div>
            <input
              type="text"
              placeholder="Product Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Price"
              required
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </div>

          <div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Choose Category</option>
              {categories.map((cate) => (
                <option key={cate} value={cate}>
                  {cate}
                </option>
              ))}
            </select>
          </div>

          <div>
            <input
              type="number"
              placeholder="Stock"
              required
              onChange={(e) => setStock(e.target.value)}
              value={stock}
            />
          </div>

          <button
            id="createProductBtn"
            type="submit"
            disabled={loading ? true : false}
          >
            Update
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default UpdateProduct;
