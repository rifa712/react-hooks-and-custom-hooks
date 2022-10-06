import React, { useRef } from 'react'

// useRef Example
// Create DOM Reference

const UseRefExample1 = () => {
  const inputRef = useRef()
  const paraRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(inputRef.current.value)
    // inputRef.current.value = 'Hello'
    // inputRef.current.style.background = 'red'
    paraRef.current.innerText = 'Goodbye'
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor=''>Name</label>
        <input
          ref={inputRef}
          type='text'
          name=''
          className='form-control mb-2'
        />
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
        <p onClick={() => inputRef.current.focus()} ref={paraRef}>
          Hello
        </p>
      </form>
    </div>
  )
}

export default UseRefExample1
