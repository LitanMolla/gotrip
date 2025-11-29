import offers from '../../../lib/data/offers'
import OffersCard from './OffersCard'
const SpecialOffers = () => {
    return (
        <div className='my-15 lg:my-30'>
            <div className="container">
                <div className="text-center mb-10">
                    <h4 className='text-3xl font-bold'>Special Offers</h4>
                    <p className='text-slate-500'>These popular destinations have a lot to offer</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {offers.map((item,i)=>(<OffersCard offer={item} key={i} />))}
                </div>
            </div>
        </div>
    )
}

export default SpecialOffers