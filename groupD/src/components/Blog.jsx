import React from 'react'
import { Blogs } from './Blogs'
import './Blog.css'
const Blog = () => {
  return (
    <div className='contain'>
    
      <div className="blog_1">
            <div className="articles">
                <p>MY ARTICLES</p>
                <h1>Personal Blog</h1>
            </div>

            <div className="container">

                <Blogs 
                imagescr={"./image1.jpg"}
                title="How to Prototype in figma"
                date="July 15, 2021"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum animi quod, exercitationem cumque delectus iure  amet? Perferendis exercitationem blanditiis eos itaque!"
                reading="Continue Reading"
                />

                  <Blogs 
                imagescr={"./image2.jpg"}
                title="Beign more productive in Notion"
                date="Aug 8, 2020"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum animi quod, exercitationem cumque delectus iure  amet? Perferendis exercitationem blanditiis eos itaque!"
                reading="Continue Reading"
                />

                  <Blogs 
                imagescr={"./image3.jpg"}
                title="Beginers guide to adobe illustrator"
                date="Feb 19, 2021"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum animi quod, exercitationem cumque delectus iure  amet? Perferendis exercitationem blanditiis eos itaque!"
                reading="Continue Reading"
                />
            
            </div>
        </div>
    </div>
  )
}

export default Blog
