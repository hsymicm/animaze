import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import { MobileProvider } from '@/contexts/MobileContext';
import 'react-tooltip/dist/react-tooltip.css';
import App from '@/pages/App';

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <AuthProvider>
      <MobileProvider>
        <App />
      </MobileProvider>
    </AuthProvider>
  </BrowserRouter>
);
