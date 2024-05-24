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
        <div className="container mx-auto py-8">
            <Food
                foods={[]}
                toggleCategorySelection={() => { }}
            />
            <Drinks
                drinks={[]}
                toggleDrinkSelection={() => { }}
            />
            <DateFetch onDateSelect={handleDateSelection} />
        </div>
    );
};

export default DateScreen;

