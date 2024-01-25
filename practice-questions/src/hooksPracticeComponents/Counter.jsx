// Counter App:
//             Create a functional component called CounterApp.
//             Use the useState hook to manage a state variable count.
//             Display the current count and include buttons to increment and decrement the count.

import { useState } from "react"


function Counter() {
    let [count, setCount] = useState(0);
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  )
}

export default Counter