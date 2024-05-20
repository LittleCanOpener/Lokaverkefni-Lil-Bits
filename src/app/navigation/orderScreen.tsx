import React, { useState, useEffect } from 'react';
import Order from '../../components/Order';

const OrderScreen: React.FC = () => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    useEffect(() => {
        const storedOrder = localStorage.getItem('orderList');
        if (storedOrder) {
            setSelectedItems(JSON.parse(storedOrder));
        }
    }, []);

    const removeFromSelected = (item: string) => {
        setSelectedItems(prevItems => {
            const updatedItems = prevItems.filter(i => i !== item);
            localStorage.setItem('orderList', JSON.stringify(updatedItems));
            return updatedItems;
        });
    };

    return (
        <div className="container mx-auto py-8">
            <Order
                foodItems={selectedItems.filter(item => item.includes('food'))}
                drinkItems={selectedItems.filter(item => item.includes('drink'))}
                removeFromSelectedFood={removeFromSelected}
                removeFromSelectedDrinks={removeFromSelected}
            />
        </div>
    );
};

export default OrderScreen;
