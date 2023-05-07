import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

function NoAuthRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return !currentUser ? <Component {...props} /> : <Redirect to="/" />;
      }}
    />
  );
}

export default NoAuthRoute;
