import { FaChevronLeft } from "react-icons/fa";

const CustomLeftArrow = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 
                 bg-gray-100/50 shadow-md p-3 rounded-full hover:bg-gray-200 cursor-pointer duration-300"
        >
            <FaChevronLeft className="text-xl" />
        </button>
    );
};

export default CustomLeftArrow