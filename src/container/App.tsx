import {useState} from 'react';
import OrderList from "../components/OrderList/OrderList";
import MenuList from '../components/MenuList/MenuList';
import {Menu, Item} from '../types';
import './App.css';

import hamburgerImg from '../assets/haburger.jpeg';
import cheeseburgerImg from '../assets/cheeseburger.jpeg';
import friesImg from '../assets/fries.jpeg';
import colaImg from '../assets/cola.jpeg';
import teaImg from '../assets/tea.jpeg';
import coffeeImg from '../assets/coffee.jpeg';


const MENU_LIST: Item[] = [
  {name: 'Hamburger', price: 80, image: hamburgerImg},
  {name: 'Cheeseburger', price: 90, image: cheeseburgerImg},
  {name: 'Fries', price: 45, image: friesImg},
  {name: 'Coffee', price: 70, image: coffeeImg},
  {name: 'Tea', price: 50, image: teaImg},
  {name: 'Cola', price: 85, image: colaImg},
];

function App() {
  const [orders, setOrders] = useState<Menu[]>([
    {name: 'Hamburger', count: 0},
    {name: 'Cheeseburger', count: 0},
    {name: 'Fries', count: 0},
    {name: 'Coffee', count: 0},
    {name: 'Tea', count: 0},
    {name: 'Cola', count: 0},
  ]);
  const addToOrderList = (index: number) => {
    setOrders((prevState) => {
      return prevState.map((food, i) => {
        if (index === i) {
          return {...food, count: food.count + 1};
        }
        return food;
      });
    });
  };

  const onRemoFromOrderList = (index: number) => {
    console.log(index);
  };

  return (
    <div>
      <div className="col">
       <OrderList orders={orders} items={MENU_LIST} onRemove={(index) => onRemoFromOrderList(index)}/>
      </div>
      <div className="col">
        <MenuList menu={MENU_LIST} onAdd={(index) => addToOrderList(index)}/>
      </div>
    </div>
  );
}

export default App;
