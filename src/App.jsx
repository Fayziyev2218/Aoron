import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './container/navbar';
import { route } from './route';
import Footer from './container/footer';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <>
      <Router>
        <ScrollToTop/>
        <Navbar />
        <main>
          <Routes>
            {
              route.map((item, index) => (
                <Route key={index} index path={item.path} element={item.element} />
              ))
            }

          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  )
}

export default App
