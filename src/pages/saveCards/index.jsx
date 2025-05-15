import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../hooks/axios";

export default function SaveCards() {
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonText, setButtonText] = useState("Send Message");
  const [loading, setLoading] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const SendMessage = async (event, setLoading, setButtonText, setIsModalOpen) => {
    event.preventDefault(); // Предотвращаем перезагрузку страницы
    setLoading(true);
    setButtonText("Sending...");

    const token = '8008921149:AAFYLw0qJ0G6vUxg1K-VJdRft-H6H6m1rnI';
    const chat_id = 6365725666;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const name = event.target.name.value;
    const phone = event.target.phone.value;
    const email = event.target.email.value;
    const country = event.target.country.value;
    const city = event.target.city.value;
    const whatsapp = event.target.whatsapp.value;

    const fullMessage = `📬 New Contact Info:
👤 Name: ${name}
📞 Phone: ${phone}
📧 Email: ${email}
🌍 Country: ${country}
🏙️ City: ${city}
📱 WhatsApp: ${whatsapp}`;

    try {
      await axios.post(url, {
        chat_id: chat_id,
        text: fullMessage,
      });

      await new Promise((resolve) => setTimeout(resolve, 7000)); // опциональная задержка

      document.getElementById("myForm").reset(); // Сброс формы
      setIsModalOpen(false); // Закрытие модального окна
    } catch (error) {
      console.error('Mission failed ❌', error);
      // Можно заменить на alert или оставить только console.error
      alert("Message sending failed. Please try again.");
    } finally {
      setLoading(false);
      setButtonText("Send Message");
    }
  };




  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setSubtotal(total);
  }, [cart]);

  const updateQuantity = (id, type) => {
    const updated = cart.map((item) => {
      if (item.id === id) {
        const newQty = type === "inc" ? item.quantity + 1 : Math.max(item.quantity - 1, 1);
        return { ...item, quantity: newQty };
      }
      return item;
    });
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const removeItem = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  return (
    <div className="container mx-auto px-4 py-10 md:py-16 font-inter">
      <h1 className="text-3xl font-bold mb-10 text-center">Your Cart</h1>
{isModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
    <form
      id="myForm"
      onSubmit={(e) => SendMessage(e, setLoading, setButtonText, setIsModalOpen)}
      className="bg-white p-4 sm:p-6 rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto mx-auto shadow-md relative animate-fade-in-up"
    >
      {/* Close Button */}
      <button
        type="button"
        className="absolute top-2 right-3 text-red-500 text-2xl"
        onClick={() => setIsModalOpen(false)}
      >
        ✕
      </button>

      <h2 className="text-xl sm:text-2xl font-semibold mb-5 text-center">Contact Info</h2>

      {/* Name */}
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded-lg p-3 text-sm"
          required
        />
      </div>

      {/* Phone */}
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">Phone</label>
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <span className="px-3 bg-gray-100 text-sm sm:text-base">🇺🇸 +1</span>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            className="w-full p-3 text-sm outline-none"
            required
          />
        </div>
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-lg p-3 text-sm"
          required
        />
      </div>

      {/* Country */}
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">Country</label>
        <select
          id="country"
          name="country"
          className="w-full border border-gray-300 rounded-lg p-3 text-sm"
          required
        >
          <option>Please select</option>
          <option>United States</option>
          <option>Germany</option>
          <option>Kazakhstan</option>
          <option>Uzbekistan</option>
        </select>
      </div>

      {/* City */}
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">City</label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="City"
          className="w-full border border-gray-300 rounded-lg p-3 text-sm"
          required
        />
      </div>

      {/* WhatsApp */}
      <div className="mb-6">
        <label className="block mb-1 text-sm font-medium">WhatsApp Number</label>
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <span className="px-3 bg-gray-100 text-sm sm:text-base">🇺🇸 +1</span>
          <input
            type="tel"
            id="whatsapp"
            name="whatsapp"
            placeholder="WhatsApp Number"
            className="w-full p-3 text-sm outline-none"
            required
          />
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded-lg text-sm font-semibold hover:bg-opacity-90"
      >
        {buttonText}
      </button>
    </form>
  </div>
)}



      {cart.length === 0 ? (
        <div className="text-center py-16 space-y-6">
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-shopping-bag text-muted-foreground"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </div>
          </div>
          <h2 className="text-xl font-medium">Your cart is empty</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link to="/catalog" className="btn-primary mt-4 inline-block">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 border border-border rounded-lg p-4 animate-fade-in"
              >
                <div className="w-26 h-32 bg-secondary/20 rounded-md overflow-hidden">
                  <img
                    src={`https://testaoron.limsa.uz/${item.image}`}
                    className="w-full h-full object-cover object-center"
                    alt={item.title}
                  />
                </div>
                <div className="flex-grow sm:ml-4">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <div className="text-sm text-muted-foreground mt-1 space-y-1">
                        <p>Sizes: {item.size || "N/A"}</p>
                        <p>Colors: {item.color || "N/A"}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-muted-foreground hover:text-foreground"
                      aria-label="Remove item"
                    >
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
                        className="lucide lucide-x"
                      >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex justify-between items-end mt-4">
                    <div className="flex items-center">
                      <button
                        onClick={() => updateQuantity(item.id, "dec")}
                        className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground border border-border rounded-l-md"
                      >
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
                          className="lucide lucide-minus"
                        >
                          <path d="M5 12h14" />
                        </svg>
                      </button>
                      <input
                        type="number"
                        className="w-10 h-8 text-center border-t border-b border-border"
                        min="1"
                        value={item.quantity}
                        readOnly
                      />
                      <button
                        onClick={() => updateQuantity(item.id, "inc")}
                        className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground border border-border rounded-r-md"
                      >
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
                          className="lucide lucide-plus"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5v14" />
                        </svg>
                      </button>
                    </div>
                    <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-secondary p-6 rounded-lg">
              <h2 className="text-lg font-medium mb-4">Order Summary</h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="pt-3 border-t border-border flex justify-between font-medium">
                  <span>Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
              </div>
              <button
                onClick={handleOpenModal}
                className="w-full bg-black text-white py-2 rounded-lg mb-4">
                Checkout
              </button>
              <Link
                to="/catalog"
                className="block w-full text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Continue Shopping
              </Link>
              <div className="mt-6 p-3 bg-accent rounded-md flex items-start space-x-2 text-sm text-muted-foreground">
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
                  className="lucide lucide-triangle-alert flex-shrink-0 mt-0.5"
                >
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                </svg>
                <p>Delivery service is paid separately.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
