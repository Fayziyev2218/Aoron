import { FaInstagram, FaFacebook, FaTwitter, FaArrowRight } from "react-icons/fa";
import logo from "/logo.png";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import axios from "../../hooks/axios";
import { useTranslation } from "react-i18next"; // Import the hook

export default function Footer() {
  const { t } = useTranslation(); // Use the useTranslation hook

  const sendMessage = (event) => {
    event.preventDefault();
    const token = "7238149873:AAEBuK_9Motnu_SFd9X04HjxmG-UaJGO6S4";
    const chatId = "862300228";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const phone = document.getElementById("phone").value;
    const messageName = `Mail ${phone}`;

    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chatId,
        text: messageName,
      },
    })
      .then((res) => {
        document.getElementById("myForm").reset();
        toast.success(t("footer.successMessage"), {
          position: "top-center",
          autoClose: 3000,
        });
      })
      .catch((rej) => {
        toast.error(t("footer.errorMessage"), {
          position: "top-center",
          autoClose: 3000,
        });
      });
  };

  return (
    <footer className="bg-gray-100 w-full text-gray-700 pt-[64px] pb-[39px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              src={logo}
              alt="Aoron Logo"
              className="mb-4 w-[80px] h-[64px]"
            />
            <p className="text-sm font-inter font-medium text-[hsl(240_3.8%_46.1%)]">
              {t("footer.description")}
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
            <h3 className="text-lg font-semibold mb-4">{t("footer.shop")}</h3>
            <ul className="space-y-2">
              <li className="text-sm text-[hsl(240_3.8%_46.1%)] font-inter font-medium hover:text-gray-800 transition-colors">
                <Link to={"/catalog"}>{t("footer.viewAll")}</Link>
              </li>
              <li className="text-sm text-[hsl(240_3.8%_46.1%)] font-inter font-medium hover:text-gray-800 transition-colors">
                <Link to={"/catalog"}>{t("footer.tshirts")}</Link>
              </li>
              <li className="text-sm text-[hsl(240_3.8%_46.1%)] font-inter font-medium hover:text-gray-800 transition-colors">
                <Link to={"/catalog"}>{t("footer.shorts")}</Link>
              </li>
              <li className="text-sm text-[hsl(240_3.8%_46.1%)] font-inter font-medium hover:text-gray-800 transition-colors">
                <Link to={"/catalog"}>{t("footer.suits")}</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.company")}</h3>
            <ul className="space-y-2">
              <li className="text-sm text-[hsl(240_3.8%_46.1%)] font-inter font-medium hover:text-gray-800 transition-colors">
                <Link to={"/about"}>{t("footer.about")}</Link>
              </li>
              <li className="text-sm text-[hsl(240_3.8%_46.1%)] font-inter font-medium hover:text-gray-800 transition-colors">
                <Link to={"/contact"}>{t("footer.contact")}</Link>
              </li>
              <li className="text-sm text-[hsl(240_3.8%_46.1%)] font-inter font-medium hover:text-gray-800 transition-colors">
                <Link to={"/news"}>{t("footer.privacyPolicy")}</Link>
              </li>
              <li className="text-sm text-[hsl(240_3.8%_46.1%)] font-inter font-medium hover:text-gray-800 transition-colors">
                <Link to={"/terms"}>{t("footer.deliveryTerm")}</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("footer.subscribeTitle")}
            </h3>
            <p className="text-sm text-[hsl(240_3.8%_46.1%)] font-inter font-medium hover:text-gray-800 transition-colors mb-4">
              {t("footer.subscribeDescription")}
            </p>
            <form onSubmit={sendMessage} id="myForm">
              <div className="flex w-full">
                <input
                  id="phone"
                  type="email"
                  placeholder={t("footer.placeholderEmail")}
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
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
