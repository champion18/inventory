import React, { Fragment, useEffect } from "react";
import "./productList.css";
import "./item.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getAdminProduct } from "../../actions/productAction";
import { useNavigate } from "react-router-dom";
import Item from "../Home/Item.js";
import { DELETE_PRODUCT_RESET } from "../../constants/productConstants";

const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, products } = useSelector((state) => state.products);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert("Product Deleted Successfully");
      navigate("/products");
      dispatch({ type: DELETE_PRODUCT_RESET }); // to make isDeleted false
    }

    dispatch(getAdminProduct());
  }, [dispatch, error, navigate, deleteError, isDeleted]);

  return (
    <Fragment>
      <div className="products">
        <div className="rowsHeading">
          <div className="Name">Name</div>
          <div className="Category">Category</div>
          <div className="Stock">Stock</div>
          <div className="Price">Price</div>
        </div>
        {products &&
          products.map((product) => (
            <Item key={product._id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default ProductList;
