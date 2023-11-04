import React from 'react';
import {Item} from '../../types';
import MenuItem from '../MenuItem/MenuItem';

interface Props {
  menu: Item[];
  onAdd: (index: number) => void;
}
const MenuList: React.FC<Props> = ({menu, onAdd}) => {
  return (
    <div>
      {menu.map((food, index) => (
        <MenuItem item={food} key={index} onItemClick={() => onAdd(index)}/>
      ))}
    </div>
  );
};

export default MenuList;