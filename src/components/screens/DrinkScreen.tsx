import React, { useState, useEffect } from 'react';
import Beverage from '../beverage/Beverage';
import { useNavigate } from 'react-router-dom';
import ScrollToTopButton from '../Other/ToTopBtn';
import { addSelectedItem, removeSelectedItem, getSelectedItems, updateSelectedItemQuantity } from '../../utils/storage';

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

    const toggleDrinkSelection = (drink: Drink, quantity: number) => {
        setSelectedDrinks(prevSelectedDrinks => {
            const isSelected = prevSelectedDrinks.includes(drink.idDrink);
            if (isSelected) {
                removeSelectedItem(drink.idDrink);
                return prevSelectedDrinks.filter(item => item !== drink.idDrink);
            } else {
                addSelectedItem({ id: drink.idDrink, name: drink.strDrink, type: 'drink', quantity });
                return [...prevSelectedDrinks, drink.idDrink];
            }
        });
    };

    const handleQuantityChange = (drinkId: string, quantity: number) => {
        updateSelectedItemQuantity(drinkId, quantity);
    };

    const handleNext = () => {
        const selectedDrinksData = drinks.filter(drink => selectedDrinks.includes(drink.idDrink));
        navigate('/date', { state: { selectedDrinks: selectedDrinksData } });
    };

    return (
        <div className="container mx-auto py-8 bg-[#e2e299] m-7 flex flex-col items-center">
            <Beverage drinks={drinks} toggleDrinkSelection={toggleDrinkSelection} handleQuantityChange={handleQuantityChange} />
            <button onClick={handleNext} className="px-6 py-4 bg-[#3E6053] text-white rounded hover:bg-[#C16757] transition duration-200 mt-4">
                Next
            </button>
            <ScrollToTopButton />
        </div>
    );
};

export default DrinkScreen;


