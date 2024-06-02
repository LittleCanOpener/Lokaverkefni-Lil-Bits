import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getOrderFromStorage } from '../../utils/storage';

const ReceiptScreen: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { email } = location.state || {};
    const order = getOrderFromStorage(email);

    useEffect(() => {
        if (!order.items.length) {
            navigate('/order-confirmation');
        }
    }, [order, navigate]);

    const calculateTotal = () => {
        const foodPrice = 10;
        const drinkPrice = 5;
        const foodCount = order.items.filter(item => item.type === 'food').length;
        const drinkCount = order.items.filter(item => item.type === 'drink').length;
        return (foodCount * foodPrice) + (drinkCount * drinkPrice);
    };

    return (
        <div className="container mx-auto py-8">
            <h1>Receipt</h1>
            <p>Email: {email}</p>
            <p>Order Time: {new Date(order.orderTime).toLocaleString()}</p>
            <p>Arrival Date: {new Date(order.arrivalDate).toLocaleString()}</p>
            <ul>
                {order.items.map((item, index) => (
                    <li key={index}>{item.name} - {item.type}</li>
                ))}
            </ul>
            <p>Total Price: ${calculateTotal()}</p>
        </div>
    );
};

export default ReceiptScreen;