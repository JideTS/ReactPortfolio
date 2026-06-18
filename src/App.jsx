import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import { Footer } from './components/Footer';

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    const element = document.getElementById(hash.slice(1));
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [hash, pathname]);

  return null;
};

function App() {
  return (
    <div className="app-shell">
      <ScrollToHash />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
