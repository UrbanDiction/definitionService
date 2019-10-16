/* eslint-disable */
import React from "react";
import Definition from "./Definition.jsx";

const DefinitionList = props => {
  const definitions = props.data.map((item, key) => {
    <Definition key={key} data={item} />;
  });
  return <div>{definitions}</div>;
};

export default DefinitionList;
