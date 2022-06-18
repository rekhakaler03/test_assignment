import {
  ALL_RECORDS,
  ALL_RECORDS_ERROR,
  GET_SINGLE_RECORD,
  GET_SINGLE_RECORD_ERROR,
} from "../actions/types";

const initialState = {
  loading: true,
  allRecords: [],
  singleRecord:null
};

export default function Records(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ALL_RECORDS:
      return {
        ...state,
        loading: false,
        allRecords: payload,
      };
    case ALL_RECORDS_ERROR:
      return {
        ...state,
        loading: false,
        allRecords: [],
      };
    case GET_SINGLE_RECORD:
      return {
        ...state,
        loading: false,
        singleRecord: payload,
      };
    case GET_SINGLE_RECORD_ERROR:
      return {
        ...state,
        loading: false,
        singleRecord: null,
      };
    default:
      return state;
  }
}
