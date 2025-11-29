import tours from '../../../lib/data/tours';
import TrendingCard from './TrendingCard';
const TrendingActivity = () => {
    return (
        <div>
            <div className='my-15 lg:my-30'>
                <div className="container">
                    <div className="text-center mb-10">
                        <h4 className='text-3xl font-bold'>Trending Activity</h4>
                        <p className='text-slate-500'>Interdum et malesuada fames ac ante ipsum</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        {tours.map(item=><TrendingCard key={item.id} tour={item}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingActivity