import React from "react";
import "./App.css";
import { Howl } from "howler";
import ReactConfetti from "react-confetti";

var fart = new Howl({
  src: ["/fart.mp3"],
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
      {count === 0 ? <h1>Is your name Charlie?</h1> : null}
      {count === 1 ? <h1>Are you 7 years old?</h1> : null}
      {count === 2 ? (
        <>
          <h1>Don't push this button</h1>
          <button style={buttonStyles} onClick={() => setCount((c) => c + 1)}>
            FART
          </button>
        </>
      ) : null}
      {count === 3 ? (
        <>
          <h1>Why did you push the button?</h1>
          <button style={buttonStyles} onClick={() => setCount((c) => c + 1)}>
            FART
          </button>
        </>
      ) : null}
      {count >= 4 ? (
        <>
          <h1>Ok, we warned you</h1>
          <button
            style={buttonStyles}
            onClick={() => {
              setCount((c) => c + 1);
              fart.play();
            }}
          >
            FART
          </button>
          {count >= 7 ? (
            <>
              <h1>Happy Birthday Charlie!</h1>
              <h2>❤️ Lucy, Ziggy, Aunt Kait, Uncle Matt</h2>
            </>
          ) : null}
          {count >= 8 ? <h3>and cat</h3> : null}
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
      {count >= 7 ? (
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
