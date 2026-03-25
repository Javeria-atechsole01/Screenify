import React from 'react'
import { Container, Typography, Stack, List, ListItem, ListItemText, Button } from '@mui/material'
import './events.css'

function Events() {
  const items = [
    { title: 'Product Demo Webinar', date: 'Jan 15' },
    { title: 'Async Collaboration Summit', date: 'Feb 3' },
    { title: 'AI in Video Workflows', date: 'Mar 12' },
  ]
  return (
    <Container maxWidth="lg" className="events-page">
      <Stack spacing={2} className="events-header">
        <Typography variant="h3" className="page-title">Events</Typography>
        <Typography className="card-sub">Join live sessions and learn from experts.</Typography>
      </Stack>
      <List>
        {items.map((i) => (
          <ListItem key={i.title} secondaryAction={<Button variant="outlined">Register</Button>}>
            <ListItemText primary={i.title} secondary={i.date} />
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

export default Events
