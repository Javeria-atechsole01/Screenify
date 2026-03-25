import React from 'react'
import { Container, Grid, Card, CardContent, CardActions, Typography, Button } from '@mui/material'
import './features.css'

const items = [
  { key: 'meeting-notes', title: 'Meeting Notes', desc: 'Instant recaps and action items.' },
  { key: 'screen-recorder', title: 'Screen Recorder', desc: 'Record and share in a few clicks.' },
  { key: 'screenshots', title: 'Screenshots', desc: 'Capture, annotate, and share fast.' },
  { key: 'ai', title: 'Loom AI', desc: 'Titles, chapters, and summaries automatically.' },
  { key: 'editing', title: 'Editing', desc: 'Trim, combine, and polish videos.' },
]

function Features() {
  return (
    <Container maxWidth="lg" className="features-page">
      <Typography variant="h3" className="page-title">Explore Features</Typography>
      <Grid container spacing={3}>
        {items.map((i) => (
          <Grid item xs={12} sm={6} md={4} key={i.key}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" className="card-title">{i.title}</Typography>
                <Typography className="card-sub">{i.desc}</Typography>
              </CardContent>
              <CardActions>
                <Button href="#" size="small">Learn more</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Features
