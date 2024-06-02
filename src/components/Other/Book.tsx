import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const BookTable: React.FC = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleEmailCheck = () => {
        const order = localStorage.getItem(email);
        if (order) {
            navigate('/food', { state: { email, order: JSON.parse(order) } });
        } else {
            navigate('/food', { state: { email } });
        }
    };

    return (
        <>
            <div className='m-6 h-96 bg-[#e2e299] rounded-md shadow-md'>
                <div className='relative flex flex-col items-center justify-center text-center'>
                    <h2 className='flex flex-col text-2xl pt-6 pb-44'>Find your Order here.</h2>
                    <div className="text-center mt-8">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border p-2"
                        />
                        <button onClick={handleEmailCheck} className="ml-4 px-4 py-2 bg-blue-500 text-white">
                            Start Order
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookTable;