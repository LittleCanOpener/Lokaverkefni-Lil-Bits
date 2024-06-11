import React from 'react';
import { getSelectedItems } from '../../utils/storage';

interface Drink {
    strDrink: string;
    strDrinkThumb: string;
    idDrink: string;
}

interface DrinkProps {
    drinks: Drink[];
    toggleDrinkSelection: (drink: Drink, quantity: number) => void;
    handleQuantityChange: (drinkId: string, quantity: number) => void;
}

const Beverage: React.FC<DrinkProps> = ({ drinks, toggleDrinkSelection, handleQuantityChange }) => {
    return (
        <div className="w-auto">
            <div className="mb-12 p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
                {drinks.map((drink) => (
                    <div key={drink.idDrink} className="mb-8">
                        <div className="grid grid-cols-1">
                            <div className="m-4">
                                <div
                                    className={`relative rounded overflow-hidden cursor-pointer max-w-xs transition duration-200 ease-in-out hover:scale-110  ${getSelectedItems().find(item => item.id === drink.idDrink) ? 'border-4 border-[#C16757]' : ''}`}
                                    onClick={() => toggleDrinkSelection(drink, 1)} // Default quantity 1
                                >
                                    <img src={drink.strDrinkThumb} alt={drink.strDrink} className="w-full h-full object-cover" />
                                    <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full">
                                        {drink.strDrink}
                                    </div>
                                </div>
                            </div>
                            {getSelectedItems().find(item => item.id === drink.idDrink) && (
                                <div className="mt-2">
                                    <label className="block text-sm font-bold mb-2">Quantity:</label>
                                    <input
                                        type="number"
                                        defaultValue={1}
                                        onChange={(e) => handleQuantityChange(drink.idDrink, parseInt(e.target.value))}
                                        className="w-20 p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C16757]"
                                        min="1"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Beverage;