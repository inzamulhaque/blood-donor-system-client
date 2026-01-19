import type { ReactNode } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";

type TPublicRouteProps = {
  children: ReactNode;
};

const PublicRoute = ({ children }: TPublicRouteProps) => {
  const user = useAppSelector(useCurrentUser);

  if (user?.role) {
    return <Navigate to={`/${user?.role}/dashboard`} replace={true} />;
  }

  return children;
};

export default PublicRoute;
