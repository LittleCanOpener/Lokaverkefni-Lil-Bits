import React, { useState, useEffect } from 'react';
import Beverage from '../beverage/Beverage';
import { useNavigate } from 'react-router-dom';
import ScrollToTopButton from '../Other/ToTopBtn';
import { addSelectedItem, removeSelectedItem, getSelectedItems } from '../../utils/storage';

interface Drink {
    strDrink: string;
    strDrinkThumb: string;
    idDrink: string;
}

const DrinkScreen: React.FC = () => {
    const [drinks, setDrinks] = useState<Drink[]>([]);
    const [selectedDrinks, setSelectedDrinks] = useState<string[]>([]);
    const navigate = useNavigate();

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

    useEffect(() => {
        const storedDrinks = getSelectedItems().filter(item => item.type === 'drink').map(item => item.id);
        setSelectedDrinks(storedDrinks);
    }, []);

    const toggleDrinkSelection = (drink: Drink) => {
        setSelectedDrinks(prevSelectedDrinks => {
            const isSelected = prevSelectedDrinks.includes(drink.idDrink);
            if (isSelected) {
                removeSelectedItem(drink.idDrink);
                return prevSelectedDrinks.filter(item => item !== drink.idDrink);
            } else {
                addSelectedItem({ id: drink.idDrink, name: drink.strDrink, type: 'drink' });
                return [...prevSelectedDrinks, drink.idDrink];
            }
        });
    };

    const handleNext = () => {
        const selectedDrinksData = drinks.filter(drink => selectedDrinks.includes(drink.idDrink));
        navigate('/date', { state: { selectedDrinks: selectedDrinksData } });
    };

    return (
        <div className="container mx-auto py-8 bg-[#e2e299] m-7">
            <Beverage drinks={drinks} toggleDrinkSelection={toggleDrinkSelection} />
            <button onClick={handleNext} className="mt-4 px-4 py-2 bg-blue-500 text-white">Next</button>
            <ScrollToTopButton />
        </div>
    );
};

export default DrinkScreen;

