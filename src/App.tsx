import { useState } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import AINavtive from './pages/AINavtive';
import Platform from './pages/Platform';
import Security from './pages/Security';
import Sustainability from './pages/Sustainability';
import Theme from './pages/Theme';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'ai-native':
        return <AINavtive />;
      case 'platform':
        return <Platform />;
      case 'security':
        return <Security />;
      case 'sustainability':
        return <Sustainability />;
      case 'theme':
        return <Theme />;
      default:
        return <Home />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
}

export default App;
