import axios from 'axios';
import React, { useEffect, useState } from 'react'
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
  useEffect(() => {
    axios.get('./data.json').then(res => setData(res.data))
  }, [])
  useEffect(() => {
    const filter = data?.filter(item => item.category === category)
    setPosts(filter)
  }, [data])
  console.log(posts)
  return (
    <div>
      <div className='my-15 lg:my-30'>
        <div className="container">
          <div className="text-center mb-10">
            <h4 className='text-3xl font-bold'>Travel articles</h4>
            <p className='text-slate-500'>Lorem ipsum is placeholder text commonly used in site.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            {categories.map((cat, i) => <button onClick={() => setCategory(cat)} key={i} className={`${category === cat ? 'bg-slate-900 text-gray-100' : 'bg-gray-100 hover:bg-slate-200 text-slate-900'} rounded-sm px-5 py-3 font-medium duration-300  cursor-pointer`}>{cat}</button>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog