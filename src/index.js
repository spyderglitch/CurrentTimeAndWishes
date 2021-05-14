//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
const React = require("react");
const ReactDOM = require("react-dom");

var today = new Date();
var time = today.getHours();

let text;
let style = {
  color: ""
};

if (time < 12) {
  text = "Good Morning";
  style.color = "red";
} else if (time < 18) {
  text = "Good Afternoon";
  style.color = "green";
} else {
  text = "Good Evening";
  style.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={style}>
    {text}
  </h1>,
  document.getElementById("root")
);
