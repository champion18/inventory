import React, { Fragment, useEffect, useState } from "react";
import "./newProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createProduct } from "../../actions/productAction";
import { NEW_CAT_RESET } from "../../constants/catConstants";
import { useNavigate } from "react-router-dom";

const NewCat = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, success } = useSelector((state) => state.newProduct);

  const [name, setName] = useState("");
  const [caffeinated, setCaffeinated] = useState("");

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert("Product Created Successfully");
      navigate("/products");
      dispatch({ type: NEW_CAT_RESET });
    }
  }, [dispatch, error, success, navigate]);

  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("caffeinated", caffeinated);
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
              type="text"
              placeholder="Is it caffeinated?"
              required
              onChange={(e) => setCaffeinated(e.target.value)}
            />
          </div>
          {/* 
          <select onChange={(e) => setCaffeinated(e.target.value)} required>
            <option value="">Is it caffeinated?</option>
            <option value="true"> </option>
            <option value={false}></option>
          </select> */}

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

export default NewCat;
