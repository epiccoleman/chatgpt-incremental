# GPT Incremental Game

I asked ChatGPT to help me build an incremental game in React. This is the result.

This required almost no intervention from me. I had to add the `react-scripts` dependency, which ChatGPT forgot to do, and also had the change the logic of this useEffect so that the player's wood per second would start at 0:

```
// Use React's useEffect hook to update the player's wood per second rate
  React.useEffect(() => {
    // Calculate the player's wood per second rate
    const rate = woodCutters;

    // Update the wood per second rate state variable
    setWoodPerSecond(rate);
  }, [woodCutters]);
```

Apart from these two changes, and the work of putting the files in the right spots and setting up Gitlab Pages for hosting, ChatGPT did all the work here.

See [chatgpt-convo.md](/chatgpt-convo.md) for the conversation between me and ChatGPT as I specified what to build.