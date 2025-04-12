import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AOS from 'aos'
import "aos/dist/aos.css"
// Initialize AOS
AOS.init({
  offset: 120, // Offset from trigger point
  duration: 1000, // Animation duration
  easing: "ease-in-out", // Easing function
  once: true, // Animation occurs only once
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
