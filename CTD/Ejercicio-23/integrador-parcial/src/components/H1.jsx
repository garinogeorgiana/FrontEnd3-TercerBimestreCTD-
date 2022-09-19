import React from 'react'

const H1 = (props) => {
  const json = props.data
  const id = props.textId
  const historia = json.filter(item => item.id === id)
    
  return (
    <h1 className='historia'>{historia[0].historia}</h1>
  )
}
export default H1; 