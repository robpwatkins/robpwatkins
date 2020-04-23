import React from 'react';
import './Blog.css';
import DogBlogger1 from '../img/DogBlogger.jpg';
import DogBlogger2 from '../img/DogBlogger2.jpg';
import DogBlogger3 from '../img/DogBlogger3.jpg';
import DogBlogger4 from '../img/DogBlogger4.jpeg';

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-box blog-box1">
        <a href="https://medium.com/@robpwatkins/test-portfolio-blog-50d83b856c92">
          <img src={DogBlogger1} alt="" />
        </a>
        <div className="blog-info">
          <h3>Testing the Blog</h3>
          <p>April 20, 2020</p>
          <hr />
          <p className="preview-text">Lorem ipsum dolor sit amet consectetur adipisicing and gonna keep on typing here until it gets a lil onger . . .</p>
        </div>
      </div>
      <div className="blog-box blog-box2">
        <a href="https://medium.com/@robpwatkins/test-portfolio-blog-50d83b856c92">
          <img src={DogBlogger3} alt="" />
        </a>
        <div className="blog-info">
          <h3>Testing the Blog</h3>
          <p>April 20, 2020</p>
          <hr />
          <p className="preview-text">Lorem ipsum dolor sit amet consectetur adipisicing and gonna keep on typing here until it gets a lil onger . . .</p>
        </div>
      </div>
      <div className="blog-box blog-box3">
        <a href="https://medium.com/@robpwatkins/test-portfolio-blog-50d83b856c92">
          <img src={DogBlogger2} alt="" />
        </a>
        <div className="blog-info">
          <h3>Testing the Blog</h3>
          <p>April 20, 2020</p>
          <hr />
          <p className="preview-text">Lorem ipsum dolor sit amet consectetur adipisicing and gonna keep on typing here until it gets a lil onger . . .</p>
        </div>
      </div>
      <div className="blog-box blog-box4">
        <a href="https://medium.com/@robpwatkins/test-portfolio-blog-50d83b856c92">
          <img src={DogBlogger4} alt="" />
        </a>
        <div className="blog-info">
          <h3>Testing the Blog</h3>
          <p>April 20, 2020</p>
          <hr />
          <p className="preview-text">Lorem ipsum dolor sit amet consectetur adipisicing and gonna keep on typing here until it gets a lil onger . . .</p>
        </div>
      </div>
    </div> 
  )
}

export default Blog;