import { useState } from "react"

const MaisMenos = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    return setCount(count + 1)
  }

  const decrement = () => {
    return setCount(count - 1)
  }

  return (
    <div>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default MaisMenos