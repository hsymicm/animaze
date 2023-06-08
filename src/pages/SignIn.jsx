import '@/assets/styles/Auth.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { doc, getDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/modules/FIREBASE_CONFIG';
import { caption } from '@/modules/STRING_PROCESS';
import Button from '@/components/Button';

function SignIn() {
  const navigate = useNavigate();
  const { userSignIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();

    setLoading(true);
    const statusSignUp = toast.loading('Loading...');

    try {
      const userCredential = await userSignIn(email, password);

      const user = await getDoc(doc(db, 'users', userCredential.user.uid));
      const { displayName, username } = user.data();

      setEmail('');
      setPassword('');

      toast.success(`Welcome, ${displayName || username}`, {
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
      <form className="auth-card" onSubmit={handleSignIn}>
        <h3 className="auth-title">Sign In</h3>
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
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <p
            onClick={() => navigate('/resetpassword')}
            style={{ cursor: 'pointer' }}
            className="input-label-secondary"
          >
            Forgot Password?
          </p>
        </div>
        <Button
          disabled={loading}
          style={{ marginTop: '32px' }}
          className="btn btn-primary"
          label="Sign In"
          type="submit"
          width="100%"
        />
      </form>
      <p style={{ textAlign: 'center' }} className="input-label-secondary">
        {"Don't have an account? "}
        <span
          style={{ cursor: loading ? 'not-allowed' : '' }}
          onClick={() => {
            if (loading) return;
            navigate('/signup');
          }}
        >
          Sign Up
        </span>
      </p>
    </motion.div>
  );
}

export default SignIn;
