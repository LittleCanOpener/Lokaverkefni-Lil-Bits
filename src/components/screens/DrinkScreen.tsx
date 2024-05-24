import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import BasketContext from '../basket/BasketContext';
import Drinks from '../beverage/Beverage';

export interface Drink {
    strDrink: string;
    strDrinkThumb: string;
    idDrink: string;
}

const DrinkScreen: React.FC = () => {
    const { addToBasket } = useContext(BasketContext)!;
    const [drinks, setDrinks] = useState<Drink[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchDrinks();
    }, []);

    const fetchDrinks = async () => {
        try {
            const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'); // Example API endpoint
            const data = await response.json();
            setDrinks(data.drinks);
        } catch (error) {
            console.error('Error fetching drinks:', error);
        }
    };

    const toggleDrinkSelection = (drink: string) => {
        addToBasket({ id: drink, type: 'drink' });
    };

    return (
        <div className="container mx-auto py-8">
            <Drinks drinks={drinks} toggleDrinkSelection={toggleDrinkSelection} />
            <button
                className="mt-4 bg-blue-500 text-white p-2 rounded"
                onClick={() => navigate('/date')}
            >
                Continue
            </button>
        </div>
    );
};

export default DrinkScreen;

