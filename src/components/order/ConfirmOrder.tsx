import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BasketContext } from '../basket/BasketContext';
import { saveOrderToStorage, getSelectedItems } from '../../utils/storage';

const OrderConfirmationScreen: React.FC = () => {
    const navigate = useNavigate();
    const context = useContext(BasketContext);
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);

    if (!context) {
        return <div>Loading...</div>;
    }

    const { basket, clearBasket } = context;

    const handleEmailSubmit = () => {
        if (!validateEmail(email)) {
            setIsEmailValid(false);
            return;
        }

        const order = {
            items: getSelectedItems(), // Retrieve selected items from local storage
            orderTime: new Date().toISOString(),
            arrivalDate: localStorage.getItem('arrivalDate') || '',
        };

        saveOrderToStorage(email, order);
        clearBasket();
        navigate('/receipt', { state: { email } });
    };

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <div className="container mx-auto py-8 my-10 flex flex-col justify-center items-center h-full p-4 bg-[#e2e299]">
            <h1 className="text-2xl font-bold text-[#3E6053] mb-4">Order Confirmation</h1>
            <p className="text-[#3E6053] mb-4">Enter your email to receive the order confirmation:</p>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                    setIsEmailValid(true);
                }}
                className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-[#C16757] focus:ring focus:ring-[#C16757] focus:ring-opacity-50 mb-4"
            />
            {!isEmailValid && <p className="text-red-500 mb-4">Please enter a valid email address.</p>}
            <button
                onClick={handleEmailSubmit}
                className="px-6 py-2 bg-[#3E6053] text-white rounded-md shadow-md hover:bg-[#C16757] transition duration-200"
            >
                Submit
            </button>
        </div>
    );
};

export default OrderConfirmationScreen;