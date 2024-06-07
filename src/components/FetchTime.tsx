import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes } from "date-fns";

interface DateFetchProps {
    onDateSelect: (date: Date) => void;
}

const DateFetch: React.FC<DateFetchProps> = ({ onDateSelect }) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(
        setHours(setMinutes(new Date(), 30), 16)
    );

    const handleDateChange = (date: Date | null) => {
        if (date) {
            setSelectedDate(date);
        }
    };

    const handleContinue = () => {
        if (selectedDate) {
            onDateSelect(selectedDate);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center h-full p-4 bg-[#e2e299] rounded-lg shadow-lg">
            <label htmlFor="arrival-date" className="mb-2 text-lg font-semibold text-[#3E6053]">
                Select your arrival date and time:
            </label>
            <DatePicker
                id="arrival-date"
                selected={selectedDate}
                onChange={handleDateChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={30}
                timeCaption="Time"
                excludeTimes={[
                    setHours(setMinutes(new Date(), 0), 17),
                    setHours(setMinutes(new Date(), 30), 18),
                    setHours(setMinutes(new Date(), 30), 19),
                    setHours(setMinutes(new Date(), 30), 17)
                ]}
                dateFormat="MMMM d, yyyy h:mm aa"
                className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-[#C16757] focus:ring focus:ring-[#C16757] focus:ring-opacity-50"
                calendarClassName="rounded-lg shadow-lg"
                dayClassName={() => "hover:bg-blue-200"}
                popperClassName="shadow-lg"
            />
            <button
                onClick={handleContinue}
                className="mt-4 px-4 py-2 bg-[#3E6053] text-white rounded-md shadow-md hover:bg-[#C16757] transition duration-200"
            >
                Continue
            </button>
        </div>
    );
};

export default DateFetch;

