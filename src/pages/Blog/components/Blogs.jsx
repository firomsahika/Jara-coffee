import React from "react";
import BlogCard from "../../../components/BlogCard"
import Barista from"../../../assets/barista.jpg"
import Blog from "../Blog";

 

const Blogs = () =>{

    const details = [
        {
            id:1,
            image:Barista,
            title:"Celebrating Our Coffee Farmers: Highlights from",
            content:"On August 23, 2024, we held our 7th Annual Farmers' Day at the Daye Bensa Coffee",
            postDate:"Sep 5, 2024",
            minToRead:"3",
            views:"100",
            comments:"0",
            likes:"3",
        },
        {
            id:2,
            image:Barista,
            title:"Celebrating Our Coffee Farmers: Highlights from",
            content:"On August 23, 2024, we held our 7th Annual Farmers' Day at the Daye Bensa Coffee",
            postDate:"Sep 5, 2024",
            minToRead:"3",
            views:"100",
            comments:"0",
            likes:"3",
        },
        {
            id:3,
            image:Barista,
            title:"Celebrating Our Coffee Farmers: Highlights from",
            content:"On August 23, 2024, we held our 7th Annual Farmers' Day at the Daye Bensa Coffee",
            postDate:"Sep 5, 2024",
            minToRead:"3",
            views:"100",
            comments:"0",
            likes:"3",
        },
        {
            id:4,
            image:Barista,
            title:"Celebrating Our Coffee Farmers: Highlights from",
            content:"On August 23, 2024, we held our 7th Annual Farmers' Day at the Daye Bensa Coffee",
            postDate:"Sep 5, 2024",
            minToRead:"3",
            views:"100",
            comments:"0",
            likes:"3",
        },
        {
            id:5,
            image:Barista,
            title:"Celebrating Our Coffee Farmers: Highlights from",
            content:"On August 23, 2024, we held our 7th Annual Farmers' Day at the Daye Bensa Coffee",
            postDate:"Sep 5, 2024",
            minToRead:"3",
            views:"100",
            comments:"0",
            likes:"3",
        },
        {
            id:6,
            image:Barista,
            title:"Celebrating Our Coffee Farmers: Highlights from",
            content:"On August 23, 2024, we held our 7th Annual Farmers' Day at the Daye Bensa Coffee",
            postDate:"Sep 5, 2024",
            minToRead:"3",
            views:"100",
            comments:"0",
            likes:"3",
        },
        {
            id:7,
            image:Barista,
            title:"Celebrating Our Coffee Farmers: Highlights from",
            content:"On August 23, 2024, we held our 7th Annual Farmers' Day at the Daye Bensa Coffee",
            postDate:"Sep 5, 2024",
            minToRead:"3",
            views:"100",
            comments:"0",
            likes:"3",
        },
    ]


    return(
        <div className="flex flex-col items-center justify-center py-5 md:py-10 lg:py-14 px-5 md:px-20 lg:px-32 gap-5">
            <h1 className="text-4xl font-bold lg:pb-10">Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {
                details.map((detail) => (
                    <BlogCard 
                    key={detail.id}
                    {...detail}
                    />
                ))
            }
            </div>
             
        </div>
    )
}

export default Blogs