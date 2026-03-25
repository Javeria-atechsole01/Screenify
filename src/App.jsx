import React from 'react'
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Component/Navbar.jsx'
import Hero from './Component/Hero.jsx'
import Footer from './Component/Footer.jsx'
import CursorFollower from './Component/CursorFollower.jsx'
import Features from './Pages/Features.jsx'
import Resources from './Pages/Resources.jsx'
import Events from './Pages/Events.jsx'
import TryFree from './Pages/TryFree.jsx'
import Signup from './Pages/Signup.jsx'
import ProgressSections from './Pages/ProgressSections.jsx'

function makeTheme(mode){
  return createTheme({
    palette: {
      mode,
      primary: { main: '#0A66FF' },
      secondary: { main: mode === 'dark' ? '#E5E7EB' : '#172B4D' },
      background: { default: mode === 'dark' ? '#0E1217' : '#F4F5F7' },
      text: { primary: mode === 'dark' ? '#E5E7EB' : '#172B4D' },
    },
    shape: { borderRadius: 10 },
  })
}

function App() {
  const [mode, setMode] = React.useState(() => localStorage.getItem('screenify_theme') || 'light')
  React.useEffect(() => {
    localStorage.setItem('screenify_theme', mode)
    const cls = 'dark-theme'
    const root = document.documentElement
    if (mode === 'dark') root.classList.add(cls)
    else root.classList.remove(cls)
  }, [mode])
  const theme = React.useMemo(() => makeTheme(mode), [mode])
  const toggleTheme = () => setMode(m => m === 'light' ? 'dark' : 'light')
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CursorFollower />
      <Navbar themeMode={mode} onToggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/features" element={<Features />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/events" element={<Events />} />
        <Route path="/try" element={<TryFree />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/progress" element={<ProgressSections />} />
     
      </Routes>
      <Footer />
    </ThemeProvider>
  )
}

export default App
