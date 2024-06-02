import React from 'react';

interface OrderProps {
    foodItems: any[];
    drinkItems: any[];
    removeFromSelectedFoodCategories: (id: string) => void;
    removeFromSelectedDrinks: (id: string) => void;
}

const Order: React.FC<OrderProps> = ({ foodItems, drinkItems, removeFromSelectedFoodCategories, removeFromSelectedDrinks }) => {
    return (
        <div className="w-full">
            <h1>Order Summary</h1>
            <h2>Selected Food Items:</h2>
            <ul>
                {foodItems.map((foodItem) => (
                    <li key={foodItem.id}>
                        {foodItem.id}
                        <button onClick={() => removeFromSelectedFoodCategories(foodItem.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <h2>Selected Drink Items:</h2>
            <ul>
                {drinkItems.map((drinkItem) => (
                    <li key={drinkItem.id}>
                        {drinkItem.id}
                        <button onClick={() => removeFromSelectedDrinks(drinkItem.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Order;