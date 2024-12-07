import React, { useState, useEffect } from 'react';
import ProductTable from './components/Products'; // Assuming you have this component to display the table
import axios from 'axios';
import"./App.css";
// import Navbar from './components/Navbar'; // Import the Navbar component

function App() {
  const [data, setData] = useState(null);
  const [category, setCategory] = useState('headphones');  // Default category

  // Fetch data when the category changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://scrapper-amazon.vercel.app/data/${category}`, {
          headers: {
            'accept': 'application/json',
          },
        });

        console.log('Full Response:', response.data); // Log the entire response to inspect it
        const categoryData = response.data[category]; // Access the data dynamically based on the selected category
        setData(categoryData); // Set the data for the selected category

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [category]); // Re-fetch data whenever category changes

  return (
    <div className="App">


      <h1>Amazon Product Scraper</h1>
      
      {/* Category buttons */}
      <div className="category-buttons" style={{ display:"flex", flexDirection:"row", gap:"12px" }}>
        {[
          "headphones", 
          "smartphones", 
          "laptops", 
          "tablets", 
          "smartwatches", 
          "cameras", 
          "chargers", 
          "bluetooth speakers", 
          "wireless earbuds", 
          "gaming consoles"
        ].map((categoryName) => (
          <button 
          style={{ background:"green", height:"60px", width:"100%",border:"1px solid ", borderRadius:"2px"  }}
            key={categoryName} 
            onClick={() => setCategory(categoryName)} 
            className={category === categoryName ? "active" : ""}
          >
            {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
          </button>
        ))}
      </div>

      {/* Display data or loading state */}
      {data ? <ProductTable data={data} /> : <p>Loading...</p>}
    </div>
  );
}

export default App;
