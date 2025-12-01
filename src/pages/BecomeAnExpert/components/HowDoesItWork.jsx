import HowDoesItWorkCard from './HowDoesItWorkCard'
import booking from '../../../assets/booking.png'
import service from '../../../assets/service.png'
import line from '../../../assets/line.png'
import verification from '../../../assets/verification.png'
const HowDoesItWork = () => {
    return (
        <div className='my-15 lg:my-30'>
            <div className="text-center mb-10">
                <h4 className='text-3xl font-bold'>How does it work?</h4>
                <p className='text-slate-500'>These popular destinations have a lot to offer</p>
            </div>
            <div className="flex gap-6 flex-wrap justify-between">
                <HowDoesItWorkCard/>
            </div>
        </div>
    )
}

export default HowDoesItWork
