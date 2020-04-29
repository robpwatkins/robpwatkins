import React from 'react';
import './BlogPage.css';
import Blog from './Blog';
import DogBlogger1 from '../img/DogBlogger.jpg';
import DogBlogger3 from '../img/DogBlogger3.jpg';

const BlogPage = () => {
  return (
    <div className="blog-container">
      <Blog blogImg={DogBlogger1} blogName="Test Blog 1"/>
      <Blog blogImg={DogBlogger3} blogName="Test Blog 2" />
    </div> 
  )
}

export default BlogPage;