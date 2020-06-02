import { dataAPI } from "./../api";
const SET_DATA = "SET_DATA";




export const setData = (data) => {
  return {
    type: SET_DATA,
    data
  };
};

export const getData = () => {
  return async (dispatch) => {
    let response = await dataAPI.getData();
    console.log(response);
    dispatch(setData(response.data.rates));
  };
};


const initialState = {
    data: null
  };





export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.data
      };

    default:
      return state;
  }
};

