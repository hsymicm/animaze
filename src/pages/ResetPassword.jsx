import '@/assets/styles/Auth.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { useAuth } from '@/contexts/AuthContext';
import { caption } from '@/modules/STRING_PROCESS';
import Button from '@/components/Button';

function ResetPassword() {
  const navigate = useNavigate();
  const { userResetPassword } = useAuth();

  const [email, setEmail] = useState('');

  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error('Error, invalid email');
    } else {
      setLoading(true);
      const toastReset = toast.loading('Loading...');
      try {
        await userResetPassword(email);
        toast.success('Reset email sent', {
          id: toastReset,
        });
        setEmail('');
      } catch (err) {
        const code = err.code.split('/');

        toast.error(
          code[0] !== 'auth'
            ? 'Error, try again later'
            : caption(code[1].replaceAll('-', ' ')),
          {
            id: toastReset,
          }
        );
      }
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fullscreen-container"
    >
      <form className="auth-card" onSubmit={handleResetPassword}>
        <h3 className="auth-title">Reset Password</h3>
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
        <p style={{ fontSize: '0.7rem', opacity: 0.5 }}>
          Input your account email address to reset your password
        </p>
        <Button
          disabled={loading}
          style={{ marginTop: '24px' }}
          className="btn btn-primary"
          label="Reset Password"
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

export default ResetPassword;
