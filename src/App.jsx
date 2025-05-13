import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './container/navbar';
import { route } from './route';
import Footer from './container/footer';
import { Toaster } from 'sonner';
import ScrollToTop from './components/ScrollToTop';
import '../i18n';

function App() {

  return (
    <>
      <Router>
        <ScrollToTop/>
        <Navbar />
              <Toaster richColors position="top-center" />
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
