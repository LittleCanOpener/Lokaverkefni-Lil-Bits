import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface OrderProps {
    foodItems: string[];
    drinkItems: string[];
    removeFromSelectedFood: (item: string) => void;
    removeFromSelectedDrinks: (item: string) => void;
}
const pages = ['/food', '/drink', '/date'];

const Order: React.FC<OrderProps> = ({ foodItems, drinkItems, removeFromSelectedFood, removeFromSelectedDrinks }) => {
    const navigate = useNavigate();
    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    const handleContinue = () => {
        if (currentPageIndex < pages.length - 1) {
            setCurrentPageIndex(currentPageIndex + 1);
            navigate(pages[currentPageIndex + 1]);
        }
    };


    return (
        <div className="flex flex-col items-center m-8 p-4">
            <h2 className="mb-4">Basket:</h2>
            <ul className="list-disc list-inside">
                {foodItems.map((item, index) => (
                    <li key={index} className="mb-2">
                        {item}
                        <button
                            className="ml-2 px-3 py-1 bg-red-500 text-white rounded-md"
                            onClick={() => removeFromSelectedFood(item)}
                        >
                            Remove
                        </button>
                    </li>
                ))}
                {drinkItems.map((item, index) => (
                    <li key={index} className="mb-2">
                        {item}
                        <button
                            className="ml-2 px-3 py-1 bg-red-500 text-white rounded-md"
                            onClick={() => removeFromSelectedDrinks(item)}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            <button
                className="m-3 p-3 bg-blue-500 text-white rounded-lg font-semibold"
                onClick={handleContinue}
            >
                Continue
            </button>
        </div>
    );
};

export default Order;