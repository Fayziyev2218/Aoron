import React from "react";

export default function SaveCards() {
  const cartItems = []; // Bu yerda siz real cart ma'lumotlarini joylashtirasiz (masalan, Redux yoki localStorage'dan)

  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      <h1 className="heading-lg mb-10 text-center">Your Cart</h1>

      {cartItems.length === 0 ? (
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
          <a className="btn-primary mt-4 inline-block" href="/catalog">
            Continue Shopping
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: Products */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 border border-border rounded-lg p-4 animate-fade-in"
              >
                <div className="w-26 h-32 bg-secondary/20 rounded-md overflow-hidden">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover object-center"
                    alt={item.name}
                  />
                </div>
                <div className="flex-grow sm:ml-4">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <div className="text-sm text-muted-foreground mt-1 space-y-1">
                        <p>Sizes: {item.size}</p>
                        <p>Colors: {item.color}</p>
                      </div>
                    </div>
                    <button
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
                      <button className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground border border-border rounded-l-md">
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
                      <button className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground border border-border rounded-r-md">
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
                    <div className="font-medium">${item.price.toFixed(2)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Summary */}
          <div className="lg:col-span-1">
            <div className="bg-secondary p-6 rounded-lg">
              <h2 className="text-lg font-medium mb-4">Order Summary</h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>
                    $
                    {cartItems
                      .reduce((total, item) => total + item.price * item.quantity, 0)
                      .toFixed(2)}
                  </span>
                </div>
                <div className="pt-3 border-t border-border flex justify-between font-medium">
                  <span>Total</span>
                  <span>
                    $
                    {cartItems
                      .reduce((total, item) => total + item.price * item.quantity, 0)
                      .toFixed(2)}
                  </span>
                </div>
              </div>
              <button className="w-full btn-primary mb-4">Checkout</button>
              <a
                className="block w-full text-center text-sm text-muted-foreground hover:text-foreground bg-[#000000] rounded-md py-2"
                href="/catalog"
              >
                Continue Shopping
              </a>
              <div className="mt-6 p-3 bg-accent rounded-md flex items-start space-x-2">
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
                  className="lucide lucide-triangle-alert text-muted-foreground flex-shrink-0 mt-0.5"
                >
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                </svg>
                <p className="text-xs text-muted-foreground">
                  Delivery service is paid separately..
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
