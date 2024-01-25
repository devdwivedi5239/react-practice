import Counter from "./hooksPracticeComponents/Counter"

function HooksPractice() {
  return (
    <>
        <Counter />
    </>
  )
}

export default HooksPractice

{/* Practice Problems:
        
            Counter App:
            Create a functional component called CounterApp.
            Use the useState hook to manage a state variable count.
            Display the current count and include buttons to increment and decrement the count.
            
            Toggle Component:
            Create a functional component called ToggleComponent.
            Use the useState hook to manage a state variable isToggled.
            Display a message saying "It's toggled" if isToggled is true and "It's not toggled" otherwise.
            Include a button to toggle the state.
            
            Input Field:
            Create a functional component called InputField.
            Use the useState hook to manage a state variable inputValue for an input field.
            Display the input field, and update the state as the user types.
            
            Color Picker:
            Create a functional component called ColorPicker.
            Use the useState hook to manage a state variable selectedColor.
            Display a dropdown (select) with different color options.
            Update the state when a color is selected.
            
            List with State:
            Create a functional component called ListWithState.
            Use the useState hook to manage a state variable items initialized with an array of strings.
            Display an unordered list (ul) with the items from the state.
            
            Shopping Cart:
            Create a functional component called ShoppingCart.
            Use the useState hook to manage a state variable cart initialized with an empty array.
            Display the items in the shopping cart and update the state when items are added or removed.
            
            Checkbox Group:
            Create a functional component called CheckboxGroup.
            Use the useState hook to manage a state variable selectedOptions for checkboxes.
            Display a group of checkboxes and update the state based on user selections.
            
            Temperature Converter:
            Create a functional component called TemperatureConverter.
            Use the useState hook to manage two state variables, celsius and fahrenheit.
            Display input fields for both Celsius and Fahrenheit and update the state as the user enters values.
            Random Number Generator:

            Create a functional component called RandomNumberGenerator.
            Use the useState hook to manage a state variable randomNumber.
            Display a button that, when clicked, generates and displays a random number.
            
            Accordion Component:
            Create a functional component called Accordion.
            Use the useState hook to manage a state variable isOpen for an accordion.
            Display a heading and content. When the heading is clicked, toggle the isOpen state. */}