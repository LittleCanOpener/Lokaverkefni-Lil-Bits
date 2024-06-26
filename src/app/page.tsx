'use client';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import { BasketProvider } from '../components/basket/BasketContext';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import DateScreen from '../components/screens/DateScreen';
import FoodScreen from '../components/screens/FoodScreen';
import HomeScreen from '../components/screens/HomeScreen';
import OrderScreen from '../components/screens/OrderScreen';
import ReceiptScreen from '../components/screens/ReceiptScreen';
import DrinkScreen from '../components/screens/DrinkScreen';
import OrderConfirmationScreen from '../components/order/ConfirmOrder';
import OrderSummaryScreen from '../components/screens/SummaryScreen';


const MainApp: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <BasketProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/food" element={<FoodScreen />} />
            <Route path="/drink" element={<DrinkScreen />} />
            <Route path="/order" element={<OrderScreen />} />
            <Route path="/date" element={<DateScreen />} />
            <Route path="/receipt" element={<ReceiptScreen />} />
            <Route path="/order-confirmation" element={<OrderConfirmationScreen />} />
            <Route path="/order-summary" element={<OrderSummaryScreen />} />
          </Routes>
        </BasketProvider>
        <Footer />
      </div>
    </Router>
  );
};

export default MainApp;