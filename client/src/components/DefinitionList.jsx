/* eslint-disable */
import React from "react";
import Definition from "./Definition.jsx";

const DefinitionList = props => {
  const definitions = props.data.map((item, key) => {
    return <Definition key={key} data={item} def_id={key + 1} />;
  });
  console.log(definitions);
  return <div>{definitions}</div>;
};

export default DefinitionList;
