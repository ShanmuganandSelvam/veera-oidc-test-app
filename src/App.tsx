import { useState } from 'react';
import { LoginPage } from './components/login-page';
import { Dashboard } from './components/dashboard';
import { CloudFrontThemeProvider } from './hooks/use-cloudfront-theme';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (email: string, password: string) => {
    // In a real app, you would validate credentials with an API
    console.log('Login attempt with:', { email, password });
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <CloudFrontThemeProvider defaultTheme="bayer">
      <div className="min-h-screen bg-gray-50">
        {isLoggedIn ? (
          <Dashboard onLogout={handleLogout} />
        ) : (
          <LoginPage onLogin={handleLogin} />
        )}
      </div>
    </CloudFrontThemeProvider>
  );
}

export default App;
