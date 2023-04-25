import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

function PrivateRoute({ element }) {
  const { currentUser } = useAuth();

  return currentUser ? (
    element
  ) : (
    <main>
      <Navigate to="/signin" />
    </main>
  );
}

export default PrivateRoute;
