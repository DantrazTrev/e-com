import React from 'react'
import { Nav, NavItem, NavLink ,Navbar,NavbarBrand,Button} from "shards-react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Filter({filterfunc,data}) {
 const categories=  data.map(item => item.category)
  .filter((value, index, self) => self.indexOf(value) === index)
    return(
        <Navbar type="light" theme="daark" expand="md" sticky="true">
        <NavbarBrand href="#">Music and Groceries</NavbarBrand>
        <Nav>
          {categories.map((cat,idx)=>{return(<NavItem> <NavLink href="#" active onClick={()=>{filterfunc(cat)}} key={idx}>
            {cat}
          </NavLink></NavItem>)})}
      </Nav>

      <Nav navbar className="ml-auto">
      <FontAwesomeIcon icon={faSearch} />
          <Button>Purchase</Button>
        </Nav>
      </Navbar>
    )  
 
}

export default Filter
