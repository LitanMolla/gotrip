import React from 'react'
import { FaApple, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { MdLanguage } from 'react-icons/md'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer className='bg-blue-950 pt-15 text-gray-100'>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <Link to='/'><img src="/logo.png" alt="" /></Link>
            <div className="flex gap-6 mt-8 flex-wrap">
              <div className="">
                <p className='text-sm'>Toll Free Customer Care</p>
                <Link className='text-lg duration-300 hover:text-blue-500 font-medium'>+(1) 123 456 7890</Link>
              </div>
              <div className="">
                <p className='text-sm'>Need live support?</p>
                <Link className='text-lg duration-300 hover:text-blue-500 font-medium'>hi@gotrip.com</Link>
              </div>
            </div>
            <div className="mt-8">
              <p className=' mb-2'>Your all-in-one travel app</p>
              <div className="flex gap-6 flex-wrap">
                <Link className='rounded-sm px-5 py-2 bg-white/10'>
                  <span className='flex gap-2 items-center'>
                    <FaApple className='text-3xl' />
                    <span>
                      <span className='text-sm text-slate-300'>Download on the</span>
                      <br />
                      <span>Apple Store</span>
                    </span>
                  </span>
                </Link>
                <Link className='rounded-sm px-5 py-2 bg-white/10'>
                  <span className='flex gap-2 items-center'>
                    <FaApple className='text-3xl' />
                    <span>
                      <span className='text-sm text-slate-300'>Get in on</span>
                      <br />
                      <span>Google Play</span>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
            <div className="mt-8">
              <p className='mb-2'>Follow us on social media</p>
              <div className="flex gap-2 flex-wrap">
                <Link className='flex justify-center items-center rounded-full size-10 duration-300 hover:bg-white/10'>
                  <FaFacebookF />
                </Link>
                <Link className='flex justify-center items-center rounded-full size-10 duration-300 hover:bg-white/10'>
                  <FaTwitter />
                </Link>
                <Link className='flex justify-center items-center rounded-full size-10 duration-300 hover:bg-white/10'>
                  <FaInstagram />
                </Link>
                <Link className='flex justify-center items-center rounded-full size-10 duration-300 hover:bg-white/10'>
                  <FaLinkedin />
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="mb-8">
              <p className='mb-2'>Get Updates & More</p>
              <div className="flex relative">
                <input type="text" placeholder='Your Email' className='flex-1 bg-white text-slate-900 rounded-sm py-4 px-5 outline-0' />
                <button className='underline text-slate-900 font-medium absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer'>Subscribe</button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="">
                <h4 className='text-lg font-medium mb-5'>Company</h4>
                <ul className='space-y-2'>
                  <li><Link className='duration-300 hover:text-blue-500'>About Us</Link></li>
                  <li><Link className='duration-300 hover:text-blue-500'>Careers</Link></li>
                  <li><Link className='duration-300 hover:text-blue-500'>Blog</Link></li>
                  <li><Link className='duration-300 hover:text-blue-500'>Press</Link></li>
                  <li><Link className='duration-300 hover:text-blue-500'>Gift Cards</Link></li>
                  <li><Link className='duration-300 hover:text-blue-500'>Magazine</Link></li>
                </ul>
              </div>
              <div className="">
                <h4 className='text-lg font-medium mb-5'>Support</h4>
                <ul className='space-y-2'>
                  <li><Link className='duration-300 hover:text-blue-500'>Contact</Link></li>
                  <li><Link className='duration-300 hover:text-blue-500'>Legal Notice</Link></li>
                  <li><Link className='duration-300 hover:text-blue-500'>Privacy Policy</Link></li>
                  <li><Link className='duration-300 hover:text-blue-500'>Terms and Conditions</Link></li>
                  <li><Link className='duration-300 hover:text-blue-500'>Sitemap</Link></li>
                </ul>
              </div>
              <div className="">
                <h4 className='text-lg font-medium mb-5'>Oter Services</h4>
                <ul className='space-y-2'>
                  <li><Link className='duration-300 hover:text-blue-500'>Car hire</Link></li>
                  <li><Link className='duration-300 hover:text-blue-500'>Careers</Link></li>
                  <li><Link className='duration-300 hover:text-blue-500'>Activity Finder</Link></li>
                  <li><Link className='duration-300 hover:text-blue-500'>Flight finder</Link></li>
                  <li><Link className='duration-300 hover:text-blue-500'>Cruise Ticket</Link></li>
                  <li><Link className='duration-300 hover:text-blue-500'>Holiday Rental</Link></li>
                  <li><Link className='duration-300 hover:text-blue-500'>Travel Agents</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <hr className='border-slate-700' />
          <div className="flex justify-between items-center flex-wrap py-5 gap-6">
            <div className="flex gap-5 items-center flex-wrap">
              <p>© {new Date().getFullYear()} GoTrip LLC All rights reserved.</p>
              <ul className='flex flex-wrap gap-2'>
                <li><Link className='duration-300 hover:text-blue-500'>Privacy</Link></li>
                <li><Link className='duration-300 hover:text-blue-500'>Terms</Link></li>
                <li><Link className='duration-300 hover:text-blue-500'>Site Map</Link></li>
              </ul>
            </div>
            <div className="flex gap-5">
              <Link className='flex gap-2 items-center'><MdLanguage />English (US)</Link>
              <Link className='flex gap-2 items-center'><span>$</span>USD</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer