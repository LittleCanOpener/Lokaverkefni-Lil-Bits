import React, { useState } from 'react';
import Food from './food';
import Order from './order';


const FoodOrderApp: React.FC = () => {
    const [foods, setFoods] = useState<any[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

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
        const isSelected = selectedCategories.includes(category);
        if (isSelected) {
            setSelectedCategories(selectedCategories.filter(item => item !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const removeFromSelected = (category: string) => {
        setSelectedCategories(selectedCategories.filter(item => item !== category));
    };

    const sendToAnotherFile = () => {
        // Implement sending selected categories to another file
        console.log("Selected categories:", selectedCategories);
    };

    return (
        <div className="container mx-auto py-8 flex">
            <Food
                foods={foods}
                fetchFoods={fetchFoods}
                selectedCategories={selectedCategories}
                toggleCategorySelection={toggleCategorySelection}
                removeFromSelected={removeFromSelected}
                sendToAnotherFile={sendToAnotherFile}
            />
            <Order
                selectedCategories={selectedCategories}
                removeFromSelected={removeFromSelected}
            />
        </div>
    );
};

export default FoodOrderApp;