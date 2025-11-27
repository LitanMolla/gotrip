import React from 'react'
import FeatureCard from './FeatureCard'
export const featuresData = [
  {
    title: "Best Price Guarantee",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://creativelayers.net/themes/gotrip-html/img/featureIcons/1/1.svg",
  },
  {
    title: "Easy & Quick Booking",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://creativelayers.net/themes/gotrip-html/img/featureIcons/1/2.svg",
  },
  {
    title: "Customer Care 24/7",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://creativelayers.net/themes/gotrip-html/img/featureIcons/1/3.svg",
  },
];

const FeaturesSection = () => {
    return (
        <div className='bg-gray-200 py-10'>
            <div className="container">
                <div className="grid lg:grid-cols-3 gap-6">
                    {featuresData.map((item,i)=>(
                    <FeatureCard feature={item} key={i} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FeaturesSection