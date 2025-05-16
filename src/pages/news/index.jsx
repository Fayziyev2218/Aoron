import { useTranslation } from 'react-i18next';
import { newsItems } from './newsData';
import { Link } from 'react-router-dom';

export default function News() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#F4F4F5] py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            {t('news.title')}
          </h1>
          <p className="text-gray-500 text-sm mt-2 font-bold">
            {t('news.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {newsItems.map((item) => (
            <Link key={item.id} to={`/news/${item.id}`}>
              <div className="relative cursor-pointer bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-blue-200 hover:-translate-y-1 transition-all duration-300">
                <div className="w-full h-56 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    loading="lazy"
                    src={item.image}
                    alt={t(item.title)}
                  />
                </div>
                <div className='p-6 flex flex-col gap-2'>
                  <h2 className='text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300'>
                    {t(item.title)}
                  </h2>
                  <p className='text-gray-600 text-sm leading-relaxed'>
                    {t(item.description)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}