import React from 'react'
import { Container, Grid, Card, CardContent, Typography, Button, Stack } from '@mui/material'
import './resources.css'

function Resources() {
  return (
    <Container maxWidth="lg" className="resources-page">
      <Stack spacing={2} className="resources-header">
        <Typography variant="h3" className="page-title">Resources</Typography>
        <Typography className="card-sub">Everything you need to get started.</Typography>
      </Stack>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6">Loom 101 Demo</Typography>
              <Typography color="text.secondary">Get started with Loom video.</Typography>
            </CardContent>
            <Button className="resources-card-btn" variant="contained">Sign Up</Button>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6">Community</Typography>
              <Typography color="text.secondary">Peer learning and advice.</Typography>
            </CardContent>
            <Button className="resources-card-btn" variant="outlined">Join</Button>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6">Atlassian University</Typography>
              <Typography color="text.secondary">On‑demand learning.</Typography>
            </CardContent>
            <Button className="resources-card-btn" variant="outlined">Explore</Button>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Resources
