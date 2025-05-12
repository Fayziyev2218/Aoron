import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaArrowRight,
} from "react-icons/fa";
import logo from "/logo.png";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import axios from "../../hooks/axios";

export default function Footer() {
  const sendMessage =(event)=>{
    event.preventDefault()
    const token = "7238149873:AAEBuK_9Motnu_SFd9X04HjxmG-UaJGO6S4"
    const chatId = "862300228"
    const url = `https://api.telegram.org/bot${token}/sendMessage`
    const phone = document.getElementById("phone").value
    const messageName = `Mail ${phone}`

    axios({
        url:url,
        method: "POST",
        data:{
            chat_id: chatId,
            text: messageName,
        }
    }).then((res)=>{
        document.getElementById("myForm").reset()
        toast.success("Message sent successfully! 🎉"),{
          position: "top-center",
          autoClose: 3000,
        }
    }).catch((rej)=>{
      toast.error("There was an error. ❌", {
        position: "top-center",
        autoClose: 3000,
      });
    })
  }
  return (
    <>
      <footer className="bg-gray-100 w-full text-gray-700 pt-[64px] pb-[39px]">
        <div className="container">
          <div className=" grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img
                src={logo}
                alt="Aoron Logo"
                className="mb-4 w-[80px] h-[64px]"
              />
              <p className="text-sm font-inter font-medium text-[hsl(240_3.8%_46.1%)]">
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
               <li className="text-sm text-[hsl(240_3.8%_46.1%)] font-inter font-medium hover:text-gray-800 transition-colors"><Link to={"/catalog"}>View All Products</Link></li>
               <li className="text-sm text-[hsl(240_3.8%_46.1%)] font-inter font-medium hover:text-gray-800 transition-colors"><Link to={"/catalog"}>t-shirts</Link></li>
               <li className="text-sm text-[hsl(240_3.8%_46.1%)] font-inter font-medium hover:text-gray-800 transition-colors"><Link to={"/catalog"}>shorts</Link></li>
               <li className="text-sm text-[hsl(240_3.8%_46.1%)] font-inter font-medium hover:text-gray-800 transition-colors"><Link to={"/catalog"}>suits</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
                <ul className="space-y-2">
                <li className="text-sm text-[hsl(240_3.8%_46.1%)] font-inter font-medium hover:text-gray-800 transition-colors"><Link to={"/about"}>About</Link></li>
                <li className="text-sm text-[hsl(240_3.8%_46.1%)] font-inter font-medium hover:text-gray-800 transition-colors"><Link to={"/contact"}>Contact</Link></li>
                <li className="text-sm text-[hsl(240_3.8%_46.1%)] font-inter font-medium hover:text-gray-800 transition-colors"><Link to={"/news"}>Privacy Policy</Link></li>
                <li className="text-sm text-[hsl(240_3.8%_46.1%)] font-inter font-medium hover:text-gray-800 transition-colors"><Link to={"/terms"}>Delivery term</Link></li>
                </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">
                SUBSCRIBE TO OUR NEWSLETTER
              </h3>
              <p className="text-sm text-[hsl(240_3.8%_46.1%)] font-inter font-medium hover:text-gray-800 transition-colors mb-4">
                Subscribe to receive updates, access to exclusive deals, and
                more.
              </p>
              <form onSubmit={sendMessage} id="myForm">
                <div className="flex w-full">
                  <input
                  id="phone"
                  type="email"
                  placeholder="Email"
                  className="w-full flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="w-[52px] px-4 py-2 bg-black text-white rounded-r-md hover:bg-[#000000da]"
                >
                  <FaArrowRight />
                </button>
                </div>
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
