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
        />
    );
};

export default DateFetch;