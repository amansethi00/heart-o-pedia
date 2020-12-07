import React, { useState } from "react";
import "./styles.css";

var heartDictionary = {
  "💔": {
    meaning: "Broken heart",
    description:
      "I am desperately unhappy! The broken red heart expresses sadness and suffering. Someone is love sick at the moment."
  },
  "💖": {
    meaning: "Sparkling heart",
    description:
      "You are simply great! A sparkling heart means someone is doting on you. Persistence will be rewarded now!"
  },
  "💚": {
    meaning: "Eco-friendly heart",
    description:
      "This emoji means love for someone crazy It means your love with that person is ever expanding and frowning. It's the color that identifies as green used as a color to add meaning to things in paintings and writing"
  },
  "💞": {
    meaning: "Revolving heart",
    description:
      "Two hearts circling around each other represent the love between two persons. Someone wants to win your heart."
  },
  "🖤": {
    meaning: "Black heart",
    description:
      "The black heart shows a dark and twisted sense of humor. It can reflect the dark side of the soul. Also used to express grief and sorrow."
  },
  "💗": {
    meaning: "Growing heart",
    description:
      "The growing heart emoji, , shows a pink or red heart surrounded by the outlines of several slightly lighter-colored hearts of increasing size, which suggests that the heart is expanding. It's used to express outpourings of emotions like love, joy, affection, pride, and even sorrow."
  },
  "💑": {
    meaning: "Couple with heart",
    description: "A man and woman in love."
  },
  "💕": {
    meaning: "Two hearts",
    description:
      "Portraying two heart symbols, with the larger one bigger and in the front, the two hearts emoji is widely used to express love, affection, pleasure, or happiness."
  }
};

var heartEmojis = Object.keys(heartDictionary);
export default function App() {
  const [output, setOutput] = useState("meaning will come here");
  // var likeCounter=0;
  const [outputDescription, setOutputDescription] = useState(
    "Description will come here"
  );
  function inputHandler(event) {
    var userInput = event.target.value;

    if (heartDictionary[userInput] !== undefined) {
      setOutput(heartDictionary[userInput].meaning);
      setOutputDescription(heartDictionary[userInput].description);
    } else {
      setOutput("Sorry,we don't have this in our database");
      setOutputDescription("Description will come here");
    }
    // setOutput(output);
  }
  function heartClickHandler(heart) {
    setOutput(heartDictionary[heart].meaning);
    setOutputDescription(heartDictionary[heart].description);
  }
  return (
    <div className="App">
      <h1>Hearts and their meaning</h1>

      <input onChange={inputHandler} />
      <h2 style={{ padding: "1rem 1rem" }}>{output}</h2>
      <h4 className="paragraph">{outputDescription} </h4>
      <h3>hearts we know</h3>
      {heartEmojis.map(function (heart) {
        return (
          <span
            onClick={() => heartClickHandler(heart)}
            key={heart}
            style={{
              cursor: "pointer",
              padding: "2rem  2rem",
              fontSize: "large"
            }}
          >
            {heart}
          </span>
        );
      })}
    </div>
  );
}
