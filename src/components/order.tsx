import React from 'react';

interface OrderProps {
    items: string[];
    removeFromSelected: (item: string) => void;
}

const Order: React.FC<OrderProps> = ({ items, removeFromSelected }) => {
    return (
        <div className="order-container">
            <h2>Selected Items:</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => removeFromSelected(item)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Order;