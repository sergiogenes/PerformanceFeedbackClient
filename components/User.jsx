import React, { useState, useEffect, Suspense } from 'react'
import { Grid, Container } from '@mui/material'
import axios from 'axios'
import { UserCard } from '../commons/UserCard'
import { useSelector } from 'react-redux'
import UserList from './UserList/UserList'
import TeamCard from './TeamGrid/TeamCard'
import Dashboard from './Dashboard'

export function User() {
  // States
  const [myTeam, setMyTeam] = useState([])

  // Redux
  const user = useSelector(store => store.user)

  // Effects
  useEffect(() => {
    if (user.teamId === null) return

    axios
      .get(`http://localhost:3001/teams/${user.teamId}`, {
        withCredentials: true,
      })
      .then(res => setMyTeam(res.data))
      .catch(error => console.log(error))
  }, [])
  return (
    <Suspense fallback={<h1>Cargando...</h1>}>
      <Container>
        <Grid container spacing={2}>
          {user.isAdmin ? (
            <>
              <Dashboard />
            </>
          ) : (
            <>
              <UserCard user={user} />
              <TeamCard team={myTeam} />

              <UserList />
            </>
          )}
        </Grid>
      </Container>
    </Suspense>
  )
}
