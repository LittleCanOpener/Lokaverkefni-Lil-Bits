import React, { useEffect } from 'react';

interface DrinksProps {
    drinks: any[];
    fetchDrinks: () => void;
    selectedDrinks: string[];
    toggleDrinkSelection: (drink: string) => void;
    removeFromSelected: (drink: string) => void;
    sendToAnotherFile: () => void;
}

const Drinks: React.FC<DrinksProps> = ({ drinks, fetchDrinks, selectedDrinks, toggleDrinkSelection, removeFromSelected, sendToAnotherFile }) => {
    useEffect(() => {
        fetchDrinks();
    }, [fetchDrinks]);

    return (
        <div className="w-3/4">
            <h1 className="text-4xl font-bold text-center mb-8">Cocktails</h1>
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Alcoholic Drinks</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {drinks && drinks.map((drink: any) => (
                        <div key={drink.idDrink} className="relative rounded overflow-hidden">
                            <img
                                src={drink.strDrinkThumb}
                                alt={drink.strDrink}
                                className="w-full h-full object-cover"
                            />
                            <div
                                className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity ${selectedDrinks.includes(drink.strDrink) ? 'border-4 border-blue-500' : ''
                                    }`}
                                onClick={() => toggleDrinkSelection(drink.strDrink)}
                            >
                                <p className="text-white text-lg">{drink.strDrink}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <button className="fixed bottom-0 right-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={sendToAnotherFile}>Continue</button>
        </div>
    );
};

export default Drinks;