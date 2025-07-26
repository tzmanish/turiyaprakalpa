import { Route, Routes } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Problem from "./pages/Problem"
import Vision from "./pages/Vision"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import BGAnimator from "./components/BGAnimator"

function App() {
  return (

      <div className="flex flex-col justify-between min-h-screen">
        {/* <div className="h-screen w-screen fixed top-0 left-0 -z-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 backdrop-blur-lg opacity-30 blur-3xl"></div> */}
        <BGAnimator />
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/problem" element={<Problem />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>

  )
}

export default App
