import React, { useState } from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

// Import data from JSON file
import productData from '../json/products.json';

const NutritionPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(productData.categories);
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter products by search query
  const filterProducts = (query) => {
    if (!query) {
      setFilteredCategories(productData.categories);
      setSelectedProduct(null); // Reset selected product if query is empty
    } else {
      const filtered = productData.categories.map((category) => ({
        ...category,
        products: category.products.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase())
        ),
      })).filter(category => category.products.length > 0);

      setFilteredCategories(filtered);

      // Automatically show the first matching product
      const foundProduct = findFirstMatchingProduct(query);
      if (foundProduct) {
        setSelectedProduct(foundProduct);
      } else {
        setSelectedProduct(null);
      }
    }
  };

  // Find first matching product
  const findFirstMatchingProduct = (query) => {
    for (let category of productData.categories) {
      const foundProduct = category.products.find(product => 
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      if (foundProduct) {
        return foundProduct;
      }
    }
    return null;
  };

  // Toggle category open/close
  const toggleCategory = (index) => {
    if (activeCategory === index) {
      setActiveCategory(null);
    } else {
      setActiveCategory(index);
      setSelectedProduct(null);
    }
  };

  // Show product details
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // Back to category view and reset search
  const handleBackToCategories = () => {
    setSelectedProduct(null);
    setSearchQuery('');
    setFilteredCategories(productData.categories);
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
    setFilteredCategories(productData.categories);
    setSelectedProduct(null);
  };

  return (
    <>
      <Header />
      <div className='site__size'>
        <div className='container site__space'>
          <h1 className='site__heading'>Why is healthy eating important?</h1>
          <p className='site__text site__text-center site__text-margin'>
            A healthy diet is the foundation of a healthy lifestyle. It’s important to choose nutritious foods that
            help maintain health, normalize metabolism, and strengthen the immune system. The right balance of
            proteins, fats, and carbohydrates promotes long-term health and well-being.
          </p>

          {/* Search */}
          <div className='site__form site__form-mobile'>
            <input 
              className='site__input'
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search products"
            />
            <div className='site__form'>
              <button className='site__btn food-found__btn' onClick={() => filterProducts(searchQuery)}>Search</button>
              <button className='food-found__btn site__btn' onClick={clearSearch}>Clear</button>
            </div>
          </div>

          {/* Show product details if selected */}
          {selectedProduct ? (
            <div className="site__list site__list-food">
              <button className='site__btn' onClick={handleBackToCategories}>Back to categories</button>
              <div className='food__contant site__form-mobile'>
                <div className='food__text'>
                  <h2 className='site__heading site__heading-food'>{selectedProduct.name}</h2>
                  <p className='site__text site__text-food'>{selectedProduct.description}</p>
                  <p className='site__text'><strong>Daily recommendation:</strong> {selectedProduct.dailyRecommendation}</p>
                </div>
                <img className='site__img-food' src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
            </div>
          ) : (
            // Show category list if no product selected
            <div className="category-list">
              {filteredCategories.map((category, index) => (
                <div key={index}>
                  <h2 className='site__subtitle site__subtitle-link' onClick={() => toggleCategory(index)} >
                    {category.category}
                  </h2>

                  {/* Show products if category is expanded */}
                  {activeCategory === index && (
                    <ul>
                      {category.products.map((product, idx) => (
                        <li className='site__subtitle site__subtitle-link' key={idx} onClick={() => handleProductClick(product)}>
                          <strong>{product.name}</strong>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NutritionPage;
