import React from 'react'
import { FaArrowUp } from 'react-icons/fa'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PopularDestinationsCard from './PopularDestinationsCard';
import CustomLeftArrow from './CustomLeftArrow'
import CustomRightArrow from './CustomRightArrow';
import countries from '../../../lib/data/countries';


const PopularDestinations = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <div className='my-15 lg:my-30'>
                <div className="container">
                    <div className=" mb-10">
                        <div className="flex justify-between gap-6 flex-wrap">
                            <div>
                                <h4 className='text-3xl font-bold'>Popular Destinations</h4>
                                <p className='text-slate-500'>These popular destinations have a lot to offer</p>
                            </div>
                            <div className="">
                                <button className='btn btn-outline flex items-center bg-blue-100 text-blue-600! hover:text-gray-100! gap-1'>View All Destinations <FaArrowUp className='rotate-45' /></button>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <Carousel
                            customLeftArrow={<CustomLeftArrow />}
                            customRightArrow={<CustomRightArrow />}
                            responsive={responsive}
                            infinite={true}
                            autoPlaySpeed={1000}
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            renderButtonGroupOutside={true}
                        >
                            {countries.map(item => <PopularDestinationsCard country={item} key={item.id} />)}
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularDestinations

