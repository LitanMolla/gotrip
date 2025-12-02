import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import BlogCard from './components/BlogCard';
const categories = [
  "Art and culture",
  "Beaches",
  "Adventure travel",
  "Explore",
  "Family holidays",
  "Air travel",
  "Food and drink"
];

const Blog = () => {
  const [data, setData] = useState([])
  const [posts, setPosts] = useState([])
  const [category, setCategory] = useState('Art and culture')
  const [totalPosts, setTotalPosts] = useState(0)
  const [limit, setLimit] = useState(6)
  const [currentPage, setCurrentPage] = useState(0)
  useEffect(() => {
    axios.get('./data.json').then(res => setData(res.data));
  }, [])
  useEffect(() => {
        const filter = data?.filter(item => item.category === category) 
        setPosts(filter)
  }, [data])
  
  const handleCategory = (cat)=> {
    setCategory(cat)
    const filter = data?.filter(item => item.category === category)
    setPosts(filter)
  }
  // console.log(limit)
  console.log({currentPage,limit})
  return (
    <div>
      <div className='my-15 lg:my-30'>
        <div className="container">
          <div className="text-center mb-10">
            <h4 className='text-3xl font-bold'>Travel articles</h4>
            <p className='text-slate-500'>Lorem ipsum is placeholder text commonly used in site.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            {categories.map((cat, i) => <button onClick={() => handleCategory(cat)} key={i} className={`${category === cat ? 'bg-slate-900 text-gray-100' : 'bg-gray-100 hover:bg-slate-200 text-slate-900'} rounded-sm px-5 py-3 font-medium duration-300  cursor-pointer`}>{cat}</button>)}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
            {posts?.slice((currentPage*limit),limit).map(item => (
              <BlogCard key={item.id} post={item} />
            ))}
          </div>
          <hr className='border-gray-300 my-5' />
          <div className="flex justify-between items-center">
            <div className="">
              <button className='flex justify-center items-center bg-slate-200 text-slate-900 size-10 cursor-pointer rounded-full duration-300 hover:bg-slate-900 hover:text-slate-100'><FaAngleLeft /></button>
            </div>
            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(posts.length / limit) }).map((item, i) => (
                <button key={i} onClick={()=>setCurrentPage(i)} className='flex justify-center items-center bg-slate-200 text-slate-900 size-10 cursor-pointer rounded-full duration-300 hover:bg-slate-900 hover:text-slate-100'>{i + 1}</button>
              ))}
            </div>
            <div className="">
              <button className='flex justify-center items-center bg-slate-200 text-slate-900 size-10 cursor-pointer rounded-full duration-300 hover:bg-slate-900 hover:text-slate-100'><FaAngleRight /></button>
            </div>
          </div>
          <p className='text-center text-gray-500 my-2'>1 – 20 of 300+ properties found</p>
        </div>
      </div>
    </div>
  )
}

export default Blog