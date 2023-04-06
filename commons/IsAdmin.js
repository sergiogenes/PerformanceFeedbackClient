import { useSelector } from "react-redux";
import BloquedCard from "./Cards/BloquedCard";

const IsAdmin = ({ children }) => {
  const user = useSelector((state) => state.user);
  return user.isAdmin ? <>{children}</> : <BloquedCard />;
};

export default IsAdmin;
