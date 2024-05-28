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
    const [selectedDrinks, setSelectedDrinks] = useState<string[]>([]);

    useEffect(() => {
        const storedDrinks = localStorage.getItem('selectedDrinks');
        if (storedDrinks) {
            setSelectedDrinks(JSON.parse(storedDrinks));
        }
    }, []);

    const handleDrinkSelection = (drink: string) => {
        setSelectedDrinks(prevDrinks => {
            const updatedDrinks = prevDrinks.includes(drink)
                ? prevDrinks.filter(item => item !== drink)
                : [...prevDrinks, drink];
            localStorage.setItem('selectedDrinks', JSON.stringify(updatedDrinks));
            toggleDrinkSelection(drink);
            addSelectedItem({ type: 'drink', value: drink });
            return updatedDrinks;
        });
    };

    return (
        <div className="w-auto">
            <div className="mb-12 p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
                {drinks.map((drink) => (
                    <div key={drink.idDrink} className="mb-8">
                        <div className="grid grid-cols-1">
                            <div className="m-4">
                                <div
                                    className={`relative rounded overflow-hidden cursor-pointer max-w-xs transition duration-300 ease-in-out hover:scale-110  ${selectedDrinks.includes(drink.strDrink) ? 'border-4 border-[#C16757]' : ''}`}
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