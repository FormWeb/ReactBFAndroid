import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome/Welcome';
import ProductList from './components/product-list/ProductList';
import { nanoid } from "nanoid"

function App() {

  const products = [
    {id: nanoid(), name:"Banane"},
    {id: nanoid(), name:"Pomme"},
    {id: nanoid(), name:"Poire"}
  ]

  return (
    <div className="App">
      <ProductList products={products}></ProductList>
    </div>
  );
}

export default App;
