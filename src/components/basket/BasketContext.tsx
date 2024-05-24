import React, { createContext, useState, useEffect, ReactNode } from 'react';

export interface BasketItem {
    id: string;
    type: 'food' | 'drink';
}

export interface BasketContextValue {
    basket: BasketItem[];
    addToBasket: (item: BasketItem) => void;
    removeFromBasket: (id: string) => void;
}

// Create the context
export const BasketContext = createContext<BasketContextValue | null>(null);

export const BasketProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [basket, setBasket] = useState<BasketItem[]>([]);

    useEffect(() => {
        const storedBasket = localStorage.getItem('basket');
        if (storedBasket) {
            setBasket(JSON.parse(storedBasket));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(basket));
    }, [basket]);

    const addToBasket = (item: BasketItem) => {
        setBasket(prevBasket => [...prevBasket, item]);
    };

    const removeFromBasket = (id: string) => {
        setBasket(prevBasket => prevBasket.filter(item => item.id !== id));
    };

    // Create the context value
    const contextValue: BasketContextValue = {
        basket,
        addToBasket,
        removeFromBasket,
    };

    return (
        <BasketContext.Provider value={contextValue}>
            {children}
        </BasketContext.Provider>
    );
};

export default BasketContext;
