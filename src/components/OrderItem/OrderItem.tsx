import React from 'react';
import {Menu, Item} from '../../types';
import './OrderItem.css';

interface Props {
  items: Item[];
  menu: Menu;
  onOrderClick: React.MouseEventHandler;
}

const OrderItem: React.FC<Props> = ({items, menu, onOrderClick}) => {
  return (
    <>
        <div
          className="order-item">
          <p>{menu.name}</p>
          <p>×{menu.count}</p>

          {items.reduce((acc , item) => {
            if (item.name === menu.name) {
              return acc + item.price * menu.count;
            }
            return acc;
          }, 0)} KGS

          <button
              className="remove-btn"
              onClick={onOrderClick}
          >
            Remove
          </button>
        </div>
    </>
  );
};

export default OrderItem;