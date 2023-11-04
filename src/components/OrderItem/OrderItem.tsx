import React from 'react';
import {Menu, Item} from '../../types';
import './OrderItem.css';

interface Props {
  items: Item[];
  order: Menu;
  onOrderClick: React.MouseEventHandler;
}

const OrderItem: React.FC<Props> = ({items, order, onOrderClick}) => {
  return (
    <>
        <div
          className="order-item">
          <p>{order.name}</p>
          <p>×{order.count}</p>

          {items.reduce((acc , item) => {
            if (item.name === order.name) {
              return acc + item.price * order.count;
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