import React, { useState, useRef, useEffect, useMemo } from 'react'

const UseMemoExample = () => {
  const [number, setNumber] = useState(1)
  const [inc, setInc] = useState(0)

  //   const sqrt = getSqrt(number)

  //   Using useMemo to store the state
  //   And not triggering the (expensive) function if the input not changing the result
  //   now even if the page renders its not gonna trgigger the (expensive) function
  //   unless the number change (useMemo dependencies)
  const sqrt = useMemo(() => getSqrt(number), [number])

  const renders = useRef(1)

  useEffect(() => {
    renders.current = renders.current + 1
  })

  const onClick = () => {
    setInc((prevState) => {
      console.log(prevState + 1)
      return prevState + 1
    })
  }

  return (
    <div>
      <input
        onChange={(e) => setNumber(e.target.value)}
        type='number'
        value={number}
        className='form-control'
      />

      <h2 className='my-3'>The square root : {sqrt}</h2>

      <button onClick={onClick} className='btn btn-primary'>
        Re Render
      </button>
      <h3>Renders : {renders.current}</h3>
    </div>
  )
}

const getSqrt = (n) => {
  for (let i = 0; i <= 10000; i++) {
    console.log(i)
  }
  return Math.sqrt(n)
}

export default UseMemoExample
