import { useEffect, useState } from 'react'
import { FaWindowClose } from 'react-icons/fa'
import { FaBarsStaggered } from 'react-icons/fa6'
import { Link, NavLink } from 'react-router'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [hiddenPages, setHiddenPages] = useState(true)
    const [isOpen, setisopen] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    // console.log(isOpen)
    const navMenu = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-gray-100' : 'text-gray-400 duration-300 hover:text-gray-100'}>Home</NavLink></li>
        <li><NavLink to='/categories' className={({ isActive }) => isActive ? 'text-gray-100' : 'text-gray-400 duration-300 hover:text-gray-100'}>Categories</NavLink></li>
        <li><NavLink to='/destinations' className={({ isActive }) => isActive ? 'text-gray-100' : 'text-gray-400 duration-300 hover:text-gray-100'}>Destinations</NavLink></li>
        <li><NavLink to='/blog' className={({ isActive }) => isActive ? 'text-gray-100' : 'text-gray-400 duration-300 hover:text-gray-100'}>Blog</NavLink></li>
        <li><button onClick={() => setHiddenPages(!hiddenPages)} className={' relative text-gray-400 duration-300 hover:text-gray-100 group'}>
            <span className='text-gray-400 duration-300 hover:text-gray-100 relative cursor-pointer'>Pages</span>
            <div hidden={hiddenPages} className="absolute top-14 shadow-sm bg-white rounded-sm p-5 text-slate-900">
                <ul className='space-y-2'>
                    <li><Link to='/about' className='px-5 py-2 rounded-sm duration-300 hover:bg-blue-100 inline-block'>About</Link></li>
                    <li><Link to='/login' className='px-5 py-2 rounded-sm duration-300 hover:bg-blue-100 inline-block'>Login</Link></li>
                    <li><Link to='/register' className='px-5 py-2 rounded-sm duration-300 hover:bg-blue-100 inline-block'>Register</Link></li>
                    <li><Link to='/terms' className='px-5 py-2 rounded-sm duration-300 hover:bg-blue-100 inline-block'>Terms</Link></li>
                </ul>
            </div>
        </button></li>
        <li><NavLink to='/dashboard' className={({ isActive }) => isActive ? 'text-gray-100' : 'text-gray-400 duration-300 hover:text-gray-100'}>Dashboard</NavLink></li>
        <li><NavLink to='/contact' className={({ isActive }) => isActive ? 'text-gray-100' : 'text-gray-400 duration-300 hover:text-gray-100'}>Contact</NavLink></li>
    </>
    return (
        <header className={`${isScrolled && 'bg-slate-900'} py-4 fixed top-0 left-0 w-full z-1000 duration-300`}>
            <nav className="container">
                <div className="flex justify-between items-center">
                    <Link className='text-gray-100' to='/'><img src="/logo.png" alt="Logo" /></Link>
                    <div className="lg:flex gap-5 items-center hidden">
                        <ul className='flex gap-5 flex-wrap'>
                            {navMenu}
                        </ul>
                        <div className="flex gap-5 items-center">
                            <Link to='/become-an-expert' className='btn btn-primary hidden xl:block'>Become An Expert</Link>
                            <Link to='/login' className='btn btn-outline'>Sign In / Register</Link>
                        </div>
                    </div>
                    {/* mobile bar*/}
                    <div className="lg:hidden">
                        <button onClick={() => setisopen(!isOpen)} className='text-2xl text-gray-100 cursor-pointer'> {isOpen?<FaWindowClose />:<FaBarsStaggered />}</button>
                    </div>
                </div>
            </nav>
            {/* Mobile menu */}
            <div className={`lg:hidden fixed bg-slate-900/90 backdrop-blur-2xl min-h-screen top-0 left-0 w-3/4 shadow-sm shadow-gray-500 flex justify-center items-center duration-500 ${isOpen ? 'translate-x-0':'-translate-x-full'}`}>
                <ul className='text-center'>
                    {navMenu}
                </ul>
            </div>
        </header>
    )
}

export default Navbar