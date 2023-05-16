import '@/assets/styles/Style.css';
import '@/assets/styles/Profile.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faPen } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { db, storage } from '@/modules/FIREBASE_CONFIG';
import Button from '@/components/Button';
import { useAuth } from '@/contexts/AuthContext';

function Profile() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFilePath, setSelectedFilePath] = useState('');
  const [updatedProfile, setUpdatedProfile] = useState({});
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  const { currentUser, userSignOut, userVerify } = useAuth();
  const navigate = useNavigate();

  const handleFirestoreUpload = async (e) => {
    e.preventDefault();
    const statusUpdateProfile = toast.loading('Loading...');
    setUploading(true);

    const profileRef = doc(db, 'users', currentUser.uid);
    const storageRef = ref(
      storage,
      `users/${currentUser.uid}/profile-picture/profile-picture-${currentUser.uid}.jpg`
    );

    try {
      const updatedAt = Date.now();

      // Check if displayName is valid, if not return to original value
      if (!updatedProfile.displayName) {
        updatedProfile.displayName = profile.username;
      }

      const updateObj = Object.keys(updatedProfile)
        .filter((key) => updatedProfile[key] !== profile[key])
        .reduce((v, k) => Object.assign(v, { [k]: updatedProfile[k] }), {
          updatedAt,
        });

      // Upload File and Get Download URL
      if (selectedFile && selectedFilePath) {
        const storageSnapshot = await uploadBytes(storageRef, selectedFile);
        const downloadUrl = await getDownloadURL(storageSnapshot.ref);
        updateObj.profilePicture = downloadUrl;
      }

      // Update Firestore
      await updateDoc(profileRef, updateObj);
      setUploading(false);
      toast.success('Profile has been updated', {
        id: statusUpdateProfile,
      });
    } catch (err) {
      console.log(err);
      setUploading(false);
      toast.error('Error had happened', {
        id: statusUpdateProfile,
      });
    }
  };

  const handleClientUpload = (e) => {
    const file = e.target.files[0];
    if (Math.round(file.size / 1048576) > 2) {
      toast.error('Keep it under 2MB');
      return;
    }

    setSelectedFile(file);

    const reader = new FileReader();

    reader.onload = () => {
      setSelectedFilePath(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleWarning = () => {
    return (
      selectedFilePath ||
      Object.keys(updatedProfile).filter(
        (key) => updatedProfile[key] !== profile[key]
      ).length !== 0
    );
  };

  const resetProfile = (defaultProfile) => {
    setUpdatedProfile({
      displayName: defaultProfile.displayName,
      description: defaultProfile.description,
    });
    setSelectedFile(null);
    setSelectedFilePath('');
  };

  const verifyEmail = async () => {
    const verifyToast = toast.loading('Loading...');
    try {
      await userVerify();
      toast.success('Verification email sent', {
        id: verifyToast,
      });
    } catch (error) {
      toast.error('Error sending email', {
        id: verifyToast,
      });
    }
  };

  useEffect(() => {
    const profileRef = doc(db, 'users', currentUser.uid);
    const unsubscribe = onSnapshot(profileRef, (snapshot) => {
      if (snapshot.exists()) {
        setProfile(snapshot.data());
        resetProfile(snapshot.data());
      }
      setLoading(false);
    });

    return unsubscribe;
  }, [currentUser]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ position: 'relative' }}
      className="text-white glb-container"
    >
      {loading && (
        <>
          <div className="h3-skeleton skeleton-profile-bg" />
          <div
            className="profile-card-skeleton skeleton-profile-bg"
            style={{ display: 'flex', alignItems: 'center', gap: '24px' }}
          >
            <div
              style={{
                width: '82px',
                height: '82px',
                borderRadius: '99px',
              }}
              className="skeleton-profile-fg"
            />
            <div>
              <div
                style={{
                  width: '180px',
                  height: '24px',
                  marginBottom: '8px',
                }}
                className="skeleton-profile-fg"
              />
              <div
                style={{
                  width: '90px',
                  height: '16px',
                }}
                className="skeleton-profile-fg"
              />
            </div>
          </div>
          <div className="h3-skeleton skeleton-profile-bg" />
          <div
            className="profile-card-skeleton skeleton-profile-bg"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            <div style={{ width: '100%' }}>
              <div
                style={{
                  width: '90px',
                  height: '24px',
                  marginBottom: '8px',
                }}
                className="skeleton-profile-fg"
              />
              <div
                style={{
                  width: 'inherit',
                  height: '32px',
                }}
                className="skeleton-profile-fg"
              />
            </div>
            <div style={{ width: '100%' }}>
              <div
                style={{
                  width: '90px',
                  height: '24px',
                  marginBottom: '8px',
                }}
                className="skeleton-profile-fg"
              />
              <div
                style={{
                  width: 'inherit',
                  height: '32px',
                }}
                className="skeleton-profile-fg"
              />
            </div>
            <div style={{ width: '100%' }}>
              <div
                style={{
                  width: '90px',
                  height: '24px',
                  marginBottom: '8px',
                }}
                className="skeleton-profile-fg"
              />
              <div
                style={{
                  width: 'inherit',
                  height: '108px',
                }}
                className="skeleton-profile-fg"
              />
            </div>
          </div>
        </>
      )}
      {!loading && (
        <div id="profile-content">
          <div className="profile-container">
            <h3
              style={{
                marginTop: 0,
                marginBottom: 12,
              }}
            >
              Profile
            </h3>
            <div className="profile-card">
              <div className="profile-summary">
                <label htmlFor="file-upload" className="profile-upload-btn">
                  <FontAwesomeIcon icon={faUpload} size="sm" />
                  <input
                    value=""
                    onChange={handleClientUpload}
                    id="file-upload"
                    type="file"
                    hidden
                    accept="image/png, image/jpeg, image/jpg"
                  />
                </label>
                <img src={selectedFilePath || profile.profilePicture} />
              </div>
              <div className="profile-desc">
                {profile.displayName || profile.username}
                <span>
                  {currentUser.emailVerified ? 'Verified' : 'Not Verified'}
                </span>
              </div>
            </div>
            <div className="profile-btn" style={{ marginTop: '12px' }}>
              {!currentUser.emailVerified && (
                <Button
                  disabled={uploading}
                  onClick={verifyEmail}
                  label="Verify Email"
                  className="btn btn-primary"
                />
              )}
              <Button
                disabled={uploading}
                onClick={() => {
                  navigate('/');
                  userSignOut();
                  toast("You've been Signed out", {
                    duration: 2000,
                  });
                }}
                label="Sign Out"
                className="btn btn-secondary"
              />
            </div>
          </div>
          <div className="details-container">
            <h3
              style={{
                marginTop: 0,
                marginBottom: 12,
              }}
            >
              Details
            </h3>
            <div className="details-card">
              <label
                htmlFor="display-name"
                style={{
                  marginBottom: 0,
                }}
                className="details-input-label"
              >
                Display Name
                <span>
                  <FontAwesomeIcon icon={faPen} size="xs" />
                </span>
                <input
                  value={updatedProfile.displayName}
                  onChange={(e) =>
                    setUpdatedProfile({
                      ...updatedProfile,
                      displayName: e.target.value,
                    })
                  }
                  type="text"
                  id="display-name"
                  placeholder={profile.username}
                  autoComplete="off"
                />
              </label>
              <p style={{ fontSize: '0.7rem', opacity: 0.5, margin: '8px 0' }}>
                The default display name is the same as your username.
              </p>
              <label htmlFor="username" className="details-input-label">
                Username
                <input
                  value={profile.username}
                  disabled
                  style={{ cursor: 'not-allowed', opacity: 0.5 }}
                  type="text"
                  id="username"
                  autoComplete="off"
                />
              </label>
              <label htmlFor="email" className="details-input-label">
                Email
                <input
                  value={profile.email}
                  disabled
                  style={{ cursor: 'not-allowed', opacity: 0.5 }}
                  type="text"
                  id="email"
                  autoComplete="off"
                />
              </label>
              <label htmlFor="description" className="details-input-label">
                Description
                <span>
                  <FontAwesomeIcon icon={faPen} size="xs" />
                </span>
                <textarea
                  value={updatedProfile.description}
                  onChange={(e) =>
                    setUpdatedProfile({
                      ...updatedProfile,
                      description: e.target.value,
                    })
                  }
                  style={{
                    resize: 'vertical',
                    minHeight: '108px',
                  }}
                  className="desc-input"
                  type="text"
                  id="description"
                  placeholder="Express your self here!"
                  autoComplete="off"
                />
              </label>
            </div>
          </div>
        </div>
      )}
      <AnimatePresence>
        {handleWarning() && (
          <motion.div
            initial={{ bottom: '-100%' }}
            animate={{ bottom: 0 }}
            exit={{ bottom: '-100%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="glb-container update-warning"
          >
            <h4 style={{ margin: 0 }}>Careful, you have unsaved changes!</h4>
            <div className="details-btn">
              <Button
                disabled={uploading}
                className="btn btn-secondary"
                label="Reset"
                onClick={() => {
                  setSelectedFilePath('');
                  resetProfile(profile);
                }}
              />
              <Button
                disabled={uploading}
                onClick={handleFirestoreUpload}
                className="btn btn-primary"
                label="Save"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
}

export default Profile;
