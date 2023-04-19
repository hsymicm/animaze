import '@/assets/styles/Style.css';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import Layout from '@/components/Layout';
import Router from '@/routes/Router';
import Footer from '@/components/Footer';
import Modal from '@/components/Modals/Modal';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              border: '2px solid #2f3b48',
              backgroundColor: '#1c242b',
              borderRadius: '8px',
              color: '#e5e5e5',
            },
            success: {
              style: {
                border: '2px solid #19b33d',
              },
              iconTheme: {
                primary: '#19b33d',
                secondary: '#e5e5e5',
              },
            },
            error: {
              style: {
                border: '2px solid #b31924',
              },
              iconTheme: {
                primary: '#b31924',
                secondary: '#e5e5e5',
              },
            },
          }}
        />
      </div>
      <Layout menu={menu} setMenu={setMenu} onEmit={() => setIsOpen(true)} />
      <AnimatePresence>
        {isOpen && (
          <Modal
            scrollPos={window.scrollY}
            handleClose={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
      <Router onEmit={() => setIsOpen(true)} />
      <Footer setMenu={setMenu} />
    </>
  );
}
