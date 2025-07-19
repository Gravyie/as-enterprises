import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import NavBar from "./components/Navbar"
import LandingPage from "./pages/LandingPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/Contact Page"

function App() {
  return (
    <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App
