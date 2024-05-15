import React, { useState } from 'react';
import Drinks from './drink';
import Order from './order';


const DrinkOrderApp: React.FC = () => {
    const [drinks, setDrinks] = useState<any[]>([]);
    const [selectedDrinks, setSelectedDrinks] = useState<string[]>([]);

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
        const isSelected = selectedDrinks.includes(drink);
        if (isSelected) {
            setSelectedDrinks(selectedDrinks.filter(item => item !== drink));
        } else {
            setSelectedDrinks([...selectedDrinks, drink]);
        }
    };

    const removeFromSelected = (drink: string) => {
        setSelectedDrinks(selectedDrinks.filter(item => item !== drink));
    };

    const sendToAnotherFile = () => {
        // Implement sending selected drinks to another file
        console.log("Selected drinks:", selectedDrinks);
    };

    return (
        <div className="container mx-auto py-8 flex">
            <Drinks
                drinks={drinks}
                fetchDrinks={fetchDrinks}
                selectedDrinks={selectedDrinks}
                toggleDrinkSelection={toggleDrinkSelection}
                removeFromSelected={removeFromSelected}
                sendToAnotherFile={sendToAnotherFile}
            />
            <Order
                selectedCategories={selectedDrinks}
                removeFromSelected={removeFromSelected}
            />
        </div>
    );
};

export default DrinkOrderApp;