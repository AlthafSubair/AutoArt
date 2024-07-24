import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { SlArrowDown } from 'react-icons/sl';
import { FaHome, FaCogs, FaEnvelope, FaInfoCircle, FaPalette, FaSignInAlt, FaSignOutAlt, FaRegUser, FaShoppingCart } from 'react-icons/fa'
import { MdFavorite, MdPayment } from 'react-icons/md'


import { UserContext } from '../context/userContext';
import '../App.css';
import logo from '/logo.png';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServiceOpen, setServiceOpen] = useState(false);
  const [isServiceOpenonlg, setServiceOpenonlg] = useState(false);
  const [isAuthOpen, setAuthOpen] = useState(false)

  const { currentUser, logout } = useContext(UserContext);

  const logoutAndClose = () => {
    logout()
    setAuthOpen(prevState => !prevState)
  }

  const handleLogoutinSm = () => {
    logout()
    setMobileMenuOpen(prevState => !prevState)
  }

  const handleService = () => {
    setMobileMenuOpen(prevState => !prevState)
    setServiceOpen(prevState => !prevState)
  }


  return (
    <div>
      <nav className="bg-black shadow-lg w-full z-10 top-0 relative">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className='h-1'>
            <img className='resize -ml-3.5 pt-2 nl:pt-0' src={logo} alt="logo" height="50" />
          </div>
          <div className="flex items-center justify-between h-12">
            <div className="flex-shrink-0 pl-9 pt-6 nl:pt-0">
              <h1 className='text-4xl font-chiller font-bold cursor-not-allowed transform skew-x-6'>
                <span className='text-red-600'>A</span>
                <span className='text-green-600'>uto</span>
                <span className='text-blue-600'>A</span>
                <span className='text-yellow-500'>r</span>
                <span className='text-indigo-600'>t</span>
              </h1>
            </div>

            <div className="invisible nl:visible ">
              <div className="ml-10 flex items-baseline space-x-4 mr-36">




                {isServiceOpenonlg && (
                  <div className='bg-gray-700 rounded-md absolute mt-10'>
                    {/* <Link to='/slotbooking' onClick={() => setServiceOpenonlg(!isServiceOpenonlg)} className="text-white cursor-pointer block px-6 py-2 rounded-md text-base font-medium hover:bg-gray-400">Slot Book</Link> */}
                    <Link to='/colorselection' onClick={() => setServiceOpenonlg(!isServiceOpenonlg)} className="text-white cursor-pointer block px-6 py-2 rounded-md text-base font-medium hover:bg-gray-400">Color Selection</Link>
                    <Link to='/staticPayment' onClick={() => setServiceOpenonlg(!isServiceOpenonlg)} className="text-white cursor-pointer block px-6 py-2 rounded-md text-base font-medium hover:bg-gray-400">Payment</Link>
                  </div>
                )}



                {currentUser?.role === 'admin' ? (
                  <div>
                    <Link to='/adminhome' className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                    <Link to='/addcolor' className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Add Color</Link>
                    <Link to='/adminenquire' className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Enquire`s</Link>
                    <Link to='/verifypayment' className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Verify Payment</Link>

                  </div>
                ) :
                  (<div className='ml-10 flex items-baseline '>
                    <Link to='/' className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"> Home</Link>
                    <button onClick={() => setServiceOpenonlg(!isServiceOpenonlg)} className="text-white hover:bg-gray-700 rounded-md px-3 py-2 text-sm font-medium bg-black btn flex items-center gap-2">Services<SlArrowDown className='h-4 pt-1' />  </button>
                    <Link to='/about' className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About Us</Link>
                    <Link to='/contact' className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact Us</Link>

                  </div>)}
              </div>
            </div>


            <div className='hidden nl:block pb-1 flex-shrink-0'>
              {currentUser ? (

                <div className="flex items-center space-x-4">

                  {currentUser.role === "user" && (<div className='flex items-center space-x-4 mr-28'><Link to='/cart'><FaShoppingCart className='text-blue-600 hover:text-blue-700 h-6 w-6 cursor-pointer' /></Link>
                    <Link to='/favour'><MdFavorite className='text-red-600 hover:text-red-700 h-6 w-6 cursor-pointer ' /></Link>
                  </div>)}
                  
                  <FaRegUser className='text-green-700 hover:text-green-400 h-6 w-6 cursor-pointer -ml-6' onClick={() => setAuthOpen(!isAuthOpen)} />
                  {
                    
                    currentUser && isAuthOpen && (<div className='bg-gray-700 rounded-md absolute right-6 mt-36'>
                      <Link to={`/profile/${currentUser.id}`} onClick={() => setAuthOpen(!isAuthOpen)} className='text-white cursor-pointer block px-6 py-2 rounded-md text-base font-medium hover:bg-gray-400'>{currentUser.username}</Link>
                      <Link className='text-white cursor-pointer block px-6 py-2 rounded-md text-base font-medium hover:bg-gray-400' onClick={logoutAndClose}>Logout</Link>

                    </div>)
                  }

                </div>
              ) : (
                <Link to='/auth' className="hover:bg-[#eff3ee] hover:text-green-500 bg-green-500 text-white font-bold py-2 px-4 rounded-full">Login</Link>
              )}
            </div>


          </div>

          {/* Mobile navbar */}
          <div className="nl:hidden flex flex-row-reverse transform -translate-y-6">
            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:text-gray-400 focus:outline-none">
              <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M3 18h18v-2H3v2zM3 12h18v-2H3v2zm0-6h18V4H3v2z" />
              </svg>
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="nl:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

                {currentUser?.role === 'admin' ? (<div>


                  <Link to='/adminhome' onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium btn flex items-center gap-2"><FaHome /> Home </Link>


                </div>) :


                  (<div>
                    {currentUser && (<Link to={`/profile/${currentUser.id}`} onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium btn flex items-center gap-2"><FaRegUser />{currentUser.username}</Link>)

                    }

                    <Link to='/' onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium btn flex items-center gap-2"><FaHome /> Home </Link>
                    <button onClick={() => setServiceOpen(!isServiceOpen)} className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium btn flex items-center gap-2"><FaCogs /> Services<SlArrowDown className='h-4 pt-1' />  </button>
                    {isServiceOpen && (
                      <div className='bg-gray-700 rounded-md py-2 mt-2 mb-2'>
                        {/* <Link to='/slotbooking' onClick={handleService} className="text-white hover:bg-gray-400 px-3 py-2 rounded-md text-base font-medium btn flex items-center gap-2"><FaCalendarAlt />Slot Book</Link> */}
                        <Link to='/colorselection' onClick={handleService} className="text-white hover:bg-gray-400 px-3 py-2 rounded-md text-base font-medium btn flex items-center gap-2"><FaPalette />Color Selection</Link>
                        <Link to='/staticPayment' onClick={handleService} className="text-white hover:bg-gray-400 px-3 py-2 rounded-md text-base font-medium btn flex items-center gap-2"><MdPayment />Payment</Link>
                      </div>
                    )}

                    {currentUser && (<div> <Link to='/cart' onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:bg-gray-400 px-3 py-2 rounded-md text-base font-medium btn flex items-center gap-2"><FaShoppingCart className='text-white hover:text-blue-700 h-6 w-6 cursor-pointer' />Cart</Link>
                      <Link to='/favour' onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:bg-gray-400 px-3 py-2 rounded-md text-base font-medium btn flex items-center gap-2"><MdFavorite className='text-white hover:text-red-700 h-6 w-6 cursor-pointer ' />Favourities</Link></div>
                    )}
                    <Link to='/about' onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium btn flex items-center gap-2"><FaInfoCircle /> About Us</Link>
                    <Link to='/contact' onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium btn flex items-center gap-2"><FaEnvelope /> Contact Us</Link>
                  </div>)}







                {currentUser ? (
                  <Link onClick={handleLogoutinSm} className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium btn flex items-center gap-2"><FaSignOutAlt />Logout</Link>
                ) : (<Link to='/auth' onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium btn flex items-center gap-2"><FaSignInAlt /> Login</Link>)}
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
