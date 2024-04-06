// import logo from './logo.svg';
// import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
// useState Hook
import { useState } from "react";

function App() {

  // Like getter Setter
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "One half pound of bag of Cocoa covered almonds unsalted"
    },
    {
      id: 2,
      checked: false,
      item: "item2"
    },
    {
      id: 3,
      checked: false,
      item: "item3"
    }
  ]); // Default Value

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? {
      ...item,
      checked: !item.checked
    } : item);
    setItems(listItems);
    localStorage.setItem('shoppingList', JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('shoppingList', JSON.stringify(listItems));
  }

  return (
    <div className="App">
      <Header 
        title="Groceries" 
      />
      <Content 
        items={items} 
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer 
        length={items.length}
      />
    </div>
  );
}

export default App;
