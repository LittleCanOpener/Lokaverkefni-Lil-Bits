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
            <div className="mt-4 flex flex-col justify-center items-center h-full p-6 bg-[#e2e299] rounded-lg shadow-lg">
                <label className="block text-lg font-bold mb-2">Number of Attendees:</label>
                <input
                    type="number"
                    value={attendees}
                    onChange={(e) => setAttendees(parseInt(e.target.value))}
                    className="w-20 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C16757]"
                    min="1"
                />
            </div>
        </div>
    );
};

export default DateScreen;
