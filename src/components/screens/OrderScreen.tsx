import React, { useContext, useEffect, useState } from 'react';
import BasketContext from '../basket/BasketContext';
import FindOrder from '../order/FindOrder';
import Order from '../order/Order';

const OrderScreen: React.FC = () => {
    const { basket, removeFromBasket } = useContext(BasketContext)!;
    const [selectedItems, setSelectedItems] = useState(basket);

    useEffect(() => {
        setSelectedItems(basket);
    }, [basket]);

    return (
        <div className="container mx-auto py-8">
            <FindOrder />
            <Order
                foodItems={selectedItems.filter(item => item.type === 'food')}
                drinkItems={selectedItems.filter(item => item.type === 'drink')}
                removeFromSelectedFood={(id) => removeFromBasket(id)}
                removeFromSelectedDrinks={(id) => removeFromBasket(id)}
            />
        </div>
    );
};

export default OrderScreen;