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
        <div className="container mx-auto py-8 px-4">
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <DateFetch onDateSelect={handleDateSelection} />
            </div>
        </div>
    );
};

export default DateScreen;