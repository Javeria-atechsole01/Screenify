import React from 'react'
import { Box, Container, Stack, Typography, Link as MLink } from '@mui/material'
import { Link } from 'react-router-dom'
import './Footer.css'
import logo from '../assets/screenify.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import YouTubeIcon from '@mui/icons-material/YouTube'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

function Footer() {
  return (
    <Box className="footer-root">
      <Container maxWidth="lg">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logo} alt="Screenify" className="footer-logo" />
            <span className="footer-name">screenify</span>
          </div>
          <div className="footer-cols">
            <div>
              <div className="footer-col-title">Product</div><br/>
              <MLink component={Link} to="/" className="footer-link">Home</MLink><br/>
              <MLink component={Link} to="/features" className="footer-link">Features</MLink><br/>
              <MLink component={Link} to="/resources" className="footer-link">Resources</MLink><br/>
              <MLink component={Link} to="/events" className="footer-link">Events</MLink>
            </div>
            <div>
              <div className="footer-col-title">Follow Us</div>
              <MLink href="https://www.linkedin.com/in/mustansarriaz/?originalSubdomain=pk" target="_blank" rel="noreferrer" className="footer-social" aria-label="LinkedIn">
                <LinkedInIcon className="social-icon linkedin" />
              </MLink>
              <MLink href="https://www.youtube.com/@mustansarriazofficial" target="_blank" rel="noreferrer" className="footer-social" aria-label="YouTube">
                <YouTubeIcon className="social-icon youtube" />
              </MLink>
              <span className="footer-social" aria-label="WhatsApp">
                <WhatsAppIcon className="social-icon whatsapp" />
              </span>
            </div>
          </div>
        </div>
        <div className="footer-divider" />
        <div className="footer-bottom">
          <Typography className="footer-copy">Copyright © {new Date().getFullYear()} Screenify, All Rights Reserved</Typography>
          <div className="footer-legal">
            <MLink href="#" underline="none">Privacy Policy</MLink>
            <MLink href="#" underline="none">Terms of Service</MLink>
            <MLink href="#" underline="none">Cookies Settings</MLink>
          </div>
        </div>
      </Container>
    </Box>
  )
}

export default Footer
