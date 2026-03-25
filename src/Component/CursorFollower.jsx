import React from 'react'
import PhotoCameraRoundedIcon from '@mui/icons-material/PhotoCameraRounded'
import './CursorFollower.css'

function CursorFollower() {
  const ref = React.useRef(null)
  const [visible, setVisible] = React.useState(true)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let tx = x
    let ty = y
    let raf

    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouch) setVisible(false)

    const onMove = (e) => {
      tx = e.clientX
      ty = e.clientY
      setVisible(true)
    }
    const animate = () => {
      x += (tx - x) * 0.2
      y += (ty - y) * 0.2
      el.style.transform = `translate(${x}px, ${y}px)`
      raf = requestAnimationFrame(animate)
    }
    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div ref={ref} className={`cursor-follower ${visible ? '' : 'hidden'}`}>
      <div className="cursor-body">
        <PhotoCameraRoundedIcon className="cursor-icon" fontSize="small" />
        <span className="rec-dot" />
      </div>
    </div>
  )
}

export default CursorFollower
