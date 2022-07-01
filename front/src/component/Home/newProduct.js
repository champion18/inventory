import React, { Fragment, useEffect, useState } from "react";
import "./newProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createProduct } from "../../actions/productAction";
import { NEW_PRODUCT_RESET } from "../../constants/productConstants";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, success } = useSelector((state) => state.newProduct);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [category, setCategory] = useState("");

  const categories = ["milkshake", "soft-drink", "juice"];

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert("Product Created Successfully");
      navigate("/products");
      dispatch({ type: NEW_PRODUCT_RESET });
    }
  }, [dispatch, error, success, navigate]);

  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("stock", stock);
    myForm.set("category", category);
    console.log(myForm);
    dispatch(createProduct(myForm));
  };

  return (
    <Fragment>
      <div className="newProductContainer">
        <form
          className="createProductForm"
          encType="multipart/form-data"
          onSubmit={createProductSubmitHandler}
        >
          <h1>Create Product</h1>

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
            />
          </div>

          <div>
            <select onChange={(e) => setCategory(e.target.value)} required>
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
            />
          </div>

          <button
            id="createProductBtn"
            type="submit"
            disabled={loading ? true : false}
          >
            Create
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default NewProduct;
