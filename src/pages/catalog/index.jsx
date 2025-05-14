import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const Catalog = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  const getProduct = async () => {
    setLoading(true);
    try {
      const res = await axios.get('https://testaoron.limsa.uz/api/product');
      const products = res?.data?.data?.products || [];
      setAllProducts(products);
      setFilteredProducts(products);

      const allCategories = [...new Set(products.map(p => p.category?.name_en))];
      const allSizes = [...new Set(products.flatMap(p => p.sizes || []).map(size => size.size))];
      const allColors = [...new Set(products.flatMap(p => p.colors || []).map(color => color.color_en?.toLowerCase()))];

      setCategories(allCategories);
      setSizes(allSizes);
      setColors(allColors);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    let result = [...allProducts];

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category?.name_en === selectedCategory);
    }

    if (selectedSizes.length > 0) {
      result = result.filter(p => p.sizes?.some(size => selectedSizes.includes(size.size)));
    }

    if (selectedColors.length > 0) {
      result = result.filter(p => p.colors?.some(c => selectedColors.includes(c.color_en?.toLowerCase())));
    }

    setFilteredProducts(result);
  }, [selectedCategory, selectedSizes, selectedColors, allProducts]);

  const handleCategoryChange = (cat) => setSelectedCategory(cat);
  const handleSizeToggle = (size) => {
    setSelectedSizes(prev => prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]);
  };
  const handleColorToggle = (color) => {
    setSelectedColors(prev => prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]);
  };
  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedSizes([]);
    setSelectedColors([]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">{t('home.premium') || 'Our Collection'}</h1>
        <p className="text-gray-600">{t('home.quality') || 'Premium menswear with quality and style'}</p>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        <aside className="md:w-64 w-full space-y-6 text-sm">
          <div>
            <h3 className="font-semibold mb-2">{t('footer.shop') || 'Categories'}</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`cursor-pointer px-3 py-2 rounded-md transition ${selectedCategory === category ? "bg-black text-white" : "hover:bg-gray-100"}`}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">{t('footer.suits') || 'Sizes'}</h3>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeToggle(size)}
                  className={`px-3 py-1 rounded-md border transition ${selectedSizes.includes(size) ? "bg-black text-white" : "bg-white hover:bg-gray-100"}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">{t('footer.tshirts') || 'Colors'}</h3>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => handleColorToggle(color)}
                  className={`flex items-center gap-2 px-3 py-1 text-xs rounded-md border transition ${selectedColors.includes(color) ? "bg-black text-white" : "bg-white hover:bg-gray-100"}`}
                >
                  <div className="w-3 h-3 rounded-full border" style={{ backgroundColor: color }}></div>
                  {color}
                </button>
              ))}
            </div>
          </div>

          <button onClick={clearFilters} className="text-red-500 underline hover:text-red-600">Clear Filters</button>
        </aside>

        <div className="flex-1">
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : filteredProducts.length === 0 ? (
            <p className="text-center text-gray-600">No products found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white shadow rounded-xl overflow-hidden">
                  <Link to={`/product/${product.id}`}>
                    <div className="aspect-[3/4] bg-gray-100">
                      <img
                        src={`https://testaoron.limsa.uz/${product.images?.[0]}`}
                        alt={product.title_en}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="text-sm font-semibold text-gray-800">{product.title_en}</h3>
                        <span className="text-sm font-bold text-gray-900">${product.price}</span>
                      </div>
                      <p className="text-xs text-gray-500 line-clamp-2 mb-2">{product.description_en}</p>
                      <div className="flex space-x-1">
                        {product.colors?.map((color, i) => (
                          <div key={i} className="w-3 h-3 rounded-full border" style={{ backgroundColor: color.color_en }} />
                        ))}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
