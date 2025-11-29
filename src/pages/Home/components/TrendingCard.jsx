import React from 'react';
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';

const TrendingCard = ({ tour }) => {
    const { id, badge, badgeColor, image, duration, title, location, rating, reviewCount, price, currency } = tour || {};

    const getBadgeStyles = () => {
        if (!badge) return '';
        const styles = {
            'dark-blue': 'bg-slate-900 text-white',
            'blue': 'bg-blue-600 text-white',
            'yellow': 'bg-yellow-400 text-slate-900'
        };

        return styles[badgeColor] || 'bg-gray-800 text-white';
    };

    return (
        <div className="w-full rounded-lg overflow-hidden transition-shadow duration-300 bg-white group">
            <div className="relative h-64 overflow-hidden group">
                <img
                    src={image || '/api/placeholder/400/320'}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {badge && (
                    <div className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded ${getBadgeStyles()}`}>
                        {badge}
                    </div>
                )}
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-blue-600 hover:text-gray-100 transition-colors cursor-pointer duration-300">
                    <AiOutlineHeart className="w-5 h-5" />
                </button>
            </div>
            <div className="">
                <p className="text-sm text-gray-600 my-2">{duration}</p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:underline duration-300 cursor-pointer">
                    {title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{location}</p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <AiFillStar className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm font-semibold text-gray-900">{rating}</span>
                        <span className="text-sm text-gray-600">({reviewCount} reviews)</span>
                    </div>
                    <div className="text-right flex items-center gap-1">
                        <p className="text-sm text-gray-600">From</p>
                        <p className="text-lg font-semibold text-gray-900">{currency}{price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingCard