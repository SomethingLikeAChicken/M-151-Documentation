import React, { useState } from "react";

function MoneyButton(props) {
  const [moneyValue, setMoneyValue] = useState(0);

  const handleButtonClick = () => {
    const randomMoneyValue = Math.floor(Math.random() * 141) + 10; // generates a random number between 10 and 150
    const randomNumber = Math.floor(Math.random() * 15); // generates a random number 0 - 14

    if (randomNumber === 0) {
      props.updateTotalMoney(-props.totalMoney);
      setMoneyValue(0);
      alert("Game over! Your money has been reset to 0. Restart the Browser so you'll get another Chance!");
    } else {
        setMoneyValue(randomMoneyValue);
        props.updateTotalMoney(randomMoneyValue);
      }
  };

  return (
    <div className="details">
        <p>Here you can spin the wheel and win some Money. But be aware, you might lose it all!</p>
      <button className="reset-btn" onClick={handleButtonClick}>Spin and Win!!</button>
      <p className="">Money Won: {moneyValue}</p>
    </div>
  );
}

export default MoneyButton;
