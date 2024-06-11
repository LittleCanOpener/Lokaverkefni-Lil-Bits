import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes, addDays, isBefore, isAfter } from "date-fns";

interface DateFetchProps {
    onDateSelect: (date: Date) => void;
}

const DateFetch: React.FC<DateFetchProps> = ({ onDateSelect }) => {
    const now = new Date();
    const initialDate = isBefore(now, setHours(setMinutes(now, 0), 16)) ? setHours(setMinutes(now, 0), 16) : setHours(setMinutes(addDays(now, 1), 0), 16);

    const [selectedDate, setSelectedDate] = useState<Date | null>(initialDate);

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

    const filterTime = (time: Date) => {
        const selectedHour = time.getHours();
        return selectedHour >= 16 && selectedHour < 23;
    };

    return (
        <div className="flex flex-col justify-center items-center h-full p-6 bg-[#e2e299] rounded-lg shadow-lg">
            <label htmlFor="arrival-date" className="mb-4 text-2xl font-semibold text-[#3E6053]">
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
                filterTime={filterTime}
                minDate={new Date()}
                dateFormat="MMMM d, yyyy h:mm aa"
                className="w-full max-w-sm px-6 py-4 text-lg border border-gray-300 rounded-lg shadow-sm focus:border-[#C16757] focus:ring focus:ring-[#C16757] focus:ring-opacity-50"
                calendarClassName="rounded-lg shadow-lg"
                dayClassName={() => "hover:bg-[#C16757] text-lg"}
                popperClassName="shadow-lg"
            />
            <button
                onClick={handleContinue}
                className="mt-6 px-6 py-3 bg-[#3E6053] text-white rounded-lg shadow-md hover:bg-[#C16757] transition duration-200 text-lg"
            >
                Continue
            </button>
        </div>
    );
};

export default DateFetch;
