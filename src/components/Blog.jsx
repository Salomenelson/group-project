import React from 'react'
import { Blogs } from './Blogs'
import './Blog.css'
const Blog = () => {
  return (
    <section id='Blog' className="w-full bg-black">
      <div className="w-[80%] max-w-[1000px] my-0 mx-auto py-15">
        <div className='text-center pb-8'>
            <div className="flex gap-2 pb-2 items-center justify-center">
              <div className="w-4 h-[2.5px] bg-gray-500"></div>
              <p className="uppercase tracking-[6px] text-sm text-white">My articles</p>
            </div>
            <h2 className="text-4xl font-bold pb-14 text-white">Personal Blog</h2>
        </div>

        <div className="md:flex gap-5">
          <Blogs imagescr={"./image1.jpg"} title="How to Prototype in figma" date="July 15, 2021" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum animi quod, exercitationem cumque delectus iure  amet? Perferendis exercitationem blanditiis eos itaque!" reading="Continue Reading"/>

          <Blogs imagescr={"./image2.jpg"} title="Beign more productive in Notion" date="Aug 8, 2020" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum animi quod, exercitationem cumque delectus iure  amet? Perferendis exercitationem blanditiis eos itaque!" reading="Continue Reading"/>

          <Blogs imagescr={"./image3.jpg"} title="Beginers guide to adobe illustrator" date="Feb 19, 2021" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum animi quod, exercitationem cumque delectus iure  amet? Perferendis exercitationem blanditiis eos itaque!" reading="Continue Reading"/>
            
        </div>
      </div>
    </section>
  )
}

export default Blog
