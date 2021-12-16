/* eslint-disable */
import { Route, Redirect, RouteProps } from 'react-router-dom';
/* eslint-disable */

const PrivateRoute = ({
  children,
  component: Component,
  ...rest
}: RouteProps & Required<Pick<RouteProps, 'component'>>): JSX.Element => {
  const token = sessionStorage.getItem('YAS_USER_TOKEN');

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to="/mypage/signin" />
      }
    />
  );
};

export default PrivateRoute;
