import '@/assets/styles/Auth.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { getDoc, doc, writeBatch } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import toast from 'react-hot-toast';
import { db, storage } from '@/modules/FIREBASE_CONFIG';
import { useAuth } from '@/contexts/AuthContext';
import { caption } from '@/modules/STRING_PROCESS';

import Button from '@/components/Button';

function SignUp() {
  const navigate = useNavigate();
  const { userSignUp } = useAuth();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();

    setLoading(true);
    const statusSignUp = toast.loading('Loading...');

    // Check username
    if (!username) {
      toast.error('Invalid username', {
        id: statusSignUp,
      });
      setLoading(false);
      return;
    }

    try {
      const usernameCheckRef = doc(db, 'usernames', username);
      const usernameDoc = await getDoc(usernameCheckRef);

      if (usernameDoc.exists()) {
        toast.error('Username is not available', {
          id: statusSignUp,
        });
        setLoading(false);
        return;
      }

      // Create user auth
      const { user } = await userSignUp(email, password);

      const createdAt = Date.now();
      const updatedAt = createdAt;
      const url = await getDownloadURL(
        ref(storage, 'default/default_profile.jpg')
      );

      // Add new user to USERS and USERNAMES collection
      const userId = user.uid;
      const batch = writeBatch(db);
      const usernameRef = doc(db, 'usernames', username);
      const userRef = doc(db, 'users', userId);
      const watchListRef = doc(db, 'watchlists', userId);
      batch.set(userRef, {
        username,
        displayName: username,
        description: '',
        email,
        profilePicture: url,
        createdAt,
        updatedAt,
      });
      batch.set(usernameRef, { uid: userId });
      batch.set(watchListRef, {
        isPublic: true,
        watchList: {
          watching: [],
          completed: [],
          planning: [],
        },
        createdAt,
        updatedAt,
      });

      await batch.commit();

      setUsername('');
      setEmail('');
      setPassword('');

      toast.success('User created', {
        id: statusSignUp,
      });

      navigate('/');
    } catch (err) {
      const code = err.code.split('/');

      toast.error(
        code[0] !== 'auth'
          ? 'Error, try again later'
          : caption(code[1].replaceAll('-', ' ')),
        {
          id: statusSignUp,
        }
      );
    }

    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fullscreen-container"
    >
      <form className="auth-card" onSubmit={handleSignUp}>
        <h3 className="auth-title">Sign Up</h3>
        <label htmlFor="username" className="input-label">
          Username
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            id="username"
            required
          />
        </label>
        <label htmlFor="email" className="input-label">
          Email Address
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="example@animaze.site"
            type="text"
            id="email"
            required
          />
        </label>
        <label htmlFor="password" className="input-label">
          Password
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            id="password"
            required
          />
        </label>
        <p style={{ fontSize: '0.7rem', opacity: 0.5 }}>
          Passwords must contain at least six characters, including at least 1
          letter and 1 number.
        </p>
        <Button
          disabled={loading}
          style={{ marginTop: '24px' }}
          className="btn btn-primary"
          label="Sign Up"
          type="submit"
          width="100%"
        />
      </form>
      <p style={{ textAlign: 'center' }} className="input-label-secondary">
        {'Already have an account? '}
        <span
          style={{ cursor: loading ? 'not-allowed' : '' }}
          onClick={() => {
            if (loading) return;
            navigate('/signin');
          }}
        >
          Sign In
        </span>
      </p>
    </motion.div>
  );
}

export default SignUp;
