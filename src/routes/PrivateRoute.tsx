import { ReactNode } from "react";
import { useAppSelector } from "../redux/hooks";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/ui/Spinner";



interface IProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: IProps) => {
  const location = useLocation();
  const { email,userLoader } = useAppSelector((state) => state.user);
  if(userLoader && !email){
    return  <Spinner/>
  }
  if (email) {
    return children
  }
  return Navigate({ to: "/login", state: { from: location }, replace: true });
};

export default PrivateRoute;
