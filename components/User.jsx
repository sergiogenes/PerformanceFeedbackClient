import { UserCard } from "../commons/UserCard";
import { Grid, Container } from "@mui/material";
import { StaffMembers } from "./StaffMembers";

const team = { equipo: "Mi Equipo", jefes: "Mis Superiores" };

export function User({ user }) {
  return (
    <Container>
      <Grid
        container
        justify="center"
        alignItems="center"
        sx={{ width: "90%", mt: "10px" }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
          <Grid container direction="column" spacing={2}>
            {user.isAdmin ? (
              <>
                <UserCard user={user} />
              </>
            ) : (
              <>
                <UserCard user={user} />
                <StaffMembers team={team.equipo} />
                <StaffMembers team={team.jefes} />
              </>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
