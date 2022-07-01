import React from "react";
import "./item.css";
// import EditIcon from "@material-ui/icons/Edit";
// import DeleteIcon from "@material-ui/icons/Delete";
import { deleteProduct } from "../../actions/productAction";
import { useDispatch } from "react-redux";

const Item = ({ product }) => {
  const dispatch = useDispatch();

  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="rows">
      <div className="wide">{product.name}</div>
      <div className="wide">{product.category}</div>
      <div className="narrow">{product.stock}</div>
      <div className="narrow">{`₹${product.price}`}</div>
      <a className="narrow" href={`/product/${product._id}`}>
        Edit
      </a>

      <button onClick={() => deleteProductHandler(product._id)}>Delete</button>
    </div>
  );
};

export default Item;
