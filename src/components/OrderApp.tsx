import React, { useState, useEffect } from 'react';
import Food from './food/food';
import Drinks from './drinks/drink';
import Order from './Order';

const OrderApp: React.FC = () => {
    const [foods, setFoods] = useState<any[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const [drinks, setDrinks] = useState<any[]>([]);
    const [selectedDrinks, setSelectedDrinks] = useState<string[]>([]);

    useEffect(() => {
        fetchFoods();
        fetchDrinks();
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

    const fetchDrinks = async () => {
        try {
            const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic');
            const data = await response.json();
            setDrinks(data.drinks);
        } catch (error) {
            console.error('Error fetching drinks:', error);
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

    const toggleDrinkSelection = (drink: string) => {
        const isSelected = selectedDrinks.includes(drink);
        if (isSelected) {
            setSelectedDrinks(selectedDrinks.filter(item => item !== drink));
        } else {
            setSelectedDrinks([...selectedDrinks, drink]);
        }
    };

    const removeFromSelected = (category: string) => {
        setSelectedCategories(selectedCategories.filter(item => item !== category));
    };

    const removeFromSelectedDrinks = (drink: string) => {
        setSelectedDrinks(selectedDrinks.filter(item => item !== drink));
    };

    return (
        <div className="container mx-auto py-8 flex">
            <Food
                foods={foods}
                selectedCategories={selectedCategories}
                toggleCategorySelection={toggleCategorySelection}
                removeFromSelected={removeFromSelected}
            />
            <Drinks
                drinks={drinks}
                selectedDrinks={selectedDrinks}
                toggleDrinkSelection={toggleDrinkSelection}
                fetchDrinks={fetchDrinks}
                removeFromSelected={removeFromSelectedDrinks}
            />
            <Order items={selectedCategories} removeFromSelected={removeFromSelected} />
            <Order items={selectedDrinks} removeFromSelected={removeFromSelectedDrinks} />
        </div>
    );
};

export default OrderApp;