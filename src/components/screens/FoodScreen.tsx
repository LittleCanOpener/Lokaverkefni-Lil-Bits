import React, { useState, useEffect } from 'react';
import Foods from '../food/Foods';

interface Category {
    idCategory?: string;
    strCategory: string;
    strCategoryThumb?: string;
    strCategoryDescription?: string;
}

const FoodScreen: React.FC = () => {
    const [foods, setFoods] = useState<Category[]>([]);

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
        console.log(`Selected category: ${category}`);
    };

    return (
        <div className="container mx-auto py-8">
            <Foods
                foods={foods}
                toggleCategorySelection={toggleCategorySelection}
            />
        </div>
    );
};

export default FoodScreen;