import './App.css';
import React , {useState} from 'react'
import data from "./data.json"
import Cards from './components/Cards/Cards';
import Filter from './components/Filters/Filter';

function App() {
  const [items, setItems] = useState(data)
  const filter =(value) =>{
    setItems(data.filter(item=>item.category===value)
    )
  }
  return (<>
    <Filter filterfunc={filter} data={data}/>
    <Cards data={items}/>
  </>
  );
}

export default App;
