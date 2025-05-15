import { FaPhoneAlt } from "react-icons/fa";
import { icons } from "../../utils/icons";
import useApi from "../../hooks/useApi";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";  // Import the hook for translations

export default function About() {
  const icon = icons;
  const { getData } = useApi();
  const [users, setUsers] = useState([]);
  
  // Initialize the useTranslation hook
  const { t } = useTranslation();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getData("/team-section");
      setUsers(response.data); // Only the array of users is required
    };

    fetchUsers();
  }, []);

  return (
    <div className="w-full py-10 mt-4 md:py-16 bg-neutral-50">
      <div className="px-[16px]">
        <div className="max-w-[900px] mx-auto rounded-2xl shadow-lg p-8 md:p-12 space-y-10 bg-white text-neutral-900">
          
          {/* Use translations */}
          <h2 className="text-2xl md:text-3xl font-inter font-extrabold text-neutral-900 mb-2">
            {t("title")}
          </h2>
          <p className="text-lg text-neutral-700 font-inter mb-0 mt-[16px]">
            {t("description")}
          </p>

          <h2 className="text-xl font-inter font-bold text-primary mt-[16px] mb-0">
            {t("directions_title")}
          </h2>
          <ul className="list-disc list-inside space-y-1 text-neutral-800 pl-4 mt-[16px] mb-0">
            {t("directions", { returnObjects: true }).map((direction, index) => (
              <li key={index}>{direction}</li>
            ))}
          </ul>

          <hr className="border-t border-neutral-300 my-4" />

          <h2 className="text-2xl md:text-3xl font-inter font-extrabold text-neutral-900 mb-2">
            {t("production_title")}
          </h2>
          <p className="text-lg text-neutral-700 font-inter mb-0 mt-[16px]">
            {t("production_text")}
          </p>

          <h2 className="text-xl font-inter font-bold text-primary mt-[16px] mb-0">
            {t("offer_title")}
          </h2>
          <ul className="list-disc list-inside space-y-1 text-neutral-800 pl-4 mt-[16px] mb-0">
            {t("offer_list", { returnObjects: true }).map((offer, index) => (
              <li key={index}>{offer}</li>
            ))}
          </ul>

          <hr className="border-t border-neutral-300 my-4" />
          
          {/* Add mission and other translated sections similarly */}
          <h2 className="text-xl font-inter font-bold text-primary mt-[16px] mb-0">
            {t("why_title")}
          </h2>
          <ul className="list-disc list-inside space-y-1 text-neutral-800 pl-4 mt-[16px] mb-0">
            {t("why_list", { returnObjects: true }).map((why, index) => (
              <li key={index}>{why}</li>
            ))}
          </ul>

          <hr className="border-t border-neutral-300 my-4" />

          {/* Additional Sections */}
          <h2 className="text-xl font-inter font-bold text-primary mt-[16px] mb-0">
            {t("assortment_title")}
          </h2>
          <h2 className="text-lg text-neutral-700 mb-0 mt-[16px]">
            {t("assortment_subtitle")}
          </h2>
          <ul className="list-disc list-inside space-y-1 text-neutral-800 pl-4 mt-[16px] mb-0">
            {t("assortment_list", { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <hr className="border-t border-neutral-300 my-4" />

          <h2 className="text-xl font-inter font-bold text-primary mt-[16px] mb-0">
            {t("cooperation_title")}
          </h2>
          <h2 className="text-lg text-neutral-700 mb-0 mt-[16px]">
            {t("cooperation_subtitle")}
          </h2>
          <ul className="list-disc list-inside space-y-1 text-neutral-800 pl-4 mt-[16px] mb-0">
            {t("cooperation_list", { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <hr className="border-t border-neutral-300 my-4" />

          <div className="flex items-center gap-2">
            <span className="text-red-400">
              <FaPhoneAlt />
            </span>{" "}
            <p className="text-lg font-inter text-neutral-900">
              {t("contact_text")}
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 mt-[40px] bg-[hsl(240,5%,10%)] bg-primary text-primary-foreground">
        <div className="max-w-[768px] mx-auto text-center px-[16px]">
          <h2 className="heading-md mb-6 text-white text-[30px] font-inter">
            {t("mission_title")}
          </h2>
          <p className="text-xl font-light font-inter text-white leading-relaxed">
            {t("mission_text")}
          </p>
        </div>
      </div>

      <div className="py-16 md:py-24">
        <h2 className="heading-md mb-10 text-[30px] font-inter text-center">
          {t("values_title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1368px] mx-auto px-[16px]">
          {t("values", { returnObjects: true }).map((value, index) => (
            <div className="flex flex-col items-center p-[24px] hover:bg-gray-100 rounded-xl transition duration-300 ease-out" key={index}>
              <div className="w-12 h-12 mx-auto bg-gray-300 rounded-full flex items-center justify-center">
                {icon.CircleIcon}
              </div>
              <p className="text-lg font-medium font-inter my-[16px]">
                {value.title}
              </p>
              <p className="font-inter font-medium text-gray-500 text-center">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16 bg-gray-100">
        <h2 className="heading-md mb-10 text-[30px] font-inter text-center">
          {t("team_title")}
        </h2>
        <div className="max-w-[1368px] mx-auto px-[16px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.isArray(users) &&
            users.map((user, index) => (
              <div className="flex items-center flex-col" key={index}>
                <img
                  className="w-[200px] h-[200px] rounded-full object-cover"
                  src={`https://testaoron.limsa.uz/${user?.image}`}
                  alt={user.full_name}
                />
                <h2 className="font-medium text-lg font-inter mt-[12px] mb-0">
                  {user.full_name}
                </h2>
                <p className="text-gray-500 font-inter mt-[12px] mb-0 font-medium text-[16px]">
                  {user.position_en}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
