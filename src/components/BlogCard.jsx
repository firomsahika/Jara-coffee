import React from "react";
import { GoEye } from "react-icons/go";
import { FaRegComment } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

const BlogCard = ({ 
  id,
  image, 
  title, 
  content, 
  postDate, 
  minToRead, 
  views, 
  comments, 
  likes 
}) => {

  const blogData ={id, image, title, content, postDate, minToRead, views, comments, likes}
  return (
    <div className="bg-white rounded-xl shadow-lg w-full poppins"> 
      <div className="flex flex-col">
        {/* image section */}
        <Link to={`/blog/${id}`} 
        state={blogData}
        > 
          <div className="flex w-full">
            <img src={image} 
              className="w-full h-48 object-cover rounded-xl"
              alt="Blog" 
            />
          </div>
        </Link>

        {/* Content section */}
        <div className="p-5 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">{postDate} . {minToRead} min read</p>
            <HiDotsHorizontal />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-lg sm:text-xl font-bold">{title}</h1>
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
