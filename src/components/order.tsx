import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface OrderProps {
    foodItems: string[];
    drinkItems: string[];
    removeFromSelectedFood: (category: string) => void;
    removeFromSelectedDrinks: (drink: string) => void;
}

const Order: React.FC<OrderProps> = ({ foodItems, drinkItems, removeFromSelectedFood, removeFromSelectedDrinks }) => {
    const history = useNavigate();
    const [currentPage, setCurrentPage] = useState(0);
    const [orderList, setOrderList] = useState<string[]>([]);

    useEffect(() => {
        const storedOrder = localStorage.getItem('orderList');
        if (storedOrder) {
            setOrderList(JSON.parse(storedOrder));
        }
    }, []);

    const removeFromBasket = (itemToRemove: string) => {
        const updatedFoodItems = foodItems.filter(category => category !== itemToRemove);
        const updatedDrinkItems = drinkItems.filter(drink => drink !== itemToRemove);

        removeFromSelectedFood(itemToRemove);
        removeFromSelectedDrinks(itemToRemove);

        const updatedOrder = orderList.filter(item => item !== itemToRemove);

        localStorage.setItem('orderList', JSON.stringify(updatedOrder));

        setOrderList(updatedOrder);
    };

    const removeFromOrderList = (itemToRemove: string) => {
        const updatedOrder = orderList.filter(item => item !== itemToRemove);

        localStorage.setItem('orderList', JSON.stringify(updatedOrder));

        setOrderList(updatedOrder);
    };

    const handleContinue = () => {
        const storedOrder = localStorage.getItem('orderList');
        const existingOrder = storedOrder ? JSON.parse(storedOrder) : [];
        const updatedOrder = existingOrder.concat(foodItems, drinkItems);

        localStorage.setItem('orderList', JSON.stringify(updatedOrder));

        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
            history(pages[currentPage + 1]);
        } else {
            console.log('All steps completed. Submitting...');
        }
    };

    const pages = ['/food', '/drink', '/date'];

    return (
        <div className="flex flex-col items-center m-8 p-4">
            <h2 className="mb-4">Basket:</h2>
            <ul className="list-disc list-inside">
                {foodItems.map((category, index) => (
                    <li key={index} className="mb-2">
                        {category}
                        <button
                            className="ml-2 px-3 py-1 bg-red-500 text-white rounded-md"
                            onClick={() => removeFromBasket(category)}
                        >
                            Remove
                        </button>
                    </li>
                ))}
                {drinkItems.map((drink, index) => (
                    <li key={index} className="mb-2">
                        {drink}
                        <button
                            className="ml-2 px-3 py-1 bg-red-500 text-white rounded-md"
                            onClick={() => removeFromBasket(drink)}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            <h2 className="mb-4 mt-8">Order List:</h2>
            <ul className="list-disc list-inside">
                {orderList.map((item, index) => (
                    <li key={index} className="mb-2">
                        {item}
                        <button
                            className="ml-2 px-3 py-1 bg-red-500 text-white rounded-md"
                            onClick={() => removeFromOrderList(item)}
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
