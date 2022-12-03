import React from 'react';

// Define the incremental game component
const IncrementalGame = () => {
  // Create a state variable to store the player's wood count
  const [wood, setWood] = React.useState(0);

  // Create a state variable to store the player's wood cutter count
  const [woodCutters, setWoodCutters] = React.useState(0);

  // Create a state variable to store the player's wood per second rate
  const [woodPerSecond, setWoodPerSecond] = React.useState(0);

  // Define a function to handle the player gathering wood
  const gatherWood = () => {
    // Increment the player's wood count
    setWood(wood + 1);
  };

  // Define a function to handle the player purchasing a wood cutter
  const purchaseWoodCutter = () => {
    // Check if the player has enough wood to purchase a wood cutter
    if (wood >= 10) {
      // Decrement the player's wood count by 10
      setWood(wood - 10);

      // Increment the player's wood cutter count by 1
      setWoodCutters(woodCutters + 1);
    }
  };

  // Use React's useEffect hook to update the player's wood per second rate
  React.useEffect(() => {
    // Calculate the player's wood per second rate
    const rate = woodCutters;

    // Update the wood per second rate state variable
    setWoodPerSecond(rate);
  }, [woodCutters]);

  // Use React's useEffect hook to increase the player's wood count once per second
  React.useEffect(() => {
    // Set a timer to increase the player's wood count once per second
    const timer = setInterval(() => {
      // Increment the player's wood count by their wood per second rate
      setWood(wood + woodPerSecond);
    }, 1000);

    // Return a cleanup function to clear the timer when the component is unmounted
    return () => clearInterval(timer);
  }, [wood, woodPerSecond]);

  // Render the incremental game UI
  return (
    <div>
      <h1>Incremental Game</h1>
      <div>Wood: {wood}</div>
      <div>Wood Cutters: {woodCutters}</div>
      <div>Wood Per Second: {woodPerSecond}</div>
      <button onClick={gatherWood}>Gather Wood</button>
      <button onClick={purchaseWoodCutter}>
        Purchase Wood Cutter (10 wood)
      </button>
    </div>
  );
};

// Export the incremental game component
export default IncrementalGame;