import axios from "axios";
import {
  ALL_RECORDS,
  ALL_RECORDS_ERROR,
  GET_SINGLE_RECORD,
  GET_SINGLE_RECORD_ERROR,
} from "./types";

export const getAllRecords = () => async (dispatch) => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/photos`);
    dispatch({
      type: ALL_RECORDS,
      payload: res.data.reverse(),
    });
  } catch (err) {
    dispatch({
      type: ALL_RECORDS_ERROR,
    });
    return err;
  }
};

export const getRecordById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/photos/${id}`
    );
    dispatch({
      type: GET_SINGLE_RECORD,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_SINGLE_RECORD_ERROR,
    });
    return err;
  }
};
