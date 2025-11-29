import React from 'react'
import fire from '../../../assets/fire.png'
import traveller from '../../../assets/traveller.png'
import jeep from '../../../assets/jeep.png'
import hiking from '../../../assets/hiking.png'
import camping from '../../../assets/camping.png'
import AdventureCard from './AdventureCard'
const categories = [
  {
    id: 1,
    title: "Camping",
    tours: 5,
    priceFrom: 550,
    icon: camping
  },
  {
    id: 2,
    title: "Trekking",
    tours: 5,
    priceFrom: 550,
    icon: hiking
  },
  {
    id: 3,
    title: "Camp Fire",
    tours: 5,
    priceFrom: 550,
    icon: fire
  },
  {
    id: 4,
    title: "Off Road",
    tours: 5,
    priceFrom: 550,
    icon: jeep
  },
  {
    id: 5,
    title: "Exploring",
    tours: 5,
    priceFrom: 550,
    icon: traveller
  }
];

const Adventure = () => {
    return (
        <>
            <div className='my-15 lg:my-30'>
                <div className="container">
                    <div className="text-center mb-10">
                        <h4 className='text-3xl font-bold'>Adventure & Activity</h4>
                        <p className='text-slate-500'>Interdum et malesuada fames ac ante ipsum</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                        {categories.map(item => <AdventureCard key={item.id} category={item} />)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Adventure