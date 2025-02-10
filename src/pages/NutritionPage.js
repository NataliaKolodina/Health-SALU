import React, { useState } from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

// Импортируем данные из JSON-файла
import productData from '../json/products.json';

const NutritionPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(productData.categories);
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Обработка изменения строки поиска
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Фильтрация продуктов по поисковому запросу
  const filterProducts = (query) => {
    if (!query) {
      setFilteredCategories(productData.categories);
      setSelectedProduct(null); // Если запрос пустой, сбрасываем выбранный продукт
    } else {
      const filtered = productData.categories.map((category) => ({
        ...category,
        products: category.products.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) // Сравниваем с запросом, без учета регистра
        ),
      })).filter(category => category.products.length > 0);

      setFilteredCategories(filtered);

      // Если хотя бы один продукт найден, сразу показываем первый найденный продукт
      const foundProduct = findFirstMatchingProduct(query);
      if (foundProduct) {
        setSelectedProduct(foundProduct);  // Устанавливаем первый найденный продукт
      } else {
        setSelectedProduct(null);  // Если ничего не найдено, сбрасываем выбранный продукт
      }
    }
  };

  // Функция для нахождения первого продукта, соответствующего запросу
  const findFirstMatchingProduct = (query) => {
    for (let category of productData.categories) {
      const foundProduct = category.products.find(product => 
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      if (foundProduct) {
        return foundProduct;
      }
    }
    return null;  // Если ничего не найдено
  };

  // Открытие/закрытие категории
  const toggleCategory = (index) => {
    if (activeCategory === index) {
      setActiveCategory(null);  // Закрыть категорию
    } else {
      setActiveCategory(index);  // Открыть категорию
      setSelectedProduct(null);  // При открытии категории скрываем выбранный продукт
    }
  };

  // Открытие информации о продукте
  const handleProductClick = (product) => {
    setSelectedProduct(product);  // Устанавливаем выбранный продукт
  };

  // Возврат к категориям и сброс поиска
  const handleBackToCategories = () => {
    setSelectedProduct(null);  // Сбрасываем выбранный продукт
    setSearchQuery('');  // Сбрасываем поле поиска
    setFilteredCategories(productData.categories);  // Возвращаем все категории
  };

  // Очистка поиска
  const clearSearch = () => {
    setSearchQuery('');
    setFilteredCategories(productData.categories);  // Возвращаем все категории
    setSelectedProduct(null);  // Сбрасываем выбранный продукт
  };

  return (
    <>
      <Header />
      <div className='site__size'>
        <div className='container site__space'>
          <h1 className='site__heading'>Зачем важно правильно питаться?</h1>
          <p className=' site__text site__text-center site__text-margin'>
            Правильное питание — это основа здорового образа жизни. Важно выбирать полезные продукты, которые
            помогут поддерживать здоровье, нормализовать обмен веществ и укрепить иммунную систему. Правильный
            баланс белков, жиров и углеводов способствует долгосрочному здоровью и хорошему самочувствию.
          </p>

          {/* Поиск */}
          <div className='site__form site__form-mobile'>
            <input 
              className='site__input'
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Поиск по продуктам"
            />
            <div className='site__form'>
            <button className='site__btn food-found__btn' onClick={() => filterProducts(searchQuery)}>Поиск</button>
            <button className='food-found__btn site__btn' onClick={clearSearch}>Очистить</button>
            </div>
          </div>

          {/* Если выбран продукт, показываем его подробности */}
          {selectedProduct ? (
            <div className="site__list site__list-food">
              <button className='site__btn' onClick={handleBackToCategories}>Назад к категориям</button>
              <div className='food__contant site__form-mobile'>
                <div className='food__text'>
                  <h2 className='site__heading site__heading-food'>{selectedProduct.name}</h2>
                  <p className='site__text site__text-food'>{selectedProduct.description}</p>
                  <p className='site__text'><strong>Суточная норма:</strong> {selectedProduct.dailyRecommendation}</p>
                </div>
                <img className='site__img-food' src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
            </div>
          ) : (
            // Если категория выбрана или страница поиска, показываем список категорий
            <div className="category-list">
              {filteredCategories.map((category, index) => (
                <div key={index}>
                  <h2 className='site__subtitle site__subtitle-link' onClick={() => toggleCategory(index)} >
                    {category.category}
                  </h2>

                  {/* Если категория раскрыта, показываем продукты */}
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
