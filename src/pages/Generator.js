import React, { useState } from "react";
import Form from "../components/Form";
import Result from "../components/Result";
import weapons from "../weapons";
import getRandomNumber from "../utils";

export default function Generator() {
  const [userWeapon, setUserWeapon] = useState(null);
  const availableWeapons = Object.keys(weapons);
  const randomNumber = getRandomNumber(availableWeapons.length);
  const computerWeapon = availableWeapons[randomNumber];

  return (
    <div>
      <h1 className="generator__title">Play to Rock Paper Scissors</h1>
      <div className="card">
        <h2 className="generator__subtitle">Choose your weapon</h2>
        <Form setUserWeapon={setUserWeapon} userWeapon={userWeapon} />
      </div>
      {userWeapon ? (
        <Result
          userWeapon={userWeapon}
          computerWeapon={computerWeapon}
          setUserWeapon={setUserWeapon}
        />
      ) : (
        ""
      )}
    </div>
  );
}
