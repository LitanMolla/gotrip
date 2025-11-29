import { featuresData } from '../../../lib/data/featuresData'
import FeatureCard from './FeatureCard'


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