import React, { useState, useEffect } from 'react';
import Drinks from './drink';
import Order from '../Order';

const DrinkOrderApp: React.FC = () => {
    const [drinks, setDrinks] = useState<any[]>([]);
    const [selectedDrinks, setSelectedDrinks] = useState<string[]>([]);

    useEffect(() => {
        fetchDrinks();
        const storedOrder = localStorage.getItem('orderList');
        if (storedOrder) {
            setSelectedDrinks(JSON.parse(storedOrder));
        }
    }, []);

    const fetchDrinks = async () => {
        try {
            const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic');
            const data = await response.json();
            setDrinks(data.drinks);
        } catch (error) {
            console.error('Error fetching drinks:', error);
        }
    };

    const toggleDrinkSelection = (drink: string) => {
        setSelectedDrinks(prevDrinks => {
            const updatedDrinks = prevDrinks.includes(drink)
                ? prevDrinks.filter(item => item !== drink)
                : [...prevDrinks, drink];
            localStorage.setItem('orderList', JSON.stringify(updatedDrinks));
            return updatedDrinks;
        });
    };

    const removeFromSelected = (drink: string) => {
        setSelectedDrinks(prevDrinks => {
            const updatedDrinks = prevDrinks.filter(item => item !== drink);
            localStorage.setItem('orderList', JSON.stringify(updatedDrinks));
            return updatedDrinks;
        });
    };

    return (
        <div className="container mx-auto py-8 flex">
            <Drinks
                drinks={drinks}
                selectedDrinks={selectedDrinks}
                toggleDrinkSelection={toggleDrinkSelection}
                fetchDrinks={fetchDrinks}
                removeFromSelected={removeFromSelected}
            />
            <Order
                foodItems={[]}
                drinkItems={selectedDrinks}
                removeFromSelectedFood={() => { }}
                removeFromSelectedDrinks={removeFromSelected}
            />
        </div>
    );
};

export default DrinkOrderApp;