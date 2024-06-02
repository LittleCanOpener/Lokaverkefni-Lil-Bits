import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Foods from '../food/Foods';
import ScrollToTopButton from '../Other/ToTopBtn';
import { addSelectedItem, getSelectedItems } from '../../utils/storage';

interface Category {
    idCategory?: string;
    strCategory: string;
    strCategoryThumb?: string;
    strCategoryDescription?: string;
}

const FoodScreen: React.FC = () => {
    const [foods, setFoods] = useState<Category[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>(getSelectedItems().map(item => item.id));
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
                const data = await response.json();
                setFoods(data.categories);
            } catch (error) {
                console.error('Error fetching foods:', error);
            }
        };

        fetchFoods();
    }, []);

    const toggleCategorySelection = (category: string) => {
        setSelectedCategories(prevCategories => {
            const updatedCategories = prevCategories.includes(category)
                ? prevCategories.filter(item => item !== category)
                : [...prevCategories, category];

            // Add or remove selected item from local storage
            const categoryItem = foods.find(item => item.strCategory === category);
            if (categoryItem) {
                addSelectedItem({ id: categoryItem.strCategory, name: categoryItem.strCategory, type: 'food' });
            }

            return updatedCategories;
        });
    };

    const handleNext = () => {
        const selectedCategoriesData = foods.filter(category => category.strCategoryThumb && selectedCategories.includes(category.strCategory));
        navigate('/drink', { state: { selectedFoodCategories: selectedCategoriesData } });
    };

    return (
        <div className="container mx-auto py-8 bg-[#e2e299] m-7">
            <Foods foods={foods} toggleCategorySelection={toggleCategorySelection} selectedCategories={selectedCategories} />
            <button onClick={handleNext} className="mt-4 px-4 py-2 bg-blue-500 text-white">Next</button>
            <ScrollToTopButton />
        </div>
    );
};

export default FoodScreen;