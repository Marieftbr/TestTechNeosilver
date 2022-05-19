import React from "react";
import weapons from "../weapons";

export default function Result(props) {
  const getResult = () => {
    if (props.computerWeapon === props.userWeapon) {
      return `${props.userWeapon} VS ${props.computerWeapon} : Egality !`;
    }

    if (weapons[props.userWeapon].rules[props.computerWeapon]) {
      return `${props.userWeapon} VS ${props.computerWeapon} : Win !`;
    }

    return `${props.userWeapon} VS ${props.computerWeapon} : Loss !`;
  };

  return (
    <div class="result__background">
      <div className="result__wrapper">
        <span className="result__text">{getResult()}</span>

        <button
          className="result__btn"
          onClick={() => {
            props.setUserWeapon(null);
          }}
        >
          Play Again ?
        </button>
      </div>
    </div>
  );
}
