import React, { useState } from "react";

const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export default function FindOrder() {
    const [email, setEmail] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setIsValid(isValidEmail(newEmail));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isValid) {
            console.log('Email is valid:', email);
            //lookup Emails here When ready to link
        } else {
            console.log('Email is invalid');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center bg-[#e2e299] rounded-lg p-8">
            <h1 className="text-2xl">Ordered already?</h1>
            <p>Find your order here.</p>
            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
                <input
                    className={`mb-2 h-12 w-56 px-4 py-2 border ${isValid ? 'border-gray-300' : 'border-red-500'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400`}
                    type="email"
                    id="exampleFormControlInputEmail"
                    placeholder="Example@Email.com"
                    value={email}
                    onChange={handleChange}
                    required
                />
                {!isValid && <p className="mt-2 text-sm text-red-600">Invalid email address</p>}
                <button type="submit" className="transition duration-300 ease-in-out hover:scale-110 font-bold shadow-md bg-[#3E6053] text-white py-3 px-6 rounded-md hover:bg-[#C16757]">
                    Find
                </button>
            </form>
        </div>
    );
}

