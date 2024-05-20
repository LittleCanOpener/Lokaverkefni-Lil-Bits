'use client'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BasketProvider } from '../components/basket';
import Navbar from "@/components/navbar/navbar";
import 'tailwindcss/tailwind.css';
import DrinksScreen from "./navigation/drinkScreen";
import FoodScreen from "./navigation/foodScreen";
import HomeScreen from './navigation/homeScreen';
import DateScreen from './navigation/dateScreen';
import OrderScreen from './navigation/orderScreen';
import Footer from '@/components/footer/footer';

function App() {
  return (
    <>
      <Router>
        <BasketProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/food" element={<FoodScreen />} />
            <Route path="/drink" element={<DrinksScreen />} />
            <Route path="/order" element={<OrderScreen />} />
            <Route path="/date" element={<DateScreen />} />
          </Routes>
          <Footer />
        </BasketProvider>
      </Router>
    </>
  );
}

export default App;
