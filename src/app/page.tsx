'use client';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'tailwindcss/tailwind.css';

import Navbar from "../components/navbar/Navbar";
import Footer from '../components/footer/Footer';
import { BasketProvider } from '@/components/basket/BasketContext';
import HomeScreen from '@/components/screens/HomeScreen';
import DateScreen from '@/components/screens/DateScreen';
import DrinkScreen from '@/components/screens/DrinkScreen';
import FoodScreen from '@/components/screens/FoodScreen';
import OrderScreen from '@/components/screens/OrderScreen';
import ReceiptScreen from '@/components/screens/ReceiptScreen';

function App() {
  return (
    <Router>
      <BasketProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/food" element={<FoodScreen />} />
          <Route path="/drink" element={<DrinkScreen />} />
          <Route path="/order" element={<OrderScreen />} />
          <Route path="/date" element={<DateScreen />} />
          <Route path="/receipt" element={<ReceiptScreen />} />
        </Routes>
        <Footer />
      </BasketProvider>
    </Router>
  );
};

export default App;