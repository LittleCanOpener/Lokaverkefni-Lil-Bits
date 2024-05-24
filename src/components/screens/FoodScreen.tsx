import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BasketContext from '../basket/BasketContext';
import Food from '../food/Foods';

interface Category {
    idCategory: string;
    strCategory: string;
    strCategoryThumb?: string;
    strCategoryDescription?: string;
}

const FoodScreen: React.FC = () => {
    const { addToBasket } = useContext(BasketContext)!;
    const [foods, setFoods] = useState<Category[]>([]);
    const navigate = useNavigate();

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
        addToBasket({ id: category, type: 'food' });
    };

    return (
        <div className="container mx-auto py-8">
            <Food
                foods={foods}
                toggleCategorySelection={toggleCategorySelection}
            />
            <button
                className="mt-4 bg-blue-500 text-white p-2 rounded"
                onClick={() => navigate('/drink')}
            >
                Continue
            </button>
        </div>
    );
};

export default FoodScreen;

