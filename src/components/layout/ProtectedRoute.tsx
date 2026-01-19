import { useEffect, type ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  logout,
  useCurrentToken,
  useCurrentUser,
} from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";
import { useSignOutMutation } from "../../redux/features/auth/authApi";

type TProtectedRouteProps = {
  children: ReactNode;
  role: string | undefined;
};

const ProtectedRoute = ({ children, role }: TProtectedRouteProps) => {
  const [signOut] = useSignOutMutation();
  const token = useAppSelector(useCurrentToken);
  const user = useAppSelector(useCurrentUser);

  const dispatch = useAppDispatch();

  // const handleSignOut = async () => {
  //   await signOut({}).unwrap();
  //   dispatch(logout());
  //   return <Navigate to="/signin" replace={true} />;
  // };

  // if (role !== undefined && role !== user?.role) {
  //   dispatch(logout());
  //   return <Navigate to="/signin" replace={true} />;
  //   handleSignOut().then();
  // }

  useEffect(() => {
    if (role !== undefined && role !== user?.role) {
      (async function () {
        await signOut({}).unwrap();
        dispatch(logout());
        <Navigate to="/signin" replace={true} />;
      })();
    }
  }, [role, user?.role, dispatch, signOut]);

  if (!token) {
    return <Navigate to="/signin" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
