import React, { useContext } from 'react';
import { BasketContext } from '../basket/BasketContext';


const OrderSummaryScreen: React.FC = () => {
    const { basket } = useContext(BasketContext)!;
    const arrivalTime = new Date();

    return (
        <div className="container mx-auto py-8">
            <h1>Order Summary</h1>
            <ul>
                {basket.map(item => (
                    <li key={item.id}>
                        {item.name}
                    </li>
                ))}
            </ul>
            <p>Time of Arrival: {arrivalTime.toLocaleString()}</p>
        </div>
    );
};

export default OrderSummaryScreen;