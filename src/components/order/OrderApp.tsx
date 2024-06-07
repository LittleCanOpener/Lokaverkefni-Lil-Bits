import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BasketContext, BasketItem } from '../basket/BasketContext';


interface OrderProps {
    foodItems: BasketItem[];
    drinkItems: BasketItem[];
    removeFromSelectedFoodCategories: (item: string) => void;
    removeFromSelectedDrinks: (item: string) => void;
}

const pages = ['/food', '/drink', '/date'];

const Order: React.FC<OrderProps> = ({ foodItems, drinkItems, removeFromSelectedFoodCategories, removeFromSelectedDrinks }) => {
    const navigate = useNavigate();
    const basketContext = useContext(BasketContext);
    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    const basket = basketContext?.basket ?? [];

    const handleContinue = () => {
        if (currentPageIndex < pages.length - 1) {
            setCurrentPageIndex(currentPageIndex + 1);
            navigate(pages[currentPageIndex + 1]);
        }
    };

    const handleRemoveFromBasket = (id: string) => {
        basketContext?.removeFromBasket(id);
    };

    return (
        <div className="flex flex-col items-center m-8 p-4">
            <h2 className="mb-4">Basket:</h2>
            <ul className="list-disc list-inside">
                {basket.map((item: BasketItem, index: number) => (
                    <li key={index} className="mb-2">
                        {item.name} {/* Display item name */}
                        <button
                            className="ml-2 px-3 py-1 bg-red-500 text-white rounded-md"
                            onClick={() => handleRemoveFromBasket(item.id)}
                        >
                            Remove
                        </button>
                    </li>
                ))}
                {foodItems.map((item, index) => (
                    <li key={index} className="mb-2">
                        {item.name} {/* Display item name */}
                        <button
                            className="ml-2 px-3 py-1 bg-red-500 text-white rounded-md"
                            onClick={() => removeFromSelectedFoodCategories(item.id)}
                        >
                            Remove
                        </button>
                    </li>
                ))}
                {drinkItems.map((item, index) => (
                    <li key={index} className="mb-2">
                        {item.name} {/* Display item name */}
                        <button
                            className="ml-2 px-3 py-1 bg-red-500 text-white rounded-md"
                            onClick={() => removeFromSelectedDrinks(item.id)}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            <button
                className="px-4 py-2 bg-[#3E6053] text-white hover:bg-[#C16757] md:border-0 mr-2 rounded-lg font-semibold"
                onClick={handleContinue}
            >
                Continue
            </button>
        </div>
    );
};

export default Order;