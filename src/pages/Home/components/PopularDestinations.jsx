import React from 'react'
import { FaArrowUp } from 'react-icons/fa'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PopularDestinationsCard from './PopularDestinationsCard';
import CustomLeftArrow from './CustomLeftArrow'
import CustomRightArrow from './CustomRightArrow';
export const countries = [
    {
        id: 1,
        name: "United States",
        image:
            "https://www.holidify.com/images/bgImages/NEW-YORK-CITY.jpg",
    },
    {
        id: 2,
        name: "United Kingdom",
        image:
            "https://media1.thrillophilia.com/filestore/hvah13s0i6rprps0so3wos4v96y6_shutterstock_107597459.jpg?w=305&h=230&dpr",
    },
    {
        id: 3,
        name: "Spain",
        image:
            "https://hblimg.mmtcdn.com/content/hubble/img/Bulk_International/mmt/activities/m_Madrid_1-min_l_664_1000.jpg",
    },
    {
        id: 4,
        name: "Australia",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1M4pcg6BNwzwOg6C23n-ftf7GN-7mjqXRfg&s",
    },
    {
        id: 5,
        name: "Italy",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq0-tet4ITf0Ly2jYb5YPngu5Kp18p-UxqYw&s",
    },
    {
        id: 6,
        name: "France",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz2V8AkJMQfUFykTLRWjbuW7SWSJdzD_P1wQ&s",
    },
    {
        id: 7,
        name: "Japan",
        image:
            "https://www.lot.com/content/dam/lot/lot-com/destination-photos/japonia/Tokyo-5%20.coreimg.jpg/1723628368208/Tokyo-5%20.jpg",
    },
    {
        id: 8,
        name: "Canada",
        image:
            "https://media.digitalnomads.world/wp-content/uploads/2022/02/20113234/7-best-places-to-live-in-Canada-1024x674.jpg",
    },
];

const PopularDestinations = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
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

