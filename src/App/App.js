import React from "react";
import s from "./App.module.css";

export const App = (props) => {
  const { data } = props;

  const list = Object.keys(data).map((key) => (
    <div className={s.listContainer} key={key}>
      <span>{key}</span> <span>{data[key]}</span>
    </div>
  ));

  return <div className={s.container}>{list}</div>;
};

