import React,{useState} from 'react'
import {
    Card,
    CardTitle,
    CardImg,
    CardBody,
    Button,
    Badge,
    CardFooter
  } from "shards-react";
function ItemCard({item,Add}) {

     const [cla, setcla] = useState(0)

     const AddtoCart=()=>{
         if(cla+1<item.quantity)
         {setcla(prevcla=>prevcla+1)
         Add(item)}
     }
    return (
        <div>
       <Card style={{ maxWidth: "300px" }}>
      <CardImg src={item.img} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
         <p>{item.vendor}</p>
        <span style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>{item.available ===0? <Badge pill theme="danger">Out of Stock</Badge>: <Badge pill theme="success">Available</Badge> } <p style={{fontWeight:"690"}}>${item.price}</p></span>
      </CardBody>
      <CardFooter><span style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}><Button disabled={item.available===0} onClick={AddtoCart}>Add to Cart</Button> <p style={{textAlign:'center'}}>{cla}</p></span></CardFooter>
    </Card>  
        </div>
    )
}

export default ItemCard
