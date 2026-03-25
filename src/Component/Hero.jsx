import React from 'react'
import { Container, Box, Stack, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import './Hero.css'
import ShowcaseTabs from './ShowcaseTabs.jsx'
import VideoSection from '../Pages/VideoSection.jsx'
import CardSection from '../Pages/CardSection.jsx'
import TrustedSlider from '../Pages/TrustedSlider.jsx'
import ProgressSections from '../Pages/ProgressSections.jsx'

function Home() {
  return (
    <Box className="home-hero">
      <Container maxWidth="lg" className="home-container">
        <div className="sunlight">
          <span className="blob b1" />
          <span className="blob b2" />
          <span className="blob b3" />
          <span className="blob b4" />
        </div>
        <Stack spacing={3} alignItems="center" textAlign="center">
          <Typography variant="h3" className="home-title">Screenify — where ideas turn into videos.</Typography>
          <Typography variant="h5" className="home-title">Capture Anything. Share Everywhere.</Typography>
          <Typography className="home-sub">AI-powered video messages, meeting notes, and screenshots that help teams win back time and complete projects faster.</Typography>
          <Stack direction="row" spacing={2}>
            <Button component={Link} to="/try" variant="contained">Try for free</Button>
            <Button component={Link} to="/features" variant="outlined">Explore features</Button>
          </Stack>
        </Stack>
      </Container>
      <ShowcaseTabs />
      <VideoSection />
      <CardSection />
      <TrustedSlider />
      <ProgressSections />
    </Box>
  )
}

export default Home
