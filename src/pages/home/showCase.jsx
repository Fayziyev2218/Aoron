import img from '../../assets/img/bg-home.avif';
import arrow from '../../assets/img/arrow-right.svg';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ShowCase = () => {
  const { t } = useTranslation();

  return (
    <section className='relative h-screen flex items-center overflow-hidden'>
      <div
        className='absolute inset-0 w-full h-full bg-cover bg-center'
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className='absolute inset-0 bg-black/20'></div>
      </div>
      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-2xl'>
          <div className='flex flex-col items-start space-y-8 animate-fade-up'>
            <span className='font-inter inline-block bg-white/10 backdrop-blur-sm px-3 py-1 text-xs tracking-wider uppercase text-white'>
              {t('showcase.season')}
            </span>
            <h1 className='font-inter text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white'>
              {t('showcase.title')}
            </h1>
            <p className='font-inter text-lg md:text-xl text-white/90 max-w-lg'>
              {t('showcase.subtitle')}
            </p>
            <Link
              className='font-inter group bg-white px-6 py-3 rounded-md inline-flex items-center hover:bg-white/90 transition-colors'
              to='/catalog'
            >
              {t('showcase.button')}
              <img
                className='w-5 h-5 ml-2 transition-transform group-hover:translate-x-1'
                src={arrow}
                alt='arrow right'
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
