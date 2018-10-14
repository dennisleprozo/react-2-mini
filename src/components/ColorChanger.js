import React from 'react';

export default function ColorChanger(props) {
  return (
    <select 
      onChange={ (e) => props.update(e.target.value)}
      disabled={ props.allowEdit === "false"}
      className="dropDownContainer">
      <option value="black"> Black </option>
      <option value="blue"> Blue </option>
      <option value="green"> Green </option>
    </select>
  )
}