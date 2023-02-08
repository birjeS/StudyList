import React from "react";

import './StudiesFilter.css';

const StudiesFilter = () => {
    return (
        <div className='studies-filter'>
            <div className='studies-filter__control'>
                <label>Filter by year</label>
                <select>
                    <option value='2023'>2023</option>
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                </select>
            </div>
        </div>
    );
};

export default StudiesFilter;