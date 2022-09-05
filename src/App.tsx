import React from "react";
import "./App.css";
import { Howl } from "howler";
import ReactConfetti from "react-confetti";

var fart = new Howl({
  src: ["/fart.mp3"],
});

var burp = new Howl({
  src: ["/burp.mp3"],
});

function Questions() {
  const [count, setCount] = React.useState(0);
  const buttonStyles = {
    background: "#e8373a",
    color: "#fff",
    border: "0",
    padding: "22px 40px",
    fontSize: "30px",
    height: 240,
    width: 240,
    borderRadius: "50%",
    letterSpacing: "2px",
  };
  return (
    <>
      {count === 0 ? <h1>Is your name Hudson?</h1> : null}
      {count === 1 ? <h1>Are you 4 years old?</h1> : null}
      {count === 2 ? (
        <>
          <h1>Betcha can't push this button</h1>
          <button
            style={{ ...buttonStyles, width: undefined, height: undefined }}
            className="animated-button"
            onClick={() => setCount((c) => c + 1)}
          >
            🤪
          </button>
        </>
      ) : null}
      {count >= 3 && count < 13 ? (
        <>
          <h1>Oh dang, you're good</h1>
          <h1>I bet you can't push this button 10 times</h1>
          <button style={buttonStyles} onClick={() => setCount((c) => c + 1)}>
            🤨
            {count - 3}
          </button>
        </>
      ) : null}
      {count >= 13 ? (
        <>
          {count === 13 ? (
            <h1>
              Oh dang, you're <em>really</em> good
            </h1>
          ) : null}
          <button
            style={buttonStyles}
            onClick={() => {
              setCount((c) => c + 1);
              count % 2 === 0 ? fart.play() : burp.play();
            }}
          >
            🤯
          </button>
          {count === 14 ? (
            <h1>uh oh. Please don't hit the button anymore</h1>
          ) : null}
          {count === 18 ? <h1>💩</h1> : null}
          {count >= 22 ? (
            <>
              <h1>Happy Birthday Hudson!</h1>
              <h2>❤️ Lucy, Ziggy, Aunt Kait, Uncle Matt</h2>
            </>
          ) : null}
          {count >= 25 ? <h3>and cat</h3> : null}
        </>
      ) : null}
      {count < 2 ? (
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <button onClick={() => setCount((c) => c + 1)}>Yes</button>
          <button
            onClick={() => window.location.replace("https://www.irs.gov/")}
          >
            No
          </button>
        </div>
      ) : null}
      {count >= 22 ? (
        <ReactConfetti width={window.innerWidth} height={window.innerHeight} />
      ) : null}
    </>
  );
}
function App() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: 600,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Questions />
      </div>
    </div>
  );
}

export default App;
