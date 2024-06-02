import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const FindOrder: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(true);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setIsValid(isValidEmail(newEmail));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isValid) {
            navigate('/receipt', { state: { email } });
        } else {
            console.log('Email is invalid');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center bg-[#e2e299] rounded-lg p-8 overflow-hidden">
            <h1 className="text-2xl">Ordered already?</h1>
            <p>Find your order here.</p>
            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center mt-4">
                <input
                    className={`mb-2 h-12 w-64 md:w-56 px-4 py-2 border ${isValid ? 'border-gray-300' : 'border-red-500'}`}
                    type="email"
                    placeholder="Example@Email.com"
                    value={email}
                    onChange={handleChange}
                    required
                />
                {!isValid && (
                    <p className="mt-2 text-sm text-red-600">Invalid email address</p>
                )}
                <button
                    type="submit"
                    className="transition duration-300 ease-in-out hover:scale-110 font-bold shadow-md bg-[#3E6053] text-white py-3 px-6 rounded-md mt-4 hover:bg-[#C16757]"
                >
                    Find
                </button>
            </form>
        </div>
    );
};

export default FindOrder;

