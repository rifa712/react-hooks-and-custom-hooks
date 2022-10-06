import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const CustomHookExample2 = () => {
  const [task, setTask] = useLocalStorage('task', '')
  const [tasks, setTasks] = useLocalStorage('tasks', [])

  const onSubmit = (e) => {
    e.preventDefault()

    const taskObject = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    }

    setTasks([...tasks, taskObject])
  }

  return (
    <>
      <form className='w-25' onSubmit={onSubmit}>
        <div className='mb-3'>
          <label htmlFor='' className='form-label'>
            Tasks
          </label>
          <input
            type='text'
            value={task || ''}
            onChange={(e) => setTask(e.target.value)}
          />
          <button type='submit'>Submit</button>
        </div>
      </form>
      <hr />

      {tasks && tasks.map((task, index) => <h3 key={index}>{task.task}</h3>)}
    </>
  )
}

export default CustomHookExample2
