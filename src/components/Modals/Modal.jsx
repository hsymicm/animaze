import '@/assets/styles/Modal.css';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Backdrop from '@/components/Modals/Backdrop';
import Add from '@/components/Modals/Add';
import Browse from '@/components/Modals/Browse';

export default function Modal({ handleClose, scrollPos, id, objUpdate }) {
  const [data, setData] = useState(objUpdate ? objUpdate.obj : []);
  const [isAdd, setIsAdd] = useState(!!objUpdate);
  const handleData = (result) => {
    setData(result);
    setIsAdd(true);
  };
  return (
    <Backdrop scrollPos={scrollPos} onClick={handleClose}>
      <AnimatePresence>
        {!isAdd && <Browse getData={handleData} handleClose={handleClose} />}
        {isAdd && (
          <Add
            handleClose={handleClose}
            data={data}
            id={id}
            status={objUpdate?.status}
            isUpdate={!!objUpdate}
          />
        )}
      </AnimatePresence>
    </Backdrop>
  );
}
