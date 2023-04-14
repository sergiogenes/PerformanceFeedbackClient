import React from "react";
import TeamGrid from "../../../components/TeamGrid/TeamGrid";
import IsAdmin from "../../../commons/IsAdmin";

const TeamPage = () => {
  return (
    <IsAdmin>
      <TeamGrid />
    </IsAdmin>
  );
};

export default TeamPage;
