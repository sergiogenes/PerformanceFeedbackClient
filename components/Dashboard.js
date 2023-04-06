import { useSelector } from "react-redux";

const Dashboard = () => {
  // Redux
  const user = useSelector((state) => state.user);
  return <>{user ? <h1>ACA VA EL DASHBOARD</h1> : <h1>NO ESTA LOGUEADO</h1>}</>;
};

export default Dashboard;
