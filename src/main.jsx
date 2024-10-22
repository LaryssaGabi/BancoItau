import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './styles/globalStyles';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init({
  duration: 1200
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
)
