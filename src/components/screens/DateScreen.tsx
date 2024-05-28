import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BasketContext from '../basket/BasketContext';
import DateFetch from '../FetchTime';
import Food from '../food/Foods';
import Drinks from '../beverage/Beverage';
import { addSelectedItem } from '../../app/db';

const DateScreen: React.FC = () => {
    const { basket } = useContext(BasketContext)!;
    const navigate = useNavigate();
    const [arrivalDate, setArrivalDate] = useState<Date | null>(null);

    const handleDateSelection = (date: Date) => {
        setArrivalDate(date);
        addSelectedItem({ type: 'date', value: date });
        navigate('/summary');
    };

    return (
        <div className="container mx-auto py-8 px-4">
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-[#e2e299] p-6 rounded-lg shadow-md">
                    <Food
                        foods={[]}
                        toggleCategorySelection={() => { }}
                    />
                </div>
                <div className="bg-[#e2e299] p-6 rounded-lg shadow-md">
                    <Drinks
                        drinks={[]}
                        toggleDrinkSelection={() => { }}
                    />
                </div>
                <div className="bg-[#e2e299] p-6 rounded-lg shadow-md">
                    <DateFetch onDateSelect={handleDateSelection} />
                </div>
            </div>
        </div>
    );
};

export default DateScreen;
