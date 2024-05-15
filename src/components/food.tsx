import React, { useEffect } from 'react';

interface FoodProps {
    foods: any[];
    fetchFoods: () => void;
    selectedCategories: string[];
    toggleCategorySelection: (category: string) => void;
    removeFromSelected: (category: string) => void;
    sendToAnotherFile: () => void;
}

const Food: React.FC<FoodProps> = ({ foods, fetchFoods, selectedCategories, toggleCategorySelection, removeFromSelected, sendToAnotherFile }) => {
    useEffect(() => {
        fetchFoods();
    }, [fetchFoods]);

    return (
        <div className="w-3/4">
            <h1 className="text-4xl font-bold text-center mb-8">Food Categories</h1>
            <section className="mb-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
                {foods && foods.map((category: any) => (
                    <div key={category.idCategory} className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">{category.strCategory}</h2>
                        <div className="grid grid-cols-1">
                            {category.strCategoryThumb && (
                                <div
                                    className={`relative rounded overflow-hidden cursor-pointer ${selectedCategories.includes(category.strCategory) ? 'border-4 border-blue-500' : ''
                                        }`}
                                    onClick={() => toggleCategorySelection(category.strCategory)}
                                >
                                    <img
                                        src={category.strCategoryThumb}
                                        alt={category.strCategory}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                        <p className="text-white text-lg">{category.strCategory}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </section>
            <button type='submit' className="fixed bottom-0 right-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={sendToAnotherFile}>Continue</button>
        </div>
    );
};

export default Food;