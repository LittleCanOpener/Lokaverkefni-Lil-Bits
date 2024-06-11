import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DateFetch from '../FetchTime';

const DateScreen: React.FC = () => {
    const navigate = useNavigate();
    const [arrivalDate, setArrivalDate] = useState<Date | null>(null);

    const handleDateSelection = (date: Date) => {
        setArrivalDate(date);
        localStorage.setItem('arrivalDate', date.toISOString());
        navigate('/order-confirmation');
    };

    return (
        <div className="container mx-auto py-8 flex justify-center items-center">
            <DateFetch onDateSelect={handleDateSelection} />
        </div>
    );
};

export default DateScreen;
