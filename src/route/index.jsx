import About from "../pages/about";
import Catalog from "../pages/catalog";
import Contact from "../pages/contact";
import Home from "../pages/home";
import News from "../pages/news";
import SaveCards from "../pages/saveCards";
import SingleCard from "../pages/singleCard";


export const route = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/catalog',
        element: <Catalog />
    },
    {
        path: '/news',
        element: <News/>
    },
    {
        path: '/contact',
        element: <Contact/>
    },
    {
        path: '/cart',
        element: <SaveCards/>
    },
    {
        path: '/product',
        element: <SingleCard />
    },
]