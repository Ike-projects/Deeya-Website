import React from 'react';

const BlogCard = ({ image, date, title, description, author }) => {
    return (
        <div className="max-w-sm rounded-[16px] overflow-hidden shadow-xl  border-gray-200 h-[575px]">
            <img
                src={image}
                alt="Farm produce"
                className="w-full h-[294px] object-cover"
            />

            <div className="p-4">

                <p className="text-sm text-gray-500">{date}</p>

                <h2 className="font-bold text-xl text-gray-800 mt-2">
                    {title}
                </h2>

                <p className="text-gray-600 mt-2">
                    {description}
                </p>
            </div>

            <div className="px-4 py-2">
                <p className="text-sm text-gray-500">Published by {author}</p>
            </div>
        </div>
    );
};

export default BlogCard;