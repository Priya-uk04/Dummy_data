import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='card' style={{ overflow: "hidden"}}>
        <img src='https://sphero.com/cdn/shop/articles/coding_languages_1024x.png?v=1619126283' alt='no image' width="333" 
        style= {{border: "2px solid black",}}/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default Card