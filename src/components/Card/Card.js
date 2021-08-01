import React from 'react'

function Card({item}) {
    return (
        <div>
        <h1>{item.name}</h1>
        <p>${item.price}</p>
        <p>{item.available === 0? <span style={{color:'red'}}>Out of Stock</span> : <span style={{color:'green'}}>Available</span> } </p>
            
        </div>
    )
}

export default Card
