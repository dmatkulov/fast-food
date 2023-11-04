import React from 'react';
import {Item} from '../../types';
import './MenuItem.css';

interface Props {
  item: Item;
  onItemClick: React.MouseEventHandler;
}
const MenuItem: React.FC<Props> = ({item, onItemClick}) => {
  return (
    <>
      <button
        className="add-item-btn"
        onClick={onItemClick}>
        <img
          className="food-img"
          src={item.image}
          alt={item.name}/>
        <div className="food-info">
          <h4>{item.name}</h4>
          <p>Price: {item.price}</p>
        </div>
      </button>
    </>
  );
};

export default MenuItem;