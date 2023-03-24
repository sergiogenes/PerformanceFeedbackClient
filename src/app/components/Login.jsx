import { useState } from 'react'
import { Box, TextField, Button } from '@mui/material'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '200px',
        }}
        component="form"
        noValidate
        autoComplete="off"
      >
        <TextField name="email" value={email} onChange={e => setEmail(e.target.value)} required id="email" label="Correo electrónico" />
        <TextField
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          id="password"
          type="password"
          autoComplete="current-password"
          label="Constraseña"
        />
        <Button variant="contained">Ingresá</Button>
      </Box>
    </Box>
  )
}

export default Login
