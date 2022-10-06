import React, { useState, useCallback } from 'react'

const UseCallbackExammple = () => {
  const [tasks, setTasks] = useState([])

  //   useCallback is used so the component not re render
  //   but still change the state
  //   as the setTasks is become the dependencies
  const addTasks = useCallback(() => {
    setTasks((prev) => [...prev, 'Some task'])
  }, [setTasks])

  return (
    <div>
      <Button addTasks={addTasks} />
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  )
}

// React.memo make the component memoize
// so its not re render even if the state is changed
const Button = React.memo(({ addTasks }) => {
  console.log('Button rendered')

  return (
    <button onClick={addTasks} className='btn btn-primary'>
      Add task
    </button>
  )
})

export default UseCallbackExammple
