import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Platform from './pages/Platform';
import AINavtive from './pages/AINavtive';
import UseCases from './pages/UseCases';
import Security from './pages/Security';
import Sustainability from './pages/Sustainability';
import Theme from './pages/Theme';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPage = location.pathname.replace('/', '') || 'home';

  const handleNavigate = (page: string) => {
    navigate(page === 'home' ? '/' : `/${page}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout currentPage={currentPage} onNavigate={handleNavigate}>
      <Routes>
        <Route path="/" element={<Home onNavigate={handleNavigate} />} />
        <Route path="/platform" element={<Platform onNavigate={handleNavigate} />} />
        <Route path="/ai-native" element={<AINavtive onNavigate={handleNavigate} />} />
        <Route path="/use-cases" element={<UseCases onNavigate={handleNavigate} />} />
        <Route path="/security" element={<Security onNavigate={handleNavigate} />} />
        <Route path="/sustainability" element={<Sustainability onNavigate={handleNavigate} />} />
        <Route path="/theme" element={<Theme onNavigate={handleNavigate} />} />
        <Route path="*" element={<Home onNavigate={handleNavigate} />} />
      </Routes>
    </Layout>
  );
}

export default App;

