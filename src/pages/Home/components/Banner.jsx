import BookingSearchBar from "./BookingSearchBar"

const Banner = () => {
    return (
        <>
            <div className="bg-banner">
                <div className="bg-black/30 pb-50 pt-60 lg:pt-80 lg:pb-70">
                    <div className="container">
                        <h1 className="text-center font-bold text-4xl lg:text-6xl text-gray-100">The World is Waiting For You</h1>
                        <p className="text-gray-100 mt-5 mb-8 text-center">Discover amzaing places at exclusive deals</p>
                        <BookingSearchBar />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner