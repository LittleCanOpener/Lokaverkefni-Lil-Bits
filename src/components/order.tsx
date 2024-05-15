import React from 'react';

interface OrderProps {
    selectedCategories: string[];
    removeFromSelected: (category: string) => void;
}

const Order: React.FC<OrderProps> = ({ selectedCategories, removeFromSelected }) => {
    return (
        <div className="w-1/4 ml-4">
            <div className="sticky top-0">
                <h2 className="text-2xl font-bold mb-4">Your Order</h2>
                <ul>
                    {selectedCategories.map((category, index) => (
                        <li key={index} className="flex justify-between items-center">
                            <span>{category}</span>
                            <button onClick={() => removeFromSelected(category)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Order;