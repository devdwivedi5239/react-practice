// import "./App.css";
// import Greetings from "./components/Greetings.jsx";
// import DynamicContent from "./components/DynamicContent.jsx";
import ItemList from "./components/ItemList.jsx";

function App() {
  const items = ['Item 1', 'Item 2', 'Item 3'];
  return (
    <>
      {/* JSX Rendering:
      Create a functional component called Greetings that renders a greeting message with your name using JSX.
      Render this component in the root of your React application. */}
      {/* <Greetings /> */}

      {/* Dynamic Content:
      Create a functional component called DynamicContent that takes a prop content and displays it in a paragraph using JSX. */}
      {/* <DynamicContent prop="I dont know how this works"/> */}

      {/* Attributes and Events:
      Create a button using JSX with an onClick event that logs a message when clicked. */}
      {/* <DynamicContent /> */}

      {/* List Rendering:
      Create a functional component called ItemList that takes an array of items as a prop and renders an unordered list (ul) using JSX. */}
      <ItemList items={items} />
    </>
  );
}

export default App;
