import React, { useEffect } from 'react';

interface DrinkProps {
    drinks: any[];
    selectedDrinks: string[];
    toggleDrinkSelection: (drink: string) => void;
    fetchDrinks: () => void;
    removeFromSelected: (drink: string) => void;
}

const Drinks: React.FC<DrinkProps> = ({ drinks, selectedDrinks, toggleDrinkSelection, fetchDrinks, removeFromSelected }) => {
    useEffect(() => {
        fetchDrinks();
    }, []);

    return (
        <div className="w-3/4">
            <h1 className="text-4xl font-bold text-center mb-8">Drink Categories</h1>
            <section className="mb-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
                {drinks && drinks.map((drink: any) => (
                    <div key={drink.idDrink} className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">{drink.strDrink}</h2>
                        <div className="grid grid-cols-1">
                            {drink.strDrinkThumb && (
                                <div
                                    className={`relative rounded overflow-hidden cursor-pointer ${selectedDrinks.includes(drink.strDrink) ? 'border-4 border-blue-500' : ''
                                        }`}
                                    onClick={() => toggleDrinkSelection(drink.strDrink)}
                                >
                                    <img
                                        src={drink.strDrinkThumb}
                                        alt={drink.strDrink}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                        <p className="text-white text-lg">{drink.strDrink}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Drinks;