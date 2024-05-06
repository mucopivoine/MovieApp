import React from 'react'

const Props = (props) => {
  return (
    <div>
     <img src={props.img}></img>
     <p className='text-white text-sm'>{props.text}</p>
    </div>
  )
}

export default Props