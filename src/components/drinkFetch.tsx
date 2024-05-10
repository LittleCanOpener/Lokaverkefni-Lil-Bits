import React, { useState, useEffect } from 'react';

const Drinks: React.FC = () => {
    const [drinks, setDrinks] = useState<any[]>([]);

    useEffect(() => {
        fetchDrinks();
    }, []);

    const fetchDrinks = async () => {
        try {
            const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic');
            const data = await response.json();
            setDrinks(data.drinks);
        } catch (error) {
            console.error('Error fetching drinks:', error);
        }
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-4xl font-bold text-center mb-8">Cocktails</h1>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Alcoholic Drinks</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {drinks.map((drink: any) => (
                        <div key={drink.idDrink} className="relative rounded overflow-hidden">
                            <img
                                src={drink.strDrinkThumb}
                                alt={drink.strDrink}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                <p className="text-white text-lg">{drink.strDrink}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Drinks;