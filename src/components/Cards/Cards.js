import React from 'react'
import Card from '../Card/Card'

function Cards({data}) {
    return (
        <>
        {data.map((item)=>{
            return(<Card key={item.id} item={item}/>)
        })
            
        }
        </>
    )
}

export default Cards
