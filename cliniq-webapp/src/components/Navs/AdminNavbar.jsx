import React, { useEffect } from "react";
import Logo from '../../assets/logo/CliniQ Queueing Management System no bg.png'
import { Link, useNavigate } from "react-router-dom";
import NavBarLink from './AdminNavBarLinks'
import { useAuth } from '../../utils/AuthContext';

function AdminNavbar() {
    const { loggedIn, logout } = useAuth()
    const signStyle = "font-bold w-[100px] text-lg py-2 text-[#3a4343] bg-white rounded-md duration-200 hover:bg-[#3a4343] hidden md:block hover:text-white"
    const navBarMobileStyle = "absolute flex-col items-center hidden py-8 mt-9 space-y-6 font-bold bg-[#8d8b8bc5] left-6 right-6 drop-shadow-2xl text-white"

    const hamburgerFun = () => {
        const btn = document.getElementById('menubtn')
        const nav = document.getElementById('menu')
        const log = document.getElementById('login')

        btn.classList.toggle('open')  // If the class isn't there then add it, if it is there then remove it
        nav.classList.toggle('flex')
        nav.classList.toggle('hidden')
        log.classList.toggle('hidden')
    }

    const navigate = useNavigate()

    useEffect(() => {
    }, [])

    const handleLogout = () => {
        window.localStorage.clear()
        logout()
    }

    return (
        <>
            <div className="p-2 bg-[#6da9e9] flex justify-around items-center sticky top-[-1px] z-30">
                <div>
                    <img className="cursor-pointer" src={Logo} alt='Logo' style={{width: '50px', height: '50px'}} onClick={() => {navigate("/dashboard")}}/>
                </div>
                <Link to='/dashboard' className="flex-[0.7] md:text-2xl  font-bold text-white outline-none">
                    CLINIQ
                </Link>
                <div className="hidden md:block">
                    <NavBarLink arr={['Dashboard', 'Check Appointments', 'Users']}></NavBarLink>
                </div>

                <button id="menubtn" onClick={hamburgerFun} className="block hamburger md:hidden">
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </button>

                <div className="md:hidden">
                    <div id="menu" className={navBarMobileStyle}>
                        <NavBarLink arr={['Dashboard', 'Check Appointments', 'Users']} />
                        {loggedIn ? (
                        // If logged in, display the logout button
                        <button id="login" className={signStyle} onClick={handleLogout}>
                            Logout
                        </button>
                        ) : (
                        // If not logged in, display the sign-in link
                        <Link to="/login">
                            <button id="login" className={signStyle}>Sign In</button>
                        </Link>
                        )}
                    </div>
                </div>

                <Link>
                    {loggedIn ? (
                        // If logged in, display the logout button
                        <button id="login" className={signStyle} onClick={handleLogout}>
                            Logout
                        </button>
                    ) : (
                        // If not logged in, display the sign-in link
                        <Link to="/login">
                            <button id="login" className={signStyle}>Sign In</button>
                        </Link>
                    )}
                </Link>
            </div>
        </>
    )
}

export default AdminNavbar