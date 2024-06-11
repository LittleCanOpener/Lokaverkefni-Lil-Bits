import React from 'react';

interface Category {
    idCategory?: string;
    strCategory: string;
    strCategoryThumb?: string;
    strCategoryDescription?: string;
}

interface FoodProps {
    foods: Category[];
    toggleCategorySelection: (category: string, quantity: number) => void;
    selectedCategories: string[];
    handleQuantityChange: (category: string, quantity: number) => void;
}

const Foods: React.FC<FoodProps> = ({ foods, toggleCategorySelection, selectedCategories, handleQuantityChange }) => {
    return (
        <div className="w-auto">
            <div className="mb-12 p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
                {foods.map((category) => (
                    <div key={category.strCategory} className="m-4">
                        {category.strCategoryThumb && (
                            <div
                                className={`relative rounded overflow-hidden cursor-pointer max-w-xs transition duration-300 ease-in-out hover:scale-110 ${selectedCategories.includes(category.strCategory) ? 'border-4 border-[#C16757]' : ''}`}
                                onClick={() => toggleCategorySelection(category.strCategory, 1)} // Default quantity 1
                            >
                                <img src={category.strCategoryThumb} alt={category.strCategory} className="w-full h-full object-cover" />
                                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full">
                                    {category.strCategory}
                                </div>
                            </div>
                        )}
                        {selectedCategories.includes(category.strCategory) && (
                            <div className="mt-2">
                                <label className="block text-sm font-bold mb-2">Quantity:</label>
                                <input
                                    type="number"
                                    defaultValue={1}
                                    onChange={(e) => handleQuantityChange(category.strCategory, parseInt(e.target.value))}
                                    className="w-20 p-2 border rounded-lg"
                                    min="1"
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Foods;