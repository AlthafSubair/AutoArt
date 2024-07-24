// importing packages
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/userContext';
import { SnackbarProvider } from 'notistack';

// importing layout
import Layout from './Layout/Layout';

// importing pages
import Home from './pages/Home';
import ErrorPages from './pages/ErrorPages';
import ColorSelection from './pages/ColorSelection';
import SlotBooking from './pages/SlotBooking';
import { About } from './pages/About';
import Contact from './pages/Contact';
import { Authentication } from './pages/Authentication';
import AdminHome from './pages/AdminHome';
import Profile from './pages/Profile.jsx';
import Favourites from './pages/Favourites.jsx';
import Cart from './pages/Cart.jsx';
import AddColor from './pages/Admin/AddColor';
import EditColorOption from './pages/Admin/EditColorOption.jsx';
import Enquire from './pages/Enquire.jsx';
import AdminEnquire from './pages/Admin/AdminEnquire';
import SheduleEnq from './pages/Admin/SheduleEnq.jsx';
import Payment from './pages/Payment.jsx';
import AddPayment from './pages/Admin/AddPayment.jsx';
import Spayment from './pages/Spayment.jsx';
import VerifyPayment from './pages/Admin/VerifyPayment.jsx';
import Forgot from './pages/Forgot.jsx';
import Otp from './pages/Otp';
import NewPass from './pages/NewPass';


// mapping routing
const router = createBrowserRouter([
  {
    path: "/",
    element: <UserProvider> <Layout /> </UserProvider>,
    errorElement: <ErrorPages />,
    children: [
      { index: true, element: <Home /> },
      { path: "/adminhome", element: <AdminHome /> },
      { path: "/auth", element: <Authentication /> },
      { path: "/colorselection", element: <ColorSelection /> },
      { path: "/slotbooking", element: <SlotBooking /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/profile/:id", element: <Profile /> },
      { path: "/favour", element: <Favourites /> },
      { path: "/cart", element: <Cart /> },
      { path: "/addcolor", element: <AddColor /> },
      { path: "/editcolor/:id", element: <EditColorOption /> },
      { path: "/enquire/:id", element: <Enquire /> },
      { path: "/adminenquire", element: <AdminEnquire /> },
      { path: "/senq/:id", element: <SheduleEnq /> },
      { path: "/payment/:id", element: <Payment /> },
      { path: "/addpayment", element: <AddPayment /> },
      { path: "/staticPayment", element: <Spayment /> },
      { path: "/verifypayment", element: <VerifyPayment /> },
      { path: "/forgotpassword", element: <Forgot /> },
      { path: "/forgotpassword/otp", element: <Otp /> },
      { path: "/forgotpassword/newpassword", element: <NewPass /> },
    ]
  }
]);

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <RouterProvider router={router} />
    </SnackbarProvider>
  );
}

export default App;

