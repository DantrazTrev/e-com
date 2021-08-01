import React from 'react'
import Card from '../Card/Card'
import "./Cards.css"
function Cards({data,Add}) {
    return (
        <div className="Cards">
        {data.map((item)=>{
            return(<Card Add={Add} key={item.id} item={item}/>)
        })
            
        }
        </div>
    )
}

export default Cards
