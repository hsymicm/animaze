import '@/assets/styles/Style.css';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Layout from '@/components/Layout';
import Router from '@/routes/Router';
import Footer from '@/components/Footer';
import Modal from '@/components/Modals/Modal';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <>
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
