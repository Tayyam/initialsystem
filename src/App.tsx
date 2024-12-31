
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { Dashboard } from './pages/Dashboard';
import { useSidebarState } from './hooks/useSidebarState';
import { LoginScreen } from './components/auth/LoginScreen';
import { LandingPage } from './pages/LandingPage';
export function App() {

  const { isCollapsed } = useSidebarState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  if (showLanding) {
    return <LandingPage onStart={() => setShowLanding(false)} />;
  }

  if (!isAuthenticated) {
    return <LoginScreen onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex">
        <Sidebar />
        <div
          className={`flex-1 transition-all duration-300 ${
            isCollapsed ? 'mr-[4vw]' : 'mr-[16vw]'
          }`}
        >
          <Header />
          <main className="p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}