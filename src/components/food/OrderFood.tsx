import React, { useState, useEffect } from 'react';
import Food from './food';
import Order from '../Order';

interface Category {
    strCategory: string;
    strCategoryThumb?: string;
}

const FoodOrderApp: React.FC = () => {
    const [foods, setFoods] = useState<Category[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    useEffect(() => {
        fetchFoods();
        const storedOrder = localStorage.getItem('foodOrderList');
        if (storedOrder) {
            setSelectedCategories(JSON.parse(storedOrder));
        }
    }, []);

    const fetchFoods = async () => {
        try {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
            const data = await response.json();
            setFoods(data.categories);
        } catch (error) {
            console.error('Error fetching foods:', error);
        }
    };

    const toggleCategorySelection = (category: string) => {
        setSelectedCategories(prevCategories => {
            const updatedCategories = prevCategories.includes(category)
                ? prevCategories.filter(item => item !== category)
                : [...prevCategories, category];
            localStorage.setItem('foodOrderList', JSON.stringify(updatedCategories));
            return updatedCategories;
        });
    };

    const removeFromSelected = (category: string) => {
        setSelectedCategories(prevCategories => {
            const updatedCategories = prevCategories.filter(item => item !== category);
            localStorage.setItem('foodOrderList', JSON.stringify(updatedCategories));
            return updatedCategories;
        });
    };

    return (
        <div className="container mx-auto py-8 flex">
            <Food
                foods={foods}
                selectedCategories={selectedCategories}
                toggleCategorySelection={toggleCategorySelection}
                removeFromSelected={removeFromSelected}
            />
            <Order
                foodItems={selectedCategories}
                drinkItems={[]}
                removeFromSelectedFood={removeFromSelected}
                removeFromSelectedDrinks={() => { }}
            />
        </div>
    );
};

export default FoodOrderApp;