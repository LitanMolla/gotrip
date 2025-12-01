import { Link } from 'react-router'
import notfound from '../../assets/notfound.png'
import newsletter from '../../assets/newsletter.png'
import Navbar from '../../components/shared/Navbar/Navbar'
import Footer from '../../components/shared/Footer/Footer'

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar className='bg-slate-900' />
        <div className="flex-1 mt-10">
          <div className='my-15 lg:my-30'>
            <div className="container">
              <div className="flex gap-6 items-center flex-col lg:flex-row">
                <div className="lg:w-1/2">
                  <img className='w-full' src={notfound} alt="notfound" />
                </div>
                <div className="lg:w-1/2">
                  <div className="flex justify-center items-center">
                    <div className="max-w-lg text-center lg:text-left space-y-5">
                      <h1 className='text-slate-900 text-[150px] lg:text-[200px] font-bold'>40<span className='text-blue-600'>4</span></h1>
                      <h4 className='font-bold text-slate-900 text-3xl'>Oops! It looks like you're lost.</h4>
                      <p className='text-slate-900'>The page you're looking for isn't available. Try to search again or use the go to.</p>
                      <Link to='/' className='btn bg-blue-600 text-gray-100 duration-300 hover:bg-slate-900 inline-block'>Go back to homepage</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="bg-slate-900 py-16 mt-10 text-gray-100">
              <div className="container">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-1/2">
                    <div className="flex items-center gap-5 justify-center lg:justify-start flex-wrap">
                      <div className="w-15">
                        <img className='w-full' src={newsletter} alt="newslatter" />
                      </div>
                      <div className="text-center lg:text-start">
                        <h4 className='text-2xl font-bold'>Your Travel Journey Starts Here</h4>
                        <p>Sign up and we'll send the best deals to you</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="flex gap-2 flex-wrap">
                      <input type="text" placeholder='Your Email' className='flex-1 bg-gray-100 rounded-sm px-5 py-3.5 text-gray-900' />
                      <button className='btn bg-blue-600 duration-300 hover:bg-gray-100 hover:text-slate-900 w-full sm:w-auto'>Subscribe</button>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default NotFound