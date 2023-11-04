import {useState} from 'react';
import OrderList from '../components/OrderList/OrderList';
import MenuList from '../components/MenuList/MenuList';
import {Menu, Item} from '../types';
import './App.css';

import hamburgerImg from '../assets/haburger.jpeg';
import cheeseburgerImg from '../assets/cheeseburger.jpeg';
import friesImg from '../assets/fries.jpeg';
import colaImg from '../assets/cola.jpeg';
import teaImg from '../assets/tea.jpeg';
import coffeeImg from '../assets/coffee.jpeg';


const MENU_ITEMS: Item[] = [
  {id: 1, name: 'Hamburger', price: 80, image: hamburgerImg},
  {id: 2, name: 'Cheeseburger', price: 90, image: cheeseburgerImg},
  {id: 3, name: 'Fries', price: 45, image: friesImg},
  {id: 4, name: 'Coffee', price: 70, image: coffeeImg},
  {id: 5, name: 'Tea', price: 50, image: teaImg},
  {id: 6, name: 'Cola', price: 85, image: colaImg},
];

function App() {
  const [orders, setOrders] = useState<Menu[]>([
    {id: 1, name: 'Hamburger', count: 0},
    {id: 2, name: 'Cheeseburger', count: 0},
    {id: 3, name: 'Fries', count: 0},
    {id: 4, name: 'Coffee', count: 0},
    {id: 5, name: 'Tea', count: 0},
    {id: 6, name: 'Cola', count: 0},
  ]);
  const addToOrderList = (orderID: number) => {
    setOrders((prevState) => {
      return prevState.map((food) => {
        if (food.id === orderID) {
          return {...food, count: food.count + 1};
        }
        return food;
      });
    });
  };
  
  const onRemoFromOrderList = (orderID: number) => {
    setOrders((prevState) => {
      return prevState.map((food) => {
        if (food.id === orderID && food.count > 0) {
          return {...food, count: food.count - 1};
        }
        return food;
      });
    });
  };
  
  const totalPrice = MENU_ITEMS.reduce((total, item) => {
    const ordersCount = orders.filter((order) => order.name === item.name);
    const count = ordersCount.length > 0 ? ordersCount[0].count : 0;
    return total + (count * item.price);
  }, 0);
  
  return (
    <div className="App">
      <div className="col-1">
        <h2 className="title">Order Details:</h2>
        <OrderList
          orders={orders}
          items={MENU_ITEMS}
          onRemove={(id) => onRemoFromOrderList(id)}
          total={totalPrice}
        />
      </div>
      <div className="col-2">
        <h2 className="title">Add items:</h2>
        <MenuList
          items={MENU_ITEMS}
          onAdd={(id) => addToOrderList(id)}
        />
      </div>
    </div>
  );
}

export default App;
