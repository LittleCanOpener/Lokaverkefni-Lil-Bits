import React, { useState, useEffect } from 'react';
import { addSelectedItem } from '../../app/db';

interface Category {
    idCategory?: string;
    strCategory: string;
    strCategoryThumb?: string;
    strCategoryDescription?: string;
}

interface FoodProps {
    foods: Category[];
    toggleCategorySelection: (category: string) => void;
}

const Foods: React.FC<FoodProps> = ({ foods, toggleCategorySelection }) => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    useEffect(() => {
        const storedCategories = localStorage.getItem('selectedFoodCategories');
        if (storedCategories) {
            setSelectedCategories(JSON.parse(storedCategories));
        }
    }, []);

    const handleCategorySelection = (category: string) => {
        setSelectedCategories(prevCategories => {
            const updatedCategories = prevCategories.includes(category)
                ? prevCategories.filter(item => item !== category)
                : [...prevCategories, category];
            localStorage.setItem('selectedFoodCategories', JSON.stringify(updatedCategories));
            toggleCategorySelection(category);
            addSelectedItem({ type: 'food', value: category });
            return updatedCategories;
        });
    };

    return (
        <div className="w-auto">
            <div className="mb-12 p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
                {foods.map((category) => (
                    <div key={category.strCategory} className="m-4">
                        {category.strCategoryThumb && (
                            <div
                                className={`relative rounded overflow-hidden cursor-pointer max-w-xs transition duration-300 ease-in-out hover:scale-110 ${selectedCategories.includes(category.strCategory) ? 'border-4 border-[#C16757]' : ''}`}
                                onClick={() => handleCategorySelection(category.strCategory)}
                            >
                                <img src={category.strCategoryThumb} alt={category.strCategory} className="w-full h-full object-cover" />
                                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full">
                                    {category.strCategory}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Foods;