import Navbar from "./shared/Navbar"
import 'flowbite';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./shared/NotFound";
import Footer from "./shared/Footer";

function App() {
  return (
    <div className="px-2 lg:w-4/5 mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
