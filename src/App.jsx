import { useState } from 'react'


function App() {
  const [count,setCount] = useState(0);

  return (
    <>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={()=>setCount((prevCount)=>prevCount+1)}>Increament</button>
      <button onClick={()=>setCount((prevCount)=>prevCount-1)}>Decreament</button>
    </>
  )
}

export default App
