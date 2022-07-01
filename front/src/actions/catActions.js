import axios from "axios";
import {
  ALL_CAT_REQUEST,
  ALL_CAT_SUCCESS,
  ALL_CAT_FAIL,
  NEW_CAT_REQUEST,
  NEW_CAT_SUCCESS,
  NEW_CAT_FAIL,
  CAT_DETAILS_REQUEST,
  CAT_DETAILS_SUCCESS,
  CAT_DETAILS_FAIL,
  UPDATE_CAT_REQUEST,
  UPDATE_CAT_SUCCESS,
  UPDATE_CAT_FAIL,
  CLEAR_ERRORS,
  DELETE_CAT_REQUEST,
  DELETE_CAT_SUCCESS,
  DELETE_CAT_FAIL,
} from "../constants/catConstants";

// Get All Cat
export const getAllCat = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_CAT_REQUEST });

    const { data } = await axios.get("/api/v1/products");

    dispatch({
      type: ALL_CAT_SUCCESS,
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: ALL_CAT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const createCat = (productData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_CAT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/category/new`,
      productData,
      config
    );

    dispatch({
      type: NEW_CAT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_CAT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// CAT details
export const getCatDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: CAT_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`/api/v1/category/${id}`);

    dispatch({
      type: CAT_DETAILS_SUCCESS,
      payload: data.CAT,
    });
  } catch (error) {
    dispatch({
      type: CAT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Category
export const updateCategory = (id, productData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_CAT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v1/category/${id}`,
      productData,
      config
    );

    dispatch({
      type: UPDATE_CAT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_CAT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const deleteCat = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_CAT_REQUEST });

    const { data } = await axios.delete(`/api/v1/category/${id}`);

    dispatch({
      type: DELETE_CAT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_CAT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
