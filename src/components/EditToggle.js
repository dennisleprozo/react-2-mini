import React from 'react';
//add props and use in event listener
export default function EditToggle(props) {
    return (
      <select 
        className="dropDownContainer ml0" 
        onChange={ (e) => props.update(e.target.value) }>
          <option value="true"> Allow Edit </option>
          <option value="false"> Disable Edit </option>
      </select>
    )
  }