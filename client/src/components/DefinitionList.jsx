/* eslint-disable */
import React from "react";
import Definition from "./Definition.jsx";

const DefinitionList = props => {
  const definitions = props.data.map((item, key) => {
    return <Definition key={key} data={item} />;
  });
  console.log(definitions);
  return <div>{definitions}</div>;
};

export default DefinitionList;
