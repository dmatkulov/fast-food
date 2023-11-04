import React from 'react';
import OrderItem from '../OrderItem/OrderItem';
import {Menu, Item} from "../../types";

interface Props {
    items: Item[];
    orders: Menu[];
    onRemove: (index: number) => void;
}

const OrderList: React.FC<Props> = ({items, orders, onRemove}) => {
    const activeOrders = orders.filter(order => order.count > 0);

    return (
        <>
            {activeOrders.length > 0 ? (
                <div>
                    {activeOrders.map((order, index) => (
                        <OrderItem
                            key={index}
                            menu={order}
                            items={items}
                            onOrderClick={() => onRemove(index)}
                        />
                    ))}
                </div>
            ) : (
                <div>
                    <p>Order list is empty!</p>
                    <p>Please add some items</p>
                </div>
            )}
        </>
    );
};

export default OrderList;