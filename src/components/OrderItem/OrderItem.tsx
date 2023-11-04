import React from 'react';
import {Menu, Item} from '../../types';

interface Props {
  items: Item[];
  menu: Menu;
  onRemove: (index: number) => void;
}

const OrderItem: React.FC<Props> = ({items, menu, onRemove}) => {
  return (
    <>
        <li
          className="order-item">
          <span>{menu.name}</span>
          <span>x{menu.count}</span>
          <div>
            {items.reduce((acc , item) => {
              if (item.name === menu.name) {
                return acc + item.price * menu.count;
              }
              return acc;
            }, 0)} KGS
            <button onClick={() => onRemove}>Remove</button>
          </div>
        </li>
    </>
  );
};

export default OrderItem;