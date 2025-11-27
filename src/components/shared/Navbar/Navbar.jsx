import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header className={`${isScrolled && 'bg-slate-900'} py-4 fixed top-0 left-0 w-full z-1000 duration-300`}>
            <nav className="container">
                <div className="flex justify-between items-center">
                    <Link className='text-gray-100' to='/'><img src="/logo.png" alt="Logo" /></Link>
                    <div className="flex gap-5 items-center">
                        <ul className='flex gap-5'>
                            <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-gray-100' : 'text-gray-400 duration-300 hover:text-gray-100'}>Home</NavLink></li>
                            <li><NavLink to='/categories' className={({ isActive }) => isActive ? 'text-gray-100' : 'text-gray-400 duration-300 hover:text-gray-100'}>Categories</NavLink></li>
                            <li><NavLink to='/destinations' className={({ isActive }) => isActive ? 'text-gray-100' : 'text-gray-400 duration-300 hover:text-gray-100'}>Destinations</NavLink></li>
                            <li><NavLink to='/blog' className={({ isActive }) => isActive ? 'text-gray-100' : 'text-gray-400 duration-300 hover:text-gray-100'}>Blog</NavLink></li>
                            <li><NavLink to='/pages' className={({ isActive }) => isActive ? 'text-gray-100' : 'text-gray-400 duration-300 hover:text-gray-100'}>Pages</NavLink></li>
                            <li><NavLink to='/dashboard' className={({ isActive }) => isActive ? 'text-gray-100' : 'text-gray-400 duration-300 hover:text-gray-100'}>Dashboard</NavLink></li>
                            <li><NavLink to='/contact' className={({ isActive }) => isActive ? 'text-gray-100' : 'text-gray-400 duration-300 hover:text-gray-100'}>Contact</NavLink></li>
                        </ul>
                        <div className="flex gap-5 items-center">
                            <button className='btn btn-primary'>Become An Expert</button>
                            <button className='btn btn-outline'>Sign In / Register</button>
                        </div>
                    </div>
                </div>

            </nav>
        </header>
    )
}

export default Navbar