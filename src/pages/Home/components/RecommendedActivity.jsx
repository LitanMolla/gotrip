import React from 'react'
import TrendingCard from './TrendingCard';
const tours = [
    {
        id: 1,
        badge: "LIKELY TO SELL OUT*",
        badgeColor: "dark-blue",
        image: "https://creativelayers.net/themes/gotrip-html/img/activities/1.png",
        duration: "6+ hours",
        title: "Golden Circle, Kerid Volcanic Crater, and Blue Lagoon Day Trip",
        location: "Westminster Borough, London",
        rating: 4.82,
        reviewCount: 94,
        price: 72,
        currency: "US$"
    },
    {
        id: 2,
        badge: null,
        badgeColor: null,
        image: "https://creativelayers.net/themes/gotrip-html/img/activities/2.png",
        duration: "6+ hours",
        title: "Edinburgh Sky to Sea Bike Tour by Manual or E-Bike",
        location: "Ciutat Vella, Barcelona",
        rating: 4.82,
        reviewCount: 94,
        price: 72,
        currency: "US$"
    },
    {
        id: 3,
        badge: "BEST SELLER",
        badgeColor: "blue",
        image: "https://creativelayers.net/themes/gotrip-html/img/activities/3.png",
        duration: "6+ hours",
        title: "Natural Crystal Blue Ice Cave Tour of Vatnajökull Glacier",
        location: "Manhattan, New York",
        rating: 4.82,
        reviewCount: 94,
        price: 72,
        currency: "US$"
    },
    {
        id: 4,
        badge: "TOP RATED",
        badgeColor: "yellow",
        image: "https://creativelayers.net/themes/gotrip-html/img/activities/4.png",
        duration: "6+ hours",
        title: "South Coast Full Day Tour by Minibus from Reykjavik",
        location: "Vaticano Prati, Rome",
        rating: 4.82,
        reviewCount: 94,
        price: 72,
        currency: "US$"
    }
];
const RecommendedActivity = () => {
    return (
        <div>
            <div className='my-15 lg:my-30'>
                <div className="container">
                    <div className="text-center mb-10">
                        <h4 className='text-3xl font-bold'>Recommended Activity</h4>
                        <p className='text-slate-500'>Interdum et malesuada fames ac ante ipsum</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        {tours.map(item => <TrendingCard tour={item} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecommendedActivity