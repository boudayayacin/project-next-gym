import React, { useState, useEffect } from 'react';
import { fetchSCategories } from '@/services/ScategorieService'; // Import fetchSCategories function

const ListScat = () => {
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    fetchSCategories()
      .then((subcategoriesData) => {
        setSubcategories(subcategoriesData);
      })
      .catch((error) => {
        console.error('Error fetching subcategories:', error);
      });
  }, []);

  return (
    <div className="container">
      <h1>List of Subcategories</h1>
      <ul>
        {subcategories.map((subcategory) => (
          <li key={subcategory._id}>{subcategory.nomscategorie}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListScat;
