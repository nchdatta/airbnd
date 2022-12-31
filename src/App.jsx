import React, { Suspense } from "react";
import 'flowbite';
import Navbar from "./shared/Navbar"
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./shared/NotFound";
import Footer from "./shared/Footer";
import Loading from "./component/Loading";
import Hotels from "./pages/Hotels/Hotels";
import RequireAuth from "./shared/RequireAuth";
const Booking = React.lazy(() => import("./pages/Hotel/Booking"));
const Hotel = React.lazy(() => import("./pages/Hotel/Hotel"));
const Dashboard = React.lazy(() => import("./pages/Dashboard/Dashboard"));
const SignUp = React.lazy(() => import("./pages/Signup/SignUp"));
const Login = React.lazy(() => import("./pages/Login/Login"));

function App() {
  return (
    <>
      <Navbar />
      <div className="px-2 lg:w-4/5 mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard/*" element={<Suspense fallback={<Loading />}><RequireAuth><Dashboard /></RequireAuth></Suspense>} />
          <Route path="/login" element={<Suspense fallback={<Loading />}><Login /></Suspense>} />
          <Route path="/signup" element={<Suspense fallback={<Loading />}><SignUp /></Suspense>} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotel/:title" element={<Suspense fallback={<Loading />}><Hotel /></Suspense>} />
          <Route path="/hotel/booking/*" element={<Suspense fallback={<Loading />}><Booking /></Suspense>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
