import React from "react";
import ReactDOM from "react-dom/client";
// import Greetings from "./components/Greetings.jsx";
import DynamicContent from "./components/DynamicContent.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* JSX Rendering:
    Create a functional component called Greetings that renders a greeting message with your name using JSX.
    Render this component in the root of your React application. */}
    {/* <Greetings /> */}

    {/* Dynamic Content:
    Create a functional component called DynamicContent that takes a prop content and displays it in a paragraph using JSX. */}
    {/* <DynamicContent prop="I dont know how this works"/> */}

    {/* Attributes and Events:
    Create a button using JSX with an onClick event that logs a message when clicked. */}
    <DynamicContent />
  </React.StrictMode>
);
