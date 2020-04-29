import React from 'react';

const Blog = (props) => {
  return (
    <div>
      <div className="blog-box blog-box1">
        <a href="https://medium.com/@robpwatkins/test-portfolio-blog-50d83b856c92">
          <img src={props.blogImg} alt="" />
        </a>
        <div className="blog-info">
          <h3>{props.blogName}</h3>
          <p>April 20, 2020</p>
          <hr />
          <p className="preview-text">Lorem ipsum dolor sit amet consectetur adipisicing . . .</p>
        </div>
      </div>
    </div>
  )
}

export default Blog;