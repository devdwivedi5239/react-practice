import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(10)

  const addCount = () => count < 20 ? setCount(count + 1) : setCount(count);

  const removeCount = () => count > 0 ? setCount(count - 1) : setCount(count);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={addCount}>+1</button>
      <button onClick={removeCount}>-1</button>
    </>
  )
}

export default App
