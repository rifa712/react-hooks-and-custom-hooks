import React, { useState } from 'react'
import Todo from './Todo'

// Dealing with memory leaks
// using the useRef as the dependency of the useEffect
// and call cleanup function when component unmounted
const UseRefExample3 = () => {
  const [showTodo, setShowTodo] = useState(true)

  return (
    <div>
      {showTodo && <Todo />}
      <button
        className='btn btn-primary'
        onClick={() => setShowTodo(!showTodo)}
      >
        Toggle Todo
      </button>
    </div>
  )
}

export default UseRefExample3
