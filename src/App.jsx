import React from "react";
import 'flowbite';
import Navbar from "./shared/Navbar"
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./shared/NotFound";
import Footer from "./shared/Footer";
import { Suspense } from "react";
import Loading from "./component/Loading";
import Hotel from "./pages/Hotel/Hotel";
const Help = React.lazy(() => import("./pages/Help/Help"));
const HostHotel = React.lazy(() => import("./pages/HostHotel/HostHotel"));
const SignUp = React.lazy(() => import("./pages/Signup/SignUp"));
const Login = React.lazy(() => import("./pages/Login/Login"));

function App() {
  return (
    <div className="px-2 lg:w-4/5 mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/host-hotel" element={<Suspense fallback={<Loading />}><HostHotel /></Suspense>} />
        <Route path="/help" element={<Suspense fallback={<Loading />}><Help /></Suspense>} />
        <Route path="/login" element={<Suspense fallback={<Loading />}><Login /></Suspense>} />
        <Route path="/signup" element={<Suspense fallback={<Loading />}><SignUp /></Suspense>} />
        <Route path="/hotels" element={<Hotel />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
