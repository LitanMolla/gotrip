import React from 'react'
import { featuresData } from '../../../lib/data/featuresData'
import FeatureCard from '../../Home/components/FeatureCard'

const Features = () => {
    return (
        <div className="grid mt-10 gap-10">
            {featuresData.map((item, i) => (
                <FeatureCard feature={item} key={i} />
            ))}
        </div>
    )
}

export default Features