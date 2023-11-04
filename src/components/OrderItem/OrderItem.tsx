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
        <p className="order-title">{order.name}</p>
        <p className="order-count">×{order.count}</p>
        
        <p className="order-price">
          {items.reduce((acc, item) => {
            if (item.name === order.name) {
              return acc + item.price * order.count;
            }
            return acc;
          }, 0)} KGS
        </p>
        
        
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