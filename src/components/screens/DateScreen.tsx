import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DateFetch from '../FetchTime';

const DateScreen: React.FC = () => {
    const navigate = useNavigate();
    const [arrivalDate, setArrivalDate] = useState<Date | null>(null);
    const [attendees, setAttendees] = useState<number>(1);

    const handleDateSelection = (date: Date) => {
        setArrivalDate(date);
        localStorage.setItem('arrivalDate', date.toISOString());
        localStorage.setItem('attendees', attendees.toString());
        navigate('/order-confirmation');
    };

    return (
        <div className="container mx-auto py-8 flex flex-col items-center">
            <DateFetch onDateSelect={handleDateSelection} />
            <div className="mt-4">
                <label className="block text-lg font-bold mb-2">Number of Attendees:</label>
                <input
                    type="number"
                    value={attendees}
                    onChange={(e) => setAttendees(parseInt(e.target.value))}
                    className="w-20 p-2 border rounded-lg"
                    min="1"
                />
            </div>
        </div>
    );
};

export default DateScreen;
