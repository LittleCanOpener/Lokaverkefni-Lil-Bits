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
        const foodPrice = 10; // example price per food item
        const drinkPrice = 5; // example price per drink item
        const foodCount = order.items.filter(item => item.type === 'food').length;
        const drinkCount = order.items.filter(item => item.type === 'drink').length;
        return (foodCount * foodPrice) + (drinkCount * drinkPrice);
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-4">Receipt</h1>
            <p className="mb-2"><strong>Email:</strong> {email}</p>
            <p className="mb-4"><strong>Order Time:</strong> {new Date(order.orderTime).toLocaleString()}</p>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Item Name</th>
                        <th className="py-2 px-4 border-b">Type</th>
                    </tr>
                </thead>
                <tbody>
                    {order.items.map((item, index) => (
                        <tr key={index}>
                            <td className="py-2 px-4 border-b">{item.name}</td>
                            <td className="py-2 px-4 border-b">{item.type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p className="mt-4"><strong>Total Price:</strong> ${calculateTotal()}</p>
        </div>
    );
};

export default ReceiptScreen;
