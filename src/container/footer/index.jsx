import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaArrowRight,
} from "react-icons/fa"; 
import logo from "/logo.png";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-50 w-full text-gray-700 pt-[64px] pb-[39px]">
        <div className="container">
          
          <div className=" grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={logo} alt="Aoron Logo" className="mb-4 w-[80px] h-[64px]" />
            <p className="text-sm">
              Premium quality menswear focused on exceptional materials and
              perfect fit.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-black hover:text-[#000000da]"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-black hover:text-[#000000da]"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-black hover:text-[#000000da]"
              >
                <FaTwitter className="text-xl" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">SHOP</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#000000da]">
                  View All Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#000000da]">
                  T-shirts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#000000da]">
                  Shorts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#000000da]">
                  Suits
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#000000da]">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#000000da]">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#000000da]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#000000da]">
                  Delivery terms
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              SUBSCRIBE TO OUR NEWSLETTER
            </h3>
            <p className="text-sm mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-black text-white rounded-r-md hover:bg-[#000000da]"
              >
                <FaArrowRight />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-start">
          <p className="text-sm text-gray-500">
            © 2025 AORON. All rights reserved.
          </p>
        </div>
        </div>
        
      </footer>
    </>
  );
}
