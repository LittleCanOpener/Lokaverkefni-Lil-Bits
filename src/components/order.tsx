import React from 'react';

interface OrderProps {
    items: string[];
    removeFromSelected: (item: string) => void;
}

const Order: React.FC<OrderProps> = ({ items, removeFromSelected }) => {
    return (
        <div className="flex flex-col items-center m-8 p-4">
            <h2 className="mb-4">Selected Order:</h2>
            <ul className="list-disc list-inside">
                {items.map((item, index) => (
                    <li key={index} className="mb-2">
                        {item}
                        <button
                            className="ml-2 px-3 py-1 bg-red-500 text-white rounded-md"
                            onClick={() => removeFromSelected(item)}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Order;