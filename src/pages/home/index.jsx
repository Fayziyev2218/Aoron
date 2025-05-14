import { useEffect, useState } from "react";
import axios from "axios";
import ShowCase from "./showCase";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newArrivals, setNewArrivals] = useState([]);

    useEffect(() => {
        axios
            .get("https://testaoron.limsa.uz/api/product")
            .then((res) => {
                const allProducts = res.data?.data?.products || [];
                setProducts(allProducts);
                setNewArrivals(allProducts.slice(1, 5)); // faqat 4 tasi
            })
            .catch((err) => {
                console.error("Mahsulotlarni olishda xatolik:", err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
<<<<<<< HEAD
      <section className="py-10 px-4 max-w-[95%] md:max-w-7xl mx-auto font-inter space-y-16">
  {/* Featured Products */}
  <div className="space-y-6 text-center">
    <h2 className="text-3xl font-bold">Featured Products</h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Discover our carefully selected collection of premium menswear, crafted with the finest materials and attention to detail.
    </p>
  </div>

  {/* Featured Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {loading ? (
      <div className="col-span-full flex justify-center items-center py-10">
        <div className="w-10 h-10 border-4 border-black border-t-transparent rounded-full animate-spin" />
      </div>
    ) : (
      products.map((product) => (
        <div key={product.id} className="group bg-white shadow-sm rounded-xl overflow-hidden transition hover:shadow-md">
          <Link to={`/product/${product.id}`} className="block">
            <div className="aspect-[3/4] bg-gray-100">
              <img
                src={`https://testaoron.limsa.uz/${product.images?.[0]}`}
                alt={product.title_en || "Product"}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>
          <div className="p-4">
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-sm font-semibold text-gray-800">
                <Link to={`/product/${product.id}`} className="hover:text-blue-600">
                  {product.title_en}
                </Link>
              </h3>
              <span className="text-sm font-bold text-gray-900">${product.price}</span>
            </div>
            <p className="text-xs text-gray-500 line-clamp-2">{product.description_en}</p>
            <div className="mt-2 flex space-x-1">
              {product.colors?.map((color, i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full border border-gray-300"
                  style={{ backgroundColor: color.color_en }}
                />
              ))}
            </div>
          </div>
=======
        <div>
            <ShowCase />
            <section className="py-5 px-4 max-w-7xl mx-auto font-inter">
                {/* Featured Products */}
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-bold mb-4">{t("home.featuredTitle")}</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {t("home.featuredDesc")}
                    </p>
                </div>

                <div className="min-h-[200px]">
                    {loading ? (
                        <div className="flex justify-center items-center py-10">
                            <div className="w-10 h-10 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {products.map((product) => (
                                <div key={product.id} className="group relative overflow-hidden bg-white">
                                    <Link to={`/product/${product.id}`} className="block">
                                        <div className="relative aspect-[3/4] bg-gray-100">
                                            <img
                                                src={`https://testaoron.limsa.uz/${product.images?.[0]}`}
                                                alt={product.title_en || "Product"}
                                                className="w-full h-full object-cover transition-transform duration-300"
                                            />
                                        </div>
                                    </Link>
                                    <div className="p-4">
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-sm font-semibold text-gray-800 mb-1">
                                                <Link to={`/product/${product.id}`} className="hover:text-blue-600">
                                                    {product.title_en}
                                                </Link>
                                            </h3>
                                            <span className="text-sm font-bold text-gray-900">${product.price}</span>
                                        </div>
                                        <p className="text-xs text-gray-500 mb-2 line-clamp-2">
                                            {product.description_en}
                                        </p>
                                        <div className="flex justify-between items-center">
                                            <div className="flex space-x-1">
                                                {product.colors?.map((color, i) => (
                                                    <div
                                                        key={i}
                                                        className="w-3 h-3 rounded-full border border-gray-300"
                                                        style={{ backgroundColor: color.color_en }}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* View All Link */}
                <div className="mt-5 text-center">
                    <Link
                        to="/catalog"
                        className="justify-center font-medium inline-flex items-center rounded-md border border-input bg-background px-6 py-3 text-sm transition-colors duration-200 hover:bg-gray-100 group"
                    >
                        {t("home.viewAll")}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                        >
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </Link>
                </div>

                {/* New Arrivals */}
                <div className="py-10">
                    <div className="flex justify-between items-end mb-6">
                        <h2 className="text-2xl font-bold">{t("home.newArrivals")}</h2>
                        <Link to="/catalog" className="text-sm font-medium hover:underline inline-flex items-center">
                            {t("home.viewAll")}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="ml-1"
                            >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {newArrivals.map((product) => (
                            <div key={product.id} className="group relative overflow-hidden bg-white">
                                <Link to={`/product/${product.id}`} className="block">
                                    <div className="relative aspect-[3/4] bg-gray-100">
                                        <img
                                            src={`https://testaoron.limsa.uz/${product.images?.[0]}`}
                                            alt={product.title_en || "Product"}
                                            className="w-full h-full object-cover transition-transform duration-300"
                                        />
                                    </div>
                                </Link>
                                <div className="p-4">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-sm font-semibold text-gray-800 mb-1">
                                            <Link to={`/product/${product.id}`} className="hover:text-blue-600">
                                                {product.title_en}
                                            </Link>
                                        </h3>
                                        <span className="text-sm font-bold text-gray-900">${product.price}</span>
                                    </div>
                                    <p className="text-xs text-gray-500 mb-2 line-clamp-2">
                                        {product.description_en}
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex space-x-1">
                                            {product.colors?.map((color, i) => (
                                                <div
                                                    key={i}
                                                    className="w-3 h-3 rounded-full border border-gray-300"
                                                    style={{ backgroundColor: color.color_en }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
>>>>>>> 1035c8d9d74e224b6a34b57c3383aac0b4fcaf77
        </div>
      ))
    )}
  </div>

  {/* View All Products Link */}
  <div className="text-center mt-10 flex">
    <Link
      to="/catalog"
      className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border border-gray-300 rounded-md bg-white hover:bg-gray-100 transition"
    >
      View All Products
      <svg
        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14"></path>
        <path d="m12 5 7 7-7 7"></path>
      </svg>
    </Link>
  </div>

  {/* New Arrivals */}
  <div className="space-y-6">
    <div className="flex justify-between items-end">
      <h2 className="text-2xl font-bold">New Arrivals</h2>
      <Link to="/catalog" className="text-sm font-medium hover:underline inline-flex items-center">
        View All Products
        <svg
          className="ml-1 h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </Link>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {newArrivals.map((product) => (
        <div key={product.id} className="group bg-white shadow-sm rounded-xl overflow-hidden hover:shadow-md transition">
          <Link to={`/product/${product.id}`} className="block">
            <div className="aspect-[3/4] bg-gray-100">
              <img
                src={`https://testaoron.limsa.uz/${product.images?.[0]}`}
                alt={product.title_en || "Product"}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>
          <div className="p-4">
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-sm font-semibold text-gray-800">
                <Link to={`/product/${product.id}`} className="hover:text-blue-600">
                  {product.title_en}
                </Link>
              </h3>
              <span className="text-sm font-bold text-gray-900">${product.price}</span>
            </div>
            <p className="text-xs text-gray-500 line-clamp-2">{product.description_en}</p>
            <div className="mt-2 flex space-x-1">
              {product.colors?.map((color, i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full border border-gray-300"
                  style={{ backgroundColor: color.color_en }}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    );
};

export default Home;
