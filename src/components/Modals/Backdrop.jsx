import '@/assets/styles/Modal.css';
import { motion } from 'framer-motion';

export default function Backdrop({ children, onClick, blur = true }) {
  return (
    <motion.div
      key="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15, ease: 'easeInOut' }}
      onClick={onClick}
      style={{
        zIndex: blur ? 999 : 101,
      }}
      className={blur ? 'backdrop backdrop-bg' : 'backdrop'}
    >
      {children}
    </motion.div>
  );
}
