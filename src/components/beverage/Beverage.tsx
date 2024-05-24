import React, { useState, useEffect } from 'react';
import { addSelectedItem } from '../../app/db';

interface Drink {
    strDrink: string;
    strDrinkThumb: string;
    idDrink: string;
}

interface DrinkProps {
    drinks: Drink[];
    toggleDrinkSelection: (drink: string) => void;
}

const Beverage: React.FC<DrinkProps> = ({ drinks, toggleDrinkSelection }) => {
    // State for storing selected drinks
    const [selectedDrinks, setSelectedDrinks] = useState<string[]>([]);

    // useEffect to restore selected drinks from localStorage
    useEffect(() => {
        const storedDrinks = localStorage.getItem('selectedDrinks');
        if (storedDrinks) {
            setSelectedDrinks(JSON.parse(storedDrinks));
        }
    }, []);

    // Function to toggle selection of a drink
    const handleDrinkSelection = (drink: string) => {
        setSelectedDrinks(prevDrinks => {
            const updatedDrinks = prevDrinks.includes(drink)
                ? prevDrinks.filter(item => item !== drink)
                : [...prevDrinks, drink];
            localStorage.setItem('selectedDrinks', JSON.stringify(updatedDrinks));
            toggleDrinkSelection(drink);
            return updatedDrinks;
        });
    };

    return (
        <div className="w-3/4">
            <div className="mb-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
                {drinks.map((drink) => (
                    <div key={drink.idDrink} className="mb-8">
                        <div className="grid grid-cols-1">
                            <div className="m-4">
                                <div
                                    className={`relative rounded overflow-hidden cursor-pointer ${selectedDrinks.includes(drink.strDrink) ? 'border-4 border-blue-500' : ''}`}

                                    onClick={() => handleDrinkSelection(drink.strDrink)}
                                >
                                    <img src={drink.strDrinkThumb} alt={drink.strDrink} className="w-full h-full object-cover" />
                                    <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full">
                                        {drink.strDrink}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Beverage;
