import React, { useContext } from 'react';
import BasketContext from '../basket/BasketContext';


const ReceiptScreen: React.FC = () => {
    const { basket } = useContext(BasketContext)!;

    return (
        <div className="container mx-auto py-8">
            <h1>Receipt</h1>
            <ul>
                {basket.map(item => (
                    <li key={item.id}>{item.id} ({item.type})</li>
                ))}
            </ul>
        </div>
    );
};

export default ReceiptScreen;