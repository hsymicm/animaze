import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useAuth } from '@/contexts/AuthContext';

function PrivateRoute({ element }) {
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) toast.error('You need to be signed in');
  }, []);

  return currentUser ? (
    element
  ) : (
    <main>
      <Navigate to="/signin" />
    </main>
  );
}

export default PrivateRoute;
