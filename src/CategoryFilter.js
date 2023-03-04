import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  const handleSelectChange = (event) => {
    onSelectCategory(event.target.value);
  };

  return (
    <div className="category-filter">
      <label htmlFor="category-select">Filter by category:</label>
      <select id="category-select" value={selectedCategory} onChange={handleSelectChange}>
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
