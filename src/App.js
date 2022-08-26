import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome/Welcome';
import ProductList from './components/product-list/ProductList';
import { nanoid } from "nanoid"
import EventComponent from './components/event-component/EventComponent';
import CounterComm from './components/counter-comm/CounterComm';

function App() {

  const products = [
    {id: nanoid(), name:"Banane"},
    {id: nanoid(), name:"Pomme"},
    {id: nanoid(), name:"Poire"}
  ]

  return (
    <div className="App">

      <EventComponent></EventComponent>
      <CounterComm></CounterComm>
    </div>
  );
}

export default App;
