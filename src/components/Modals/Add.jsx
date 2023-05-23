// IMPORT ASSETS
import '@/assets/styles/Add.css';
import '@/assets/styles/Style.css';
import '@/assets/styles/Modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

// IMPORT COMPONENTS
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import ComboBox from '@/components/ComboBox';
import Button from '@/components/Button';
import Incremental from '@/components/Incremental';
import TextArea from '@/components/TextArea';

// IMPORT MODULE
import getColor from '@/modules/HEX_CONVERT';
import {
  addWatchList,
  delWatchList,
  updateWatchList,
} from '@/modules/SHOWS_STORE';
import { useAuth } from '@/contexts/AuthContext';

const STATUS_OPTIONS = ['Watching', 'Completed', 'Planning'];
const gradient =
  'linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3))';

export default function Add({ handleClose, data, id, status, isUpdate }) {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const [loading, setLoading] = useState(false);
  const [Status, setStatus] = useState(status || null);
  const [detail, setDetail] = useState(
    isUpdate
      ? data
      : {
          ...data,
          progress: null,
          score: null,
          notes: '',
        }
  );

  const functionHandler = async (func, toastMsg) => {
    const { success, error } = toastMsg;

    const statusSave = toast.loading('Loading...');

    if (!currentUser) {
      toast.error('You must be logged in', {
        id: statusSave,
      });
      return;
    }

    setLoading(true);

    try {
      await func();
      toast.success(success, {
        id: statusSave,
      });
    } catch (err) {
      console.log(err);
      toast.error(error, {
        id: statusSave,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (details, saveStatus = null) => {
    if (!saveStatus) return;
    await functionHandler(
      async () => {
        await addWatchList(details, saveStatus, currentUser);
        handleClose();
        navigate('/watchlist');
      },
      {
        success: 'Data has been added',
        error: 'Error, data cannot be added',
      }
    );
  };

  const handleDelete = async (deleteId, deleteStatus) => {
    if (!deleteId) return;
    await functionHandler(
      async () => {
        await delWatchList(deleteId, deleteStatus, currentUser);
        handleClose();
      },
      {
        success: 'Data has been deleted',
        error: 'Error, data cannot be deleted',
      }
    );
  };

  const handleUpdate = async (updateId, currentStatus, updatedStatus, show) => {
    if (!updateId) return;
    await functionHandler(
      async () => {
        if (show !== data) {
          await updateWatchList(
            updateId,
            currentStatus,
            updatedStatus,
            show,
            currentUser
          );
        }
        handleClose();
      },
      {
        success: 'Data has been updated',
        error: 'Error, data cannot be updated',
      }
    );
  };

  return (
    <motion.div
      initial={isUpdate ? { scale: 0.9, opacity: 0 } : false}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      onClick={(e) => e.stopPropagation()}
      className="modal-box text-white"
    >
      <div
        style={{
          background: `${gradient},url(${data?.banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="modal-header modal-padding"
      >
        <div className="modal-title">
          <img
            style={{
              boxShadow: `0 4px 16px ${getColor(data.cover.color, 0.2)}`,
              backgroundColor: getColor(data.cover.color, 1, 0.25, 0.25),
            }}
            className="cover"
            src={data?.cover?.url}
            alt={`${
              data.title.english ? data.title.english : data.title.romaji
            } cover`}
          />
          <div className="title">
            {data.title.english ? data.title.english : data.title.romaji}
          </div>
        </div>
        <div data-tooltip-id="tooltip" data-tooltip-content="Close Window">
          <FontAwesomeIcon
            style={{ cursor: 'pointer' }}
            onClick={handleClose}
            icon={faXmark}
            size="xl"
          />
        </div>
      </div>
      <div className="modal-padding modal-content">
        <div className="modal-row">
          <div className="modal-item">
            <h4>Status</h4>
            <ComboBox
              getSelected={(val) => setStatus(val)}
              filter="Status"
              options={STATUS_OPTIONS}
              defaultVal={status}
            />
          </div>
          <div className="modal-item">
            <h4>Score</h4>
            <Incremental
              getValue={(val) => {
                setDetail({ ...detail, score: val });
              }}
              increase={5}
              limit={100}
              defaultVal={data?.score}
            />
          </div>
          <div className="modal-item">
            <h4>Episode</h4>
            <Incremental
              getValue={(val) => {
                setDetail({ ...detail, progress: val });
              }}
              increase={1}
              limit={data.episodes ? data.episodes : 0}
              defaultVal={data?.progress}
            />
          </div>
        </div>
        <div className="modal-item">
          <TextArea
            label="Notes"
            getText={(val) => setDetail({ ...detail, notes: val })}
            defaultVal={data?.notes}
          />
        </div>
        <div className="modal-btn">
          <div className="right-btn">
            <Button
              disabled={loading}
              onClick={isUpdate ? () => handleDelete(id, status) : handleClose}
              className="btn btn-secondary"
              label={isUpdate ? 'Delete' : 'Cancel'}
              width="128px"
            />
            <Button
              disabled={loading}
              onClick={() => {
                if (isUpdate) handleUpdate(id, status, Status, detail);
                else handleSave(detail, Status);
              }}
              className="btn btn-primary"
              label="Save"
              width="128px"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
