import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Foods from '../food/Foods';
import ScrollToTopButton from '../Other/ToTopBtn';
import { addSelectedItem, getSelectedItems, updateSelectedItemQuantity } from '../../utils/storage';

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

    const toggleCategorySelection = (category: string, quantity: number) => {
        setSelectedCategories(prevCategories => {
            const updatedCategories = prevCategories.includes(category)
                ? prevCategories.filter(item => item !== category)
                : [...prevCategories, category];

            const categoryItem = foods.find(item => item.strCategory === category);
            if (categoryItem) {
                addSelectedItem({ id: categoryItem.strCategory, name: categoryItem.strCategory, type: 'food', quantity });
            }

            return updatedCategories;
        });
    };

    const handleQuantityChange = (category: string, quantity: number) => {
        updateSelectedItemQuantity(category, quantity);
    };

    const handleNext = () => {
        const selectedCategoriesData = foods.filter(category => category.strCategoryThumb && selectedCategories.includes(category.strCategory));
        navigate('/drink', { state: { selectedFoodCategories: selectedCategoriesData } });
    };

    return (
        <div className="container mx-auto py-8 bg-[#e2e299] m-7">
            <Foods foods={foods} toggleCategorySelection={toggleCategorySelection} selectedCategories={selectedCategories} handleQuantityChange={handleQuantityChange} />
            <button onClick={handleNext} className="px-4 py-2 bg-[#3E6053] text-white rounded hover:bg-[#C16757] md:border-0 mr-2 transition duration-200">Next</button>
            <ScrollToTopButton />
        </div>
    );
};

export default FoodScreen;