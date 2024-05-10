import React, { useState, useEffect } from 'react';

const Foods: React.FC = () => {
    const [foods, setFoods] = useState<any[]>([]);

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

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-4xl font-bold text-center mb-8">Food Categories</h1>

            <section className="mb-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
                {foods.map((category: any) => (
                    <div key={category.idCategory} className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">{category.strCategory}</h2>
                        <div className="grid grid-cols-1">
                            {category.strCategoryThumb && (
                                <div className="relative rounded overflow-hidden">
                                    <img
                                        src={category.strCategoryThumb}
                                        alt={category.strCategory}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                        <p className="text-white text-lg">{category.strCategory}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Foods;