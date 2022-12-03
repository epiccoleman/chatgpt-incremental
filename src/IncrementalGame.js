import React from 'react';

// Define the incremental game component
const IncrementalGame = () => {
  // Create a state variable to store the player's wood count
  const [wood, setWood] = React.useState(0);

  // Create a state variable to store the player's stone count
  const [stone, setStone] = React.useState(0);

  // Create a state variable to store the player's gold count
  const [gold, setGold] = React.useState(0);

  // Create a state variable to store the player's wood cutter count
  const [woodCutters, setWoodCutters] = React.useState(0);

  // Create a state variable to store the player's wood per second rate
  const [woodPerSecond, setWoodPerSecond] = React.useState(0);

  // Create a state variable to store the player's house count
  const [houses, setHouses] = React.useState(0);

  // Create a state variable to store the player's soul count
  const [souls, setSouls] = React.useState(0);

// Define a function to reset the game
  const resetGame = () => {
    // Set the player's wood, stone, gold, wood cutter, wood per second, house, and soul counts to 0
    setWood(0);
    setStone(0);
    setGold(0);
    setWoodCutters(0);
    setWoodPerSecond(0);
    setHouses(0);
    setSouls(0);
    };

  // Define a function to handle the player gathering wood
  const gatherWood = () => {
    // Increment the player's wood count
    setWood(wood + 1);
  };

  // Define a function to handle the player gathering stone
  const gatherStone = () => {
    // Increment the player's stone count
    setStone(stone + 1);
  };

  // Define a function to handle the player selling wood for gold
  const sellWood = () => {
    // Check if the player has enough wood to sell
    if (wood > 0) {
      // Decrement the player's wood count by 1
      setWood(wood - 1);

      // Increment the player's gold count by 1
      setGold(gold + 1);
    }
  };


      // Define a function to handle the player purchasing a wood cutter
  const purchaseWoodCutter = () => {
    // Check if the player has enough gold, an available house, and more houses than wood cutters to purchase a wood cutter
    if (gold >= 10 && houses > 0 && houses > woodCutters) {
      // Decrement the player's gold count by 10
      setGold(gold - 10);

      // Increment the player's wood cutter count by 1
      setWoodCutters(woodCutters + 1);
    }
  };

  // Define a function to handle the player purchasing a house
  const purchaseHouse = () => {
    // Check if the player has enough gold to purchase a house
    if (gold >= 10) {
      // Decrement the player's gold count by 10
      setGold(gold - 10);

      // Increment the player's house count by 1
      setHouses(houses + 1);
    }
  };

  // Define a function to handle the player sacrificing a wood cutter to cthulhu
  const sacrificeWoodCutter = () => {
    // Check if the player has any wood cutters to sacrifice
    if (woodCutters > 0) {
      // Decrement the player's wood cutter count by 1
      setWoodCutters(woodCutters - 1);

      // Increment the player's soul count by 1
      setSouls(souls + 1);
    }
  };

  // Use React's useEffect hook to update the player's wood per second rate
  React.useEffect(() => {
    // Set the player's wood per second rate to their wood cutter count
    setWoodPerSecond(woodCutters);
  }, [woodCutters]);

  // Use React's useEffect hook to update the player's wood count once per second
  React.useEffect(() => {
    // Define a variable to hold the interval ID
    let interval;

    // Check if the player has a positive wood per second rate
    if (woodPerSecond > 0) {
      // Set the interval to increment the player's wood count once per second
      interval = setInterval(() => {
        setWood(wood => wood + woodPerSecond);
      }, 1000);
    }

    // Return a cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [woodPerSecond]);

  // Return the JSX to render the incremental game component
  return (
    <div>
      {souls >= 13 ? (
        <>
          <h1>Cthulhu has awoken. The world has ended. Thanks for playing!</h1>
          <button onClick={resetGame}>Restart Game</button>
        </>
      ) : (
        <>
          <h1>Incremental Game</h1>
          <p>Wood: {wood}</p>
          <p>Stone: {stone}</p>
          <p>Gold: {gold}</p>
          <p>Houses: {houses}</p>
          <p>Wood Cutters: {woodCutters}</p>
          <p>Souls: {souls}</p>
          <p>Wood per Second: {woodPerSecond}</p>
          <button onClick={gatherWood}>Gather Wood</button>
          <button onClick={gatherStone}>Gather Stone</button>
          <button onClick={sellWood}>Sell Wood</button>
          <button onClick={purchaseWoodCutter}>Purchase Wood Cutter (10 Gold)</button>
          <button onClick={purchaseHouse}>Purchase House (10 Gold)</button>
          <button onClick={sacrificeWoodCutter}>Sacrifice Wood Cutter to Cthulhu</button>
        </>
      )}
    </div>
  );
};

// Export the IncrementalGame component
export default IncrementalGame;