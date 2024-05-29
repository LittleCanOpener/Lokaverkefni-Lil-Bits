import React, { useState, useEffect } from 'react';
import Beverage from '../beverage/Beverage';
import ScrollToTopButton from '../Other/ToTopBtn';

interface Drink {
    strDrink: string;
    strDrinkThumb: string;
    idDrink: string;
}

const DrinkScreen: React.FC = () => {
    const [drinks, setDrinks] = useState<Drink[]>([]);

    useEffect(() => {
        const fetchDrinks = async () => {
            try {
                const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic');
                const data = await response.json();
                setDrinks(data.drinks);
            } catch (error) {
                console.error('Error fetching drinks:', error);
            }
        };

        fetchDrinks();
    }, []);

    const toggleDrinkSelection = (drink: string) => {
        console.log(`Selected drink: ${drink}`);
    };

    return (
        <div className="container mx-auto py-8 bg-[#e2e299] m-7">
            <Beverage
                drinks={drinks}
                toggleDrinkSelection={toggleDrinkSelection}
            />
            <ScrollToTopButton />
        </div>
    );
};

export default DrinkScreen;