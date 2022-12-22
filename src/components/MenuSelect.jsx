import React from "react";

const MenuSelect = (props) => {
  return (
    <div className="relative">
      <input
        className="absolute visible w-full h-full bg-red-100 opacity-0 peer"
        onChange={props.onChangedMenu}
        type="radio"
        name={props.groupName}
        value={props.value}
      ></input>
      <label
        className="peer-checked:border-b-[2px] peer-checked:text-[#c2980e]"
        htmlFor={props.value}
      >
        {props.title}
      </label>
    </div>
  );
};

export default MenuSelect;
