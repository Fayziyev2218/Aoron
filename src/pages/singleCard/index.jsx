import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

const SingleCard = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios
      .get(`https://testaoron.limsa.uz/api/product/${id}`)
      .then((res) => {
        setProduct(res.data?.data);
      })
      .catch((err) => {
        console.error("Xatolik:", err);
        toast.error("Mahsulotni olishda xatolik yuz berdi");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const productToAdd = {
      id: product._id,
      title: product.title_en,
      price: product.price,
      image: product.images?.[0],
      quantity,
    };

    const existingIndex = cart.findIndex(item => item.id === product._id);

    if (existingIndex !== -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push(productToAdd);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Mahsulot savatga qo‘shildi!");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[300px]">
        <div className="w-10 h-10 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!product) {
    return <div className="text-center text-gray-600 py-10">Mahsulot topilmadi.</div>;
  }

  return (
    <section className="max-w-6xl mx-auto py-10 px-4 font-inter">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-gray-100 aspect-[3/4]">
          <img
            src={`https://testaoron.limsa.uz/${product.images?.[0]}`}
            alt={product.title_en}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title_en}</h1>
          <p className="text-xl font-semibold text-gray-900 mb-6">${product.price}</p>
          <p className="text-gray-700 text-sm mb-4">{product.description_en}</p>

          <div className="mb-6">
            <h3 className="font-medium mb-2">Size</h3>
            <p className="max-w-[3rem] text-center p-2 text-sm border rounded-md">
              {product.sizes?.[0]?.size || "Size not available"}
            </p>
          </div>

          <div className="mb-4">
            <span className="block text-sm font-medium mb-1">Colors:</span>
            <div className="flex gap-2">
              {product.colors?.map((color, i) => (
                <div
                  key={i}
                  className="w-5 h-5 rounded-full border border-gray-300"
                  style={{ backgroundColor: color.color_en }}
                />
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-medium mb-2">Quantity</h3>
            <div className="flex items-center border rounded-md w-32 overflow-hidden">
              <button
                onClick={() => setQuantity(prev => Math.max(prev - 1, 1))}
                className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-black"
              >
                −
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(Number(e.target.value), 1))}
                className="w-12 h-10 text-center border-none focus:outline-none"
              />
              <button
                onClick={() => setQuantity(prev => prev + 1)}
                className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-black"
              >
                +
              </button>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={handleAddToCart}
              className="bg-black text-white rounded-lg w-full py-4"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Accordion Section */}
      <div className="mt-10 w-full max-w-md">
        <button
          onClick={() => setIsDetailsOpen(prev => !prev)}
          className="flex justify-between items-center w-full"
        >
          <h3 className="font-bold text-lg">Product Details</h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${isDetailsOpen ? "rotate-180" : ""}`}><path d="m18 15-6-6-6 6" /></svg>
        </button>

        <div className={`overflow-hidden transition-all duration-300 ${isDetailsOpen ? "max-h-[500px] mt-4" : "max-h-0"}`}>
          <div className="py-2 text-sm text-gray-600">
            <p>{product.description_en || "No product details available"}</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <div className="flex gap-2">
                {product.colors?.map((color, i) => (
                  <div
                    key={i}
                    className="w-5 h-5 rounded-full border border-gray-300"
                    style={{ backgroundColor: color.color_en }}
                  />
                ))}
              </div>
              <div className="flex gap-5 items-center">
                <li className="text-sm font-medium">Size:</li>
                <p className="max-w-[3rem] text-center p-2 text-sm border rounded-md">
                  {product.sizes?.[0]?.size || "Size not available"}
                </p>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleCard;
