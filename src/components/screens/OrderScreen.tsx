import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import FindOrder from '../order/FindOrder';
import Order from '../order/Order';
import { BasketContext } from '../basket/BasketContext';

const OrderScreen: React.FC = () => {
    const { basket, removeFromBasket } = useContext(BasketContext)!;
    const [selectedItems, setSelectedItems] = useState(basket);
    const navigate = useNavigate();
    const location = useLocation();
    const { dish, drinks } = location.state;

    useEffect(() => {
        setSelectedItems(basket);
    }, [basket]);

    const handleNext = () => {
        const orderDetails = {
            dish,
            drinks,
            ...selectedItems
        };
        navigate('/receipt', { state: { orderDetails } });
    };

    return (
        <div className="container mx-auto py-8">
            <FindOrder />
            <Order
                foodItems={selectedItems.filter(item => item.type === 'food')}
                drinkItems={selectedItems.filter(item => item.type === 'drink')}
                removeFromSelectedFoodCategories={(id) => removeFromBasket(id)}
                removeFromSelectedDrinks={(id) => removeFromBasket(id)}
            />
            <button onClick={handleNext} className="mt-4 px-4 py-2 bg-blue-500 text-white">Next</button>
        </div>
    );
};

export default OrderScreen;