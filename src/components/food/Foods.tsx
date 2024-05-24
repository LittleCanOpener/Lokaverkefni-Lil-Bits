import React, { useState, useEffect } from 'react';
import { addSelectedItem } from '../../app/db';

interface Category {
    strCategory: string;
    strCategoryThumb?: string;
}

interface FoodProps {
    foods: Category[];
    toggleCategorySelection: (category: string) => void;
}

const Foods: React.FC<FoodProps> = ({ foods, toggleCategorySelection }) => {
    // State for storing selected food categories
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    // useEffect to restore selected categories from localStorage
    useEffect(() => {
        const storedCategories = localStorage.getItem('selectedFoodCategories');
        if (storedCategories) {
            setSelectedCategories(JSON.parse(storedCategories));
        }
    }, []);

    // Function to toggle selection of a category
    const handleCategorySelection = (category: string) => {
        setSelectedCategories(prevCategories => {
            const updatedCategories = prevCategories.includes(category)
                ? prevCategories.filter(item => item !== category)
                : [...prevCategories, category];
            localStorage.setItem('selectedFoodCategories', JSON.stringify(updatedCategories));
            toggleCategorySelection(category);
            return updatedCategories;
        });
    };

    return (
        <div className="w-3/4">
            <div className="mb-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
                {foods.map((category) => (
                    <div key={category.strCategory} className="m-4">
                        {category.strCategoryThumb && (
                            <div
                                className={`relative rounded overflow-hidden cursor-pointer ${selectedCategories.includes(category.strCategory) ? 'border-4 border-blue-500' : ''}`}
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
