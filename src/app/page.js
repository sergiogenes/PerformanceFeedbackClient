'use client'

import { Typography } from '@mui/material'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

import Login from './components/Login'

export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'primary.dark',
      }}
    >
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '50%',
          height: '450px',
          paddingTop: '56px',
          paddingLeft: '40px',
          paddingRight: '40px',
          paddingBottom: '56px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '66px',
            justifyContent: 'space-between',
          }}
        >
          <Typography>Te damos la bienvenida a</Typography>
          <Image
            src="/GlobalNews.svg"
            alt="GlobalNews Group Logo"
            // className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
        </Box>
        <Login />
      </Paper>
    </Box>
  )
}
