import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);

// Handle SPA refresh redirects (e.g., GitHub Pages)
try {
  const storedPath = sessionStorage.getItem('spa_redirect_path');
  if (storedPath) {
    sessionStorage.removeItem('spa_redirect_path');
    // Use history API to navigate without reloading
    if (location.pathname !== storedPath) {
      history.replaceState(null, '', storedPath);
    }
  }
} catch {}