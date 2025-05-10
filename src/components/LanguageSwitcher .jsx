
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng); // foydalanuvchi tanlovini saqlab qo'yish
  };

  const currentLang = i18n.language;

  return (
    <div className="flex gap-2 items-center">
      {['en', 'ru', 'de'].map((lng) => (
        <button
          key={lng}
          onClick={() => changeLanguage(lng)}
          className={`px-2 py-1 rounded ${
            currentLang === lng ? 'bg-black text-white' : 'bg-white text-black'
          }`}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
