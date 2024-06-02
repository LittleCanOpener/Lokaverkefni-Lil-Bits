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
        <div className="container mx-auto py-8">
            <h1>Order Confirmation</h1>
            <p>Enter your email to receive the order confirmation:</p>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                    setIsEmailValid(true);
                }}
            />
            {!isEmailValid && <p className="text-red-500">Please enter a valid email address.</p>}
            <button onClick={handleEmailSubmit}>Submit</button>
        </div>
    );
};

export default OrderConfirmationScreen;