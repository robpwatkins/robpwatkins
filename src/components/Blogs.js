import React from 'react';
import './Blogs.css';
import blogList from '../blogList';

const Blogs = () => {
  return (
    <div className="blog-content">
      {blogList.map((blog, index) => {
        return (
          <div key={index} className="blog-box">
            <a href={blog.link}>
              <img src={blog.img} alt="" />
            </a>
            <div className="blog-info">
              <h3>{blog.name}</h3>
              <p>{blog.date}</p>
              <hr />
              <p className="preview-text">{blog.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Blogs;