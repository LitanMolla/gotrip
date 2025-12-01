import HowDoesItWorkCard from './HowDoesItWorkCard'
import booking from '../../../assets/booking.png'
import service from '../../../assets/service.png'
import line from '../../../assets/line.png'
import verification from '../../../assets/verification.png'
const HowDoesItWork = () => {
    return (
        <div className='my-15 lg:my-30'>
            <div className="container">
                <div className="text-center mb-10">
                    <h4 className='text-3xl font-bold'>How does it work?</h4>
                    <p className='text-slate-500'>These popular destinations have a lot to offer</p>
                </div>
                <div className="grid gap-6 lg:grid-cols-5 items-center justify-center">
                    <HowDoesItWorkCard
                        badge={'01'}
                        icon={verification}
                    />
                    <img className='w-1/2 hidden lg:block' src={line} alt="line" />
                    <HowDoesItWorkCard
                        badge={'02'}
                        icon={service}
                    />
                    <img className='w-1/2 hidden lg:block' src={line} alt="line" />
                    <HowDoesItWorkCard
                        badge={'03'}
                        icon={booking}
                    />
                </div>
            </div>
        </div>
    )
}

export default HowDoesItWork
