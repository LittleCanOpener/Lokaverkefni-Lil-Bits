import React from 'react';

interface Category {
    strCategory: string;
    strCategoryThumb?: string;
}

interface FoodProps {
    foods: Category[];
    selectedCategories: string[];
    toggleCategorySelection: (category: string) => void;
    removeFromSelected: (category: string) => void;
}

const Food: React.FC<FoodProps> = ({ foods, selectedCategories, toggleCategorySelection }) => {
    return (
        <div className="w-3/4">
            <section className="mb-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
                {foods.map((category) => (
                    <div key={category.strCategory} className="m-4">
                        {category.strCategoryThumb && (
                            <div
                                className={`relative rounded overflow-hidden cursor-pointer ${selectedCategories.includes(category.strCategory) ? 'border-4 border-blue-500' : ''
                                    }`}
                                onClick={() => toggleCategorySelection(category.strCategory)}
                            >
                                <img src={category.strCategoryThumb} alt={category.strCategory} className="w-full h-full object-cover" />
                                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full">
                                    {category.strCategory}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Food;