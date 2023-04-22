import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css';
import App from '@/pages/App';
import { AuthProvider } from './modules/AUTH_CONTEXT';

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
