import TeamGrid from "./TeamGrid/TeamGrid";

const Dashboard = ({ user }) => {
  // Redux

  return <>{user ? <TeamGrid /> : <h1>NO ESTA LOGUEADO</h1>}</>;
};

export default Dashboard;
