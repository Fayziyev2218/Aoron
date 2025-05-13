import { useParams } from 'react-router-dom';
import { newsItems } from './newsData';

export default function NewsDetail() {
    const { id } = useParams();
    const news = newsItems.find((item) => item.id === id);

    if (!news) return <div className="text-center mt-20 text-red-500">News not found</div>;

    return (
        <div className='max-w-6xl mx-auto p-6 mb-4 mt-10 bg-white rounded-2xl shadow-xl'>
            <button className='text-blue-600 hover:text-blue-800 text-sm mb-6 inline-flex items-center gap-1 transition duration-200'>
                ← Orqaga qaytish
            </button>
            {newsItems.map((item) => {
                <div className='flex flex-col gap-8 items-start'>
                    <div className='w-full rounded-2xl overflow-hidden shadow-md max-h-[500px]'>
                        <img src={item.image} alt={item.title}
                            className='w-full h-full object-cover rounded-2xl' />
                    </div>

                    <div className='w-full space-y-4'
                        key={item.id} >
                        <h1 className='text-3xl font-bold text-gray-900'>
                            {item.title}
                        </h1>
                        <p className='text-gray-700 text-lg leading-loose'>
                            {item.content}
                        </p>
                    </div>

                </div>;
            })}
        </div>


    );
}
