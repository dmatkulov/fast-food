import React from 'react';
import OrderItem from '../OrderItem/OrderItem';
import {Menu, Item} from "../../types";
import './OrderList.css';

interface Props {
    items: Item[];
    orders: Menu[];
    onRemove: (id: number) => void;
    total: number;
}

const OrderList: React.FC<Props> = ({items, orders, onRemove, total}) => {
    const activeOrders = orders.filter(order => order.count > 0);

    return (
        <>
            {activeOrders.length > 0 ? (
                <div className="order-list">
                    {activeOrders.map((order) => (
                        <OrderItem
                            key={order.id}
                            order={order}
                            items={items}
                            onOrderClick={() => onRemove(order.id)}
                        />
                    ))}
                    <div>Total price: {total}</div>
                </div>
            ) : (
                <div className="order-list">
                    <p>Order list is empty!</p>
                    <p>Please add some items</p>
                </div>
            )}
        </>
    );
};

export default OrderList;