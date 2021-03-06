/* eslint-disable */
import React from "react";
import Definition from "./Definition.jsx";

const DefinitionList = props => {
  const definitions = props.data.definitionQuery.map((item, key) => {
    return <Definition key={key} data={item} def_id={key + 1} />;
  });
  return <div>{definitions}</div>;
};

export default DefinitionList;
