import {Item} from '../types';
import MenuList from '../components/MenuList/MenuList';
import './App.css';

import hamburgerImg from '../assets/haburger.jpeg';
import cheeseburgerImg from '../assets/cheeseburger.jpeg';
import friesImg from '../assets/fries.jpeg';
import colaImg from '../assets/cola.jpeg';
import teaImg from '../assets/tea.jpeg';
import coffeeImg from '../assets/coffee.jpeg';


const MENU_LIST: Item[] = [
  {name: 'Hamburger', price: 80, image: hamburgerImg},
  {name: 'Cheeseburger', price: 80, image: cheeseburgerImg},
  {name: 'Fries', price: 80, image: friesImg},
  {name: 'Cola', price: 80, image: colaImg},
  {name: 'Tea', price: 80, image: teaImg},
  {name: 'Coffee', price: 80, image: coffeeImg},
];

function App() {
  const addToOrderList = (index: number) => {
    console.log(index);
  };

  return (
    <>
      <MenuList menu={MENU_LIST} onAdd={(index) => addToOrderList(index)}/>
    </>
  );
}

export default App;
