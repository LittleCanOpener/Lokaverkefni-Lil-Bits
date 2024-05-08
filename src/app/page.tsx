'use client'
import React from 'react';
import Navbar from "@/components/navbar/navbar";
import {
  BrowserRouter as
    Router,
  Route,
  Routes
} from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import DrinksScreen from "./navigation/drinkScreen";
import FoodScreen from "./navigation/foodScreen";
import HomeScreen from './navigation/homeScreen';
import DateScreen from './navigation/dateScreen';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/food" element={<FoodScreen />} />
          <Route path="/drink" element={<DrinksScreen />} />
          <Route path="/date" element={<DateScreen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;