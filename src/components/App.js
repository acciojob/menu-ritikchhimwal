
import React, { useState } from "react";
import { dishesData } from "./data";
import Dish from "./dish";
import '../styles/App.css';

function App() {
    const [data, setData] = React.useState(dishesData);
    
    const handleFilter = (e) => {
        const category = e.target.value;
        
        if(category == 'all') {
            const filteredData = dishesData;
            setData(filteredData);
        }
        else {
            let filteredData = dishesData.filter((dish) => dish.category == category);
            setData(filteredData);
        }
    }


    return <div id="main">
        <h1>Our Menu</h1>
        <div className="filters">
            <button value='all' onClick={(e) => handleFilter(e)}>All</button>

            <button value='breakfast' data-test-id="menu-item-breakfast" id="filter-btn-1" onClick={(e) => handleFilter(e)}>Breakfast</button>

            <button value='lunch' data-test-id="menu-item-lunch" id="filter-btn-3" onClick={(e) => handleFilter(e)}>Lunch</button>

            <button value='shakes' data-test-id="menu-item-shakes" id="filter-btn-2" onClick={(e) => handleFilter(e)}>Shakes</button>
        </div>
        <div className="dishedContainer">
            {
                data.map((dish) => <Dish key={dish.id} details={dish} />)
            }
        </div>
    </div>
}

export default App;


/*
<button onClick={(e) => handleFilter(e)}>All</button>
<button data-test-id="menu-item-shakes" id="filter-btn-3" onClick={(e) => handleFilter(e)}>Shakes</button>
<button data-test-id="menu-item-lunch" id="filter-btn-2" onClick={(e) => handleFilter(e)}>Lunch</button>
<button data-test-id="menu-item-breakfast" id="filter-btn-1" onClick={(e) => handleFilter(e)}>Breakfast</button>
*/
