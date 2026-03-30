import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LandingPage from './pages/LandingPage';
import ConcertsPage from './pages/ConcertsPage';
import ConcertDetailPage from './pages/ConcertDetailPage';
import VerifyPage from './pages/VerifyPage';

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-brand-dark">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/concerts" element={<ConcertsPage />} />
              <Route path="/concerts/:id" element={<ConcertDetailPage />} />
              <Route path="/verify/:artistId" element={<VerifyPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}
