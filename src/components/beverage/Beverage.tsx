import React from 'react';
import { getSelectedItems } from '../../utils/storage';

interface Drink {
    strDrink: string;
    strDrinkThumb: string;
    idDrink: string;
}

interface DrinkProps {
    drinks: Drink[];
    toggleDrinkSelection: (drink: Drink) => void;
}

const Beverage: React.FC<DrinkProps> = ({ drinks, toggleDrinkSelection }) => {
    return (
        <div className="w-auto">
            <div className="mb-12 p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
                {drinks.map((drink) => (
                    <div key={drink.idDrink} className="mb-8">
                        <div className="grid grid-cols-1">
                            <div className="m-4">
                                <div
                                    className={`relative rounded overflow-hidden cursor-pointer max-w-xs transition duration-200 ease-in-out hover:scale-110  ${getSelectedItems().find(item => item.id === drink.idDrink) ? 'border-4 border-[#C16757]' : ''}`}
                                    onClick={() => toggleDrinkSelection(drink)}
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