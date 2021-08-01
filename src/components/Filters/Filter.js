import React,{useState} from 'react'
import { Nav, NavItem, NavLink ,Navbar,NavbarBrand,Button,Modal,ModalHeader,ModalBody} from "shards-react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Filter({filterfunc,data,items}) {
  const [open, setopen] = useState(false)
  const purchase=()=>{
    setopen(true)
    console.log(items)
  }
   const categories=  data.map(item => item.category)
  .filter((value, index, self) => self.indexOf(value) === index)
    return(<>
        <Navbar type="light" theme="green" expand="md" sticky="true" >
        <NavbarBrand href="#">Music and Groceries</NavbarBrand>
        <Nav >
          {categories.map((cat,idx)=>{return(<NavItem> <NavLink href="#" active onClick={()=>{filterfunc(cat)}} key={idx}>
            {cat}
          </NavLink></NavItem>)})}
      </Nav>
    
      <Nav navbar className="ml-auto">  
  
          <Button onClick={purchase}>Purchase  <FontAwesomeIcon icon={faShoppingCart} /></Button>
        </Nav>
      </Navbar>

      <Modal open={open} toggle={()=>setopen(false)}>
         {items.length===0 ?<> <ModalHeader>M & G</ModalHeader>
         <ModalBody>🤌🏾 Monsieur Please buy something</ModalBody></> :
        <> <ModalHeader>You've bought</ModalHeader>
          <ModalBody>{items.map((item,idx)=>{return(<li key={idx}>{item.name}</li>)})}</ModalBody></>}
        </Modal>

       
      </>
    )  
 
}

export default Filter
