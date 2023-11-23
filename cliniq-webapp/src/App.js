import { Route, Routes } from "react-router-dom";
import Home from './pages/HomePage/Home'
import AboutUs from './pages/AboutUsPage/AboutUs'
import ContactUs from './pages/ContactUsPage/ContactUs'
import Login from './pages/LoginPage/Login'
import SignUp from './pages/SignupPage/Signup'
import Services from './pages/ServicesPage/Services'
import Booking from './pages/BookingPage/Booking'
import YourAppointments from './pages/BookingPage/YourAppointments'
import { AuthProvider } from "./utils/AuthContext";
import QRScan from "./pages/BookingPage/QRScan";
import Dashboard from './pages/AdminPages/Dashboard'
import Appointments from './pages/AdminPages/Appointements'
import Users from './pages/AdminPages/Users'
import EditUsers from './pages/AdminPages/EditUser'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/about-us" exact element={<AboutUs/>}></Route>
        <Route path="/contact-us" exact element={<ContactUs/>}></Route>
        <Route path="/login" exact element={<Login/>}></Route>
        <Route path="/signup" exact element={<SignUp/>}></Route>
        <Route path="/services" exact element={<Services/>}></Route>
        <Route path="/booking" exact element={<Booking/>}></Route>
        <Route path="/booking-appointments" exact element={<YourAppointments/>}></Route>
        <Route path="/qr-scan" exact element={<QRScan/>}></Route>
        <Route path="/dashboard" exact element={<Dashboard/>}></Route>
        <Route path="/appointments" exact element={<Appointments/>}></Route>
        <Route path="/users" exact element={<Users/>}></Route>
        <Route path="/editusers" exact element={<EditUsers/>}></Route>
    </Routes>
    </AuthProvider>
  );
}

export default App;
