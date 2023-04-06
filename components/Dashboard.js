import TeamGrid from "./TeamGrid/TeamGrid";
import { useSelector } from "react-redux";

const Dashboard = () => {
  // Redux
  const user = useSelector((state) => state.user);
  return <>{user ? <TeamGrid /> : <h1>NO ESTA LOGUEADO</h1>}</>;
};

export default Dashboard;
