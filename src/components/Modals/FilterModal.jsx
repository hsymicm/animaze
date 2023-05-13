import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import Backdrop from '@/components/Modals/Backdrop';
import Aside from '@/components/Aside';
import '@/assets/styles/Modal.css';
import '@/assets/styles/Style.css';

export default function FilterModal({ handleClose, SET_FILTER, FILTER, obj }) {
  const { Shows, Order } = obj;
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        onClick={(e) => e.stopPropagation()}
        className="filter-box modal-padding text-white"
      >
        <div className="filter-header">
          <h3 style={{ margin: 0 }}>Options</h3>
          <div
            data-tooltip-id="tooltip"
            data-tooltip-content="Close Filter Window"
          >
            <FontAwesomeIcon
              style={{ cursor: 'pointer' }}
              onClick={handleClose}
              icon={faXmark}
              size="xl"
            />
          </div>
        </div>
        <Aside SET_FILTER={SET_FILTER} FILTER={FILTER} obj={{ Shows, Order }} />
      </motion.div>
    </Backdrop>
  );
}
