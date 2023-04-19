import '@/assets/styles/Auth.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getDoc, doc, writeBatch } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { auth, db } from '@/modules/FIREBASE_CONFIG';
import { caption } from '@/modules/STRING';

import Button from '@/components/Button';

function SignUp() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();

    setLoading(true);
    const statusSignUp = toast.loading('Loading...');

    try {
      // Check username
      if (!username) {
        toast.error('Invalid username', {
          id: statusSignUp,
        });
        setLoading(false);
        return;
      }

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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const createdAt = Date.now();
      const updatedAt = createdAt;

      // Add new user to USERS collection
      const userId = userCredential.user.uid;
      const batch = writeBatch(db);
      const usernameRef = doc(db, 'usernames', username);
      const userRef = doc(db, 'users', userId);
      batch.set(userRef, {
        username,
        email,
        createdAt,
        updatedAt,
      });
      batch.set(usernameRef, { uid: userId });

      await batch.commit();

      setUsername('');
      setEmail('');
      setPassword('');

      toast.success('User created', {
        id: statusSignUp,
      });
    } catch (err) {
      const code = err.code.split('/');

      if (code[0] !== 'auth') {
        console.log(err);
      } else {
        toast.error(caption(code[1].replaceAll('-', ' ')), {
          id: statusSignUp,
        });
      }
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
            placeholder="example@aniwatch.com"
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
      <p className="input-label-secondary">
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
