import './App.css';
import React , {useState} from 'react'
import data from "./data.json"
import Cards from './components/Cards/Cards';
import Filter from './components/Filters/Filter';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"


function App() {
  const [items, setItems] = useState(data)
  const [cart,setCart]=useState([])
  const filter =(value) =>{
    setItems(data.filter(item=>item.category===value)
    )
  }
  const reset =()=>{
    setItems(data)
    setCart([])
  }

  const addToCart=(item)=>{
    const newCart =cart;
    newCart.push(item)
       setCart(newCart)
  }
  return (<>
    <Filter items={cart} reset={reset} filterfunc={filter} data={data}/>
    <Cards Add={addToCart} data={items}/>
  </>
  );
}

export default App;
