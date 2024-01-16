// import "./App.css";
// import Greetings from "./components/Greetings.jsx";
import MathOperations from "./components/MathOperations.jsx";
// import DynamicContent from "./components/DynamicContent.jsx";
// import ItemList from "./components/ItemList.jsx";
// import ShowMessage from "./components/ShowMessage";


function App() {
  // const items = ['Item 1', 'Item 2', 'Item 3'];
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
      {/* <ItemList items={items} /> */}

      {/* Conditional Rendering:
      Create a functional component called ShowMessage that takes a prop show and renders a message only if show is true.
      Styling in JSX: */}
      {/* <ShowMessage show={"h"}/> */}

      {/* Create a styled button using JSX. Apply inline styles to change its background color and font size. */}
      {/* <Greetings /> */}

      {/* Embedding Expressions:
      Create a functional component called MathOperations that uses JSX to display the result of a mathematical expression. For example, 2 + 3 = 5. */}
      <MathOperations />

      {/* JSX with Children:
      Create a functional component called ParentChild that has a parent div with two child p elements. Use JSX to render this structure. */}

      {/* JSX in Maps:
      Create a functional component called MapExample that takes an object with key-value pairs and renders them using JSX. */}

      {/* Nested JSX:
      Create a functional component called NestedExample that uses nested JSX to render a more complex structure, such as a form with input fields and a button. */}
    </>
  );
}

export default App;
