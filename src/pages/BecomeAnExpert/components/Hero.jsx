import React from 'react'
const bg = 'https://bbqboy.net/wp-content/uploads/2020/08/Vancouver-one-of-the-most-beautiful-cities-in-the-world.jpg'
const Hero = () => {
  return (
    <div style={{backgroundImage: `url(${bg})`}} className='bg-center bg-cover bg-no-repeat'>
      <div className="bg-black/50 text-gray-100">
        <div className="container text-center pt-40 pb-30">
          <h1 className='font-bold text-3xl lg:text-4xl'>Let's Show the Beauty of Your <br /> City to the World</h1>
          <p className='mt-5 mb-6'>Discover amzaing places at exclusive deals</p>
          <button className="btn btn-primary">Register</button>
        </div>
      </div>
    </div>
  )
}

export default Hero