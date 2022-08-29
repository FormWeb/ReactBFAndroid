import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome/Welcome';
import ProductList from './components/product-list/ProductList';
import { nanoid } from "nanoid"
import EventComponent from './components/event-component/EventComponent';
import CounterComm from './components/counter-comm/CounterComm';
import CycleVie from './components/cycle-vie/CycleVie';
import SearchBar from './components/demo-ajax/search-bar/SearchBar';
import { useState } from 'react';
import Result from './components/demo-ajax/result/Result';

function App() {

  const [name, setName] = useState("")

  const products = [
    {id: nanoid(), name:"Banane"},
    {id: nanoid(), name:"Pomme"},
    {id: nanoid(), name:"Poire"}
  ]

  const searchData = (name) => {
    setName(name)
  }

  return (
    <div className="App">
      <SearchBar onSearch={searchData}></SearchBar>
      {
        name.length > 0 && <Result name={name}></Result>
      }
    </div>
  );
}

export default App;
