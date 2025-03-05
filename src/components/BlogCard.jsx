import React from "react";
import { GoEye } from "react-icons/go";
import { FaRegComment } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";


const BlogCard = ({ 
  image, 
  title, 
  content, 
  postDate, 
  minToRead, 
  views, 
  comments, 
  likes 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg w-full poppins"> 
      <div className="flex flex-col">
        {/* image section */}
        <div className="flex w-full">
          <img src={image} 
          className="w-full h-48 object-cover rounded-xl"
          />
        </div>

        {/* Content section */}
        <div className="p-5 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <p>{postDate} . {minToRead} min read</p>
          <HiDotsHorizontal />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-lg sm:text-xl font-bold  ">{title}</h1>
          <p className="text-gray-700 text-xs sm:text-sm">{content}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <p className="flex gap-2 items-center justify-center"><GoEye /> {views}</p>
            <p className="flex gap-2 items-center justify-center"><FaRegComment /> {comments}</p>
          </div>
          <p className="flex gap-2 items-center justify-center">{likes} <FaRegHeart /></p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;


{/* <div className="flex flex-col">
        <img
          src={image}
          alt="Blog image"
          className="w-full  h-48 object-cover rounded-xl"
        />
        
        <div className="p-4 flex flex-col gap-4">
          <div className="flex justify-between text-xs sm:text-sm text-gray-500">
            <span>{postDate}</span>
            <span>{minToRead} min read</span>
          </div>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 truncate">{title}</h2>

          <p className="text-gray-700 text-xs sm:text-sm">{content}</p>

          <div className="flex justify-between items-center text-xs sm:text-sm text-gray-500 mt-4">
            <div className="flex items-center justify-center gap-3">
              <span className="flex items-center gap-2"><GoEye />{views}</span>
              <span className="flex items-center gap-2"><FaRegComment />{comments}</span>
            </div>
            <span className="flex items-center gap-2"><FaRegHeart />{likes}</span>
          </div>
        </div>
      </div>
    </div> */}
