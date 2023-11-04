import React from 'react';
import {MenuItem} from '../../types';

interface Props {
  item: MenuItem;
  onItemClick: React.MouseEventHandler;
}
const MenuItem: React.FC<Props> = ({item, onItemClick}) => {
  return (
    <>
      <button onClick={onItemClick}>
        <img src={item.image} alt={item.name}/>
        <div>
          <h4>{item.name}</h4>
          <p>Price: {item.price}</p>
        </div>
      </button>
    </>
  );
};

export default MenuItem;