import React from "react";
import { useLocation } from "react-router-dom"; 

import { GoEye } from "react-icons/go";
import { FaRegComment } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";


const BlogDetail = () => {
  const location = useLocation();  
  const { state } = location;    

  if (!state) {
    return <p className="text-center text-lg text-red-500">Blog data not found!</p>;
  }

  const { image, title, content, postDate, minToRead, views, comments, likes } = state;

  return (
    <div className="bg-gray-50 min-h-screen py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Blog Image */}
        <img 
          className="w-full h-80 object-cover rounded-t-xl"
          src={image} 
          alt={title} 
        />

        <div className="p-6">
          {/* Blog Title */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">{title}</h1>

          {/* Post Metadata */}
          <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
            <p>{postDate}</p>
            <p>{minToRead} min read</p>
          </div>

          {/* Blog Content */}
          <div className="text-lg text-gray-700 mb-8">
            <p>{content}</p>
          </div>

          {/* Blog Statistics */}
          <div className="flex justify-between text-sm text-gray-500 border-t pt-4 mt-4">
            <div className="flex items-center gap-4">
              <p className="flex gap-2 items-center">
                <span className="material-icons"><GoEye /></span>
                {views}
              </p>
              <p className="flex gap-2 items-center">
                <span className="material-icons"><FaRegComment /></span>
                {comments}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <p className="flex gap-2 items-center">
                <span className="material-icons"><FaRegHeart /></span>
                {likes}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
