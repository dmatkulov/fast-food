import React from 'react';
import {Item} from '../../types';
import MenuItem from '../MenuItem/MenuItem';
import './MenuList.css';

interface Props {
  items: Item[];
  onAdd: (id: number) => void;
}
const MenuList: React.FC<Props> = ({items, onAdd}) => {
  return (
    <div className="menu-list">
      {items.map((order) => (
        <MenuItem
          key={order.id}
          item={order}
          onItemClick={() => onAdd(order.id)}
        />
      ))}
    </div>
  );
};

export default MenuList;