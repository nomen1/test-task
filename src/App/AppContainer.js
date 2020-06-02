import { App } from "./App";
import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import { getData } from "./../redux/appReducer";

const AppContainer = (props) => {
  const { getData, data } = props;

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>{data == null ? <div> wait, please </div> : <App {...props} />}</div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.app.data
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => {
      dispatch(getData());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
