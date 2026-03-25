import React from 'react'
import { Container, Typography, Stack, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import './try.css'

function TryFree() {
  return (
    <Container maxWidth="sm" className="try-page">
      <Stack spacing={2}>
        <Typography variant="h3" className="page-title">Start a free trial</Typography>
        <Typography className="card-sub">Create your first recording today.</Typography>
        <Button component={Link} to="/signup" variant="contained" size="large">Sign up</Button>
      </Stack>
    </Container>
  )
}

export default TryFree
