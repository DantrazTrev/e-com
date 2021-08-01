import React from 'react'

function Filter({filterfunc,data}) {
 const categories=  data.map(item => item.category)
  .filter((value, index, self) => self.indexOf(value) === index)
    return (
        <nav> 
           {categories.map((cat,idx)=>{
               return (<span onClick={()=>{filterfunc(cat)}} key={idx}>{cat}</span>)
           })}
             </nav>
    )
}

export default Filter
