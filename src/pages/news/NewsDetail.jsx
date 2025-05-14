import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { newsItems } from './newsData';

export default function NewsDetail() {
  const { id } = useParams();
  const { t } = useTranslation();

  const item = newsItems.find(n => n.id === id);
  if (!item) return <p>Not found</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <img src={item.image} alt={t(item.title)} className="w-full rounded-xl mb-6" />
      <h1 className="text-3xl font-bold mb-4">{t(item.title)}</h1>
      <p className="text-gray-600 mb-2">{t(item.description)}</p>
      <div className="text-gray-800 mt-6 leading-relaxed">
        {t(item.content)}
      </div>
    </div>
  );
}
