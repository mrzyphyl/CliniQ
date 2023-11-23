import {
    FaFacebookSquare,
    FaLinkedin,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AdminFooter() {
  return (
    <>
        <footer className="footer bg-[#7cb2ec] w-[100%]">
            <div className="flex flex-col-reverse justify-around px-6 md:py-10 space-y-8 md:flex-row md:space-y-0">
                <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-center">
                    <div className="mx-auto my-6 text-center text-white md:hidden">
                        Copyright &copy; 2023, All Rights Reserved
                    </div>

                    <div>
                        <h1 className="font-bold text-white text-2xl flex justify-center tracking-widest">CLINIQ SERVICE</h1>
                    </div>

                    <div className='flex justify-between md:w-[75%] my-6'>
                        <a href="https://www.facebook.com" target='_blank' rel='noreferrer'>
                            <FaFacebookSquare size={30} color='#3b5998' className='bg-white rounded text-lg'/>
                        </a>
                        <a href="https://www.instagram.com" target='_blank' rel='noreferrer'>
                            <FaInstagram size={30} color='#962fbf ' className='bg-white rounded text-lg'/>
                        </a>
                        <a href="https://www.twitter.com" target='_blank' rel='noreferrer'>
                            <FaTwitterSquare size={30} color='#1DA1F2' className='bg-white rounded text-lg'/>
                        </a>
                        <a href="https://www.LinkedIn.com" target='_blank' rel='noreferrer'>
                            <FaLinkedin size={30} color='#171515' className='bg-white rounded text-lg'/>
                        </a>
                    </div>
                </div>

                <div className="flex justify-around space-x-32">
                    <div className="flex flex-col space-y-3 text-white">
                        <Link to="/dashboard" className="hover:text-brightRed">Dashboard</Link>
                        <Link to="/appointments" className="hover:text-brightRed">Appointments</Link>
                        <Link to="/users" className="hover:text-brightRed">Users</Link>
                    </div>
                </div>

                <div className="flex flex-col justify-between items-center">
                    <div className="hidden text-white md:block">
                        Copyright &copy; 2023, All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default AdminFooter