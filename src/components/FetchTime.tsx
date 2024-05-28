import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes } from "date-fns";

interface DateFetchProps {
    onDateSelect: (date: Date) => void;
}

const DateFetch: React.FC<DateFetchProps> = ({ onDateSelect }) => {
    const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 30), 16)
    );

    const handleDateChange = (date: Date | null) => {
        if (date) {
            setStartDate(date);
            onDateSelect(date);
        }
    };

    return (
        <DatePicker
            selected={startDate}
            onChange={(date) => handleDateChange(date)}
            showTimeSelect
            excludeTimes={[
                setHours(setMinutes(new Date(), 0), 17),
                setHours(setMinutes(new Date(), 30), 18),
                setHours(setMinutes(new Date(), 30), 19),
                setHours(setMinutes(new Date(), 30), 17)
            ]}
            dateFormat="MMMM d, yyyy h:mm aa"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
            calendarClassName="rounded-lg shadow-lg"
            dayClassName={() => "hover:bg-blue-200"}
            popperClassName="shadow-lg"
        />
    );
};

export default DateFetch;