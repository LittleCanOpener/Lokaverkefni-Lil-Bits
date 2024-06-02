import { BasketItem } from "../components/basket/BasketContext";


// Function to get all selected items (drinks and food)
export const getSelectedItems = (): BasketItem[] => {
    return JSON.parse(localStorage.getItem('selectedItems') || '[]');
};

// Function to add a selected item to local storage (acts as a DB in this example)
export const addSelectedItem = (item: BasketItem): void => {
    let selectedItems: BasketItem[] = getSelectedItems();
    if (!selectedItems.find((selectedItem) => selectedItem.id === item.id)) {
        selectedItems.push(item);
        localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
        console.log('Selected item added to local storage:', item);
    } else {
        console.log(`Item with id ${item.id} is already in the list`);
    }
};

// Function to remove a selected item from local storage
export const removeSelectedItem = (id: string): void => {
    let selectedItems: BasketItem[] = getSelectedItems();
    selectedItems = selectedItems.filter((item) => item.id !== id);
    localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
    console.log(`Selected item with id ${id} removed from local storage`);
};

// Function to clear all selected items from local storage
export const clearSelectedItems = (): void => {
    localStorage.removeItem('selectedItems');
    console.log('All selected items cleared from local storage');
};

// Utility function to save order to local storage
interface Order {
    items: BasketItem[];
    orderTime: string;
    arrivalDate: string;
}

export const saveOrderToStorage = (email: string, order: Order): void => {
    const orders = JSON.parse(localStorage.getItem('orders') || '{}');
    orders[email] = order;
    localStorage.setItem('orders', JSON.stringify(orders));
    console.log(`Order saved for email: ${email}`);
};

export const getOrderFromStorage = (email: string): Order => {
    const orders = JSON.parse(localStorage.getItem('orders') || '{}');
    return orders[email] || { items: [], orderTime: '', arrivalDate: '' };
};

