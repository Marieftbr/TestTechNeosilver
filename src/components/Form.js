import React from "react";
import weapons from "../weapons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Form(props) {
  const weaponNames = Object.keys(weapons);

  return (
    <div className="form__wrapper">
      {weaponNames.map((weaponName) => {
        return (
          <button
            className="form-btn"
            key={weaponName}
            onClick={() => {
              props.setUserWeapon(weaponName);
            }}
            disabled={props.userWeapon}
          >
            <FontAwesomeIcon
              icon={weapons[weaponName].icon}
              size="2xl"
            ></FontAwesomeIcon>
          </button>
        );
      })}
    </div>
  );
}
