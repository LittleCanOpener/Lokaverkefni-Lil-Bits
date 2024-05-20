import React, { createContext, useState, ReactNode } from 'react';

interface BasketItem {
    id: number;
}

interface BasketContextValue {
    basket: BasketItem[];
    addToBasket: (item: BasketItem) => void;
    removeFromBasket: (id: number) => void;
}

const BasketContext = createContext<BasketContextValue | null>(null);

export const BasketProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [basket, setBasket] = useState<BasketItem[]>([]);

    const addToBasket = (item: BasketItem) => {
        setBasket(prevBasket => [...prevBasket, item]);
    };

    const removeFromBasket = (id: number) => {
        setBasket(prevBasket => prevBasket.filter(item => item.id !== id));
    };

    const contextValue: BasketContextValue = {
        basket,
        addToBasket,
        removeFromBasket
    };

    return (
        <BasketContext.Provider value={contextValue}>
            {children}
        </BasketContext.Provider>
    );
};

export default BasketContext;