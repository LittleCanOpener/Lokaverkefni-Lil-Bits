import React, { useState, useEffect } from 'react';
import Order from './Order'
import Food from './food';

const FoodOrderApp: React.FC = () => {
    const [foods, setFoods] = useState<any[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    useEffect(() => {
        fetchFoods();
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
        setSelectedCategories(prevCategories =>
            prevCategories.includes(category)
                ? prevCategories.filter(item => item !== category)
                : [...prevCategories, category]
        );
    };

    const removeFromSelected = (category: string) => {
        setSelectedCategories(prevCategories =>
            prevCategories.filter(item => item !== category)
        );
    };

    return (
        <div className="container mx-auto py-8 flex">
            <Food
                foods={foods}
                selectedCategories={selectedCategories}
                toggleCategorySelection={toggleCategorySelection}
                removeFromSelected={removeFromSelected}
            />
            <Order items={selectedCategories} removeFromSelected={removeFromSelected} />
        </div>
    );
};

export default FoodOrderApp;