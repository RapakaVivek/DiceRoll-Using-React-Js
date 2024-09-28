import './App.css';
import { useState } from 'react';
import DiceImage1 from "./images/Dice1.png";
import DiceImage2 from "./images/Dice2.png";
import DiceImage3 from "./images/Dice3.png";
import DiceImage4 from "./images/Dice4.png";
import DiceImage5 from "./images/Dice5.png";
import DiceImage6 from "./images/Dice6.png";

function App() {
  const diceImages = [
    DiceImage1,
    DiceImage2,
    DiceImage3,
    DiceImage4,
    DiceImage5,
    DiceImage6
  ];

  const [image, setNewImage] = useState(diceImages[0]);
  const [isRotating, setIsRotating] = useState(false); 

  const rollDice = () => {
    setIsRotating(true);
    setTimeout(() => {
        const randomNum = Math.floor(Math.random() * 6);
        setNewImage(diceImages[randomNum]);
        setIsRotating(false);
    }, 1000); 
  };

  return (
    <div className="App">
      <h1>DiceRoll</h1>
      <img 
        src={image} 
        alt="Dice" 
        className={isRotating ? 'rotating' : ''} 
      /><br></br>
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
}

export default App;
