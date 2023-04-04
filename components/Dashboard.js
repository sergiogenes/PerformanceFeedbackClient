import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import UserTable from "../commons/AdminTables/UserTable";
import PositionTable from "../commons/AdminTables/PositionTable";
import OfficeTable from "../commons/AdminTables/OfficeTable";

const Dashboard = ({ user }) => {
  // Redux

  return (
    <>
      {user ? (
        <div
          style={{
            flexGrow: 1,
            padding: "2rem",
          }}
        >
          <Grid container spacing={2}>
            <UserTable />

            <PositionTable />

            <OfficeTable />
          </Grid>
        </div>
      ) : (
        <h1>NO ESTA LOGUEADO</h1>
      )}
    </>
  );
};

export default Dashboard;
