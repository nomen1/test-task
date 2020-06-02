const SET_DATA = "SET_DATA"
const initialState = {}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_DATA:
        return {
          ...state,
          
        };
  
      
      default:
        return state;
    }
  };
  
  export default appReducer;