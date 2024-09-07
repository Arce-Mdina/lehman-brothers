import React from 'react'


const Card = ({ heading, desc, classes, color, link, image }) => {

  return (
    <div className={`visit-card ${classes}`}>
      <img src={image} style={{ width: "fit", overflow: "hidden", height: "auto", top: 0, right: 0, left: 0, cursor: "pointer" }} onClick={() => window.open(`${link}`)}/>
      <h2 style={{ color }}>{heading}</h2>
      <div>{desc}</div>
    </div>
  )
}

export default Card