
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

const root=createRoot(document.getElementById('root'))
root.render(
    <>
    <Navbar />
    <App />
    <Footer/>

    </>

);
