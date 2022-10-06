import React from 'react'
import useFetch from '../hooks/useFetch'
const CustomHookExample1 = () => {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    {}
  )
  if (loading) {
    return <h3>Loading...</h3>
  }

  return (
    <div>
      {data.map((item) => (
        <h3 key={item.id}>{item.title}</h3>
      ))}
    </div>
  )
}

export default CustomHookExample1
