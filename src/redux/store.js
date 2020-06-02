  
import { createStore, combineReducers, applyMiddleware } from "redux";
import appReducer from "./appReducer";
import thunkMiddleware from "redux-thunk";


const reducers = combineReducers({
  app: appReducer
 
});

const store = createStore(
    reducers,
    applyMiddleware(thunkMiddleware)
  );
  export default store;