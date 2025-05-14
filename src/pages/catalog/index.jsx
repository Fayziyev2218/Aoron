import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeColor, setActiveColor] = useState(null);
  const [activeSize, setActiveSize] = useState(null);
  const [loading, setLoading] = useState(true);

  const categories = ["t-shirts", "shorts", "suits"];
  const sizes = ["44", "46", "48", "50", "52"];
  const colors = [
    { name: "black", value: "rgb(0,0,0)" },
    { name: "white", value: "rgb(255,255,255)" },
    { name: "gray", value: "rgb(128,128,128)" },
    { name: "blue", value: "rgb(0,0,255)" },
    { name: "yellow", value: "rgb(255,255,0)" },
    { name: "brown", value: "rgb(165,42,42)" }
  ];

  useEffect(() => {
    axios
      .get("https://testaoron.limsa.uz/api/product")
      .then((res) => {
        const allProducts = res.data?.data?.products || [];
        setProducts(allProducts);
        setFilteredProducts(allProducts);
      })
      .catch((err) => console.error("Error fetching products:", err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    let filtered = products;
    if (activeCategory !== "all") {
      filtered = filtered.filter((product) =>
        String(product.category).toLowerCase() === activeCategory.toLowerCase()
      );
    }
    if (activeColor) {
      filtered = filtered.filter((product) =>
        product.colors?.some((c) => c.color_en?.toLowerCase().includes(activeColor))
      );
    }
    if (activeSize) {
      filtered = filtered.filter((product) =>
        product.sizes?.includes(activeSize)
      );
    }
    setFilteredProducts(filtered);
  }, [activeCategory, activeColor, activeSize, products]);

  const clearFilters = () => {
    setActiveCategory("all");
    setActiveColor(null);
    setActiveSize(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Our Collection</h1>
        <p className="text-gray-600">Premium menswear with quality and style</p>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        <aside className="md:w-64 w-full space-y-6 text-sm">
          <div>
            <h3 className="font-semibold mb-2">Categories</h3>
            <ul className="space-y-2">
              <li onClick={() => setActiveCategory("all")} className={`cursor-pointer px-3 py-2 rounded-md transition ${activeCategory === "all" ? "bg-black text-white" : "hover:bg-gray-100"}`}>View All Products</li>
              {categories.map((category) => (
                <li
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`cursor-pointer px-3 py-2 rounded-md transition ${activeCategory === category ? "bg-black text-white" : "hover:bg-gray-100"}`}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Sizes</h3>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setActiveSize(size)}
                  className={`px-3 py-1 rounded-md border transition ${activeSize === size ? "bg-black text-white" : "bg-white hover:bg-gray-100"}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Colors</h3>
            <div className="flex flex-wrap gap-2">
              {colors.map(({ name, value }) => (
                <button
                  key={name}
                  onClick={() => setActiveColor(name)}
                  className={`flex items-center gap-2 px-3 py-1 text-xs rounded-md border transition ${activeColor === name ? "bg-black text-white" : "bg-white hover:bg-gray-100"}`}
                >
                  <div className="w-3 h-3 rounded-full border" style={{ backgroundColor: value }}></div>
                  {name}
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
                          <div
                            key={i}
                            className="w-3 h-3 rounded-full border"
                            style={{ backgroundColor: color.color_en }}
                          />
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
}