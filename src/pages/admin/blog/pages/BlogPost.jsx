import React, { useState } from "react";

const BlogPost = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: "",
    postDate: "",
    minToRead: 0,
    views: 0,
    comments: 0,
    likes: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend or save to state
    console.log("Blog Submitted: ", formData);
  };

  return (
    <div className="bg-gray-50 min-h-screen  lg:py-40 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Create New Blog Post</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Content */}
          <div className="mb-4">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              rows="6"
              required
            />
          </div>

          {/* Image URL */}
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Post Date */}
          <div className="mb-4">
            <label htmlFor="postDate" className="block text-sm font-medium text-gray-700 placeholder:text-gray-200">Post Date</label>
            <input
              type="date"
              id="postDate"
              name="postDate"
              value={formData.postDate}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Min to Read */}
          <div className="mb-4">
            <label htmlFor="minToRead" className="block text-sm font-medium text-gray-700">Minutes to Read</label>
            <input
              type="number"
              id="minToRead"
              name="minToRead"
              value={formData.minToRead}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Blog Stats (Views, Comments, Likes) */}
          <div className="mb-4 flex justify-between gap-4">
            <div className="w-1/3">
              <label htmlFor="views" className="block text-sm font-medium text-gray-700">Views</label>
              <input
                type="number"
                id="views"
                name="views"
                value={formData.views}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="w-1/3">
              <label htmlFor="comments" className="block text-sm font-medium text-gray-700">Comments</label>
              <input
                type="number"
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="w-1/3">
              <label htmlFor="likes" className="block text-sm font-medium text-gray-700">Likes</label>
              <input
                type="number"
                id="likes"
                name="likes"
                value={formData.likes}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogPost;
