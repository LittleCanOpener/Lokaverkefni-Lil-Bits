import React from 'react';
import { Link } from 'react-router-dom';

export default function BookTable() {
    return (
        <>
            <h2>Book Table</h2>
            <Link to="/food">
                <button className="bg-slate-800 px-4 text-white ml-4 rounded-full">Book Now!
                </button>
            </Link>
        </>
    )
}