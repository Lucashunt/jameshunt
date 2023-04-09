import axios from "axios";
import {remark} from 'remark'
import html from 'remark-html'
import React, { lazy } from 'react';
import Image from 'next/image'
import Link from 'next/link'

function Blog({ overskrift, resume, image, dato, blogID }) {
  

  const d = new Date(dato);
  const f = new Intl.DateTimeFormat("da-DK", {
    dateStyle: "medium",
  });

  return (
    <>
      <div className="font-extralight">
        <div className="flex justify-center">
          <Image
            src={image}
            width={1000}
            height={500}
            placeholder="blur"
            alt="header image"
            blurDataURL="true"
          />
        </div>
        <p className="italic text-sm mt-5">{f.format(d)}</p>
        <Link href={blogID}><a><button className="text-3xl mb-2 hover:text-black/60 ease-in-out duration-300">{overskrift}</button></a></Link>
        <p>{resume}...</p>
       
      </div>
    </>
  );
}
  export async function getServerSideProps({ }) {
  
  


  
      const client = axios.create({
        baseURL: 'https://cdn.contentful.com',
        headers: {
          'Content-Type': "application/json",
          'Authorization': `Bearer ${process.env.API_KEY}`
        },
        params: {
          content_type: 'blog'
        }
      })
      
  
  try {
      const response = await client.get('/spaces/v9sb7460yx5u/entries')
       const blogs = response.data
       
       
       return {
        props: {
            blogs,
            
           
        }, 
      };
  } catch (error) {
        console.log(error.message)

        const blogs = false
        return {
            props: {
                blogs,
               
            }, 
          };
  }
      
        
  

  }
  
  const Begivenhedertest = (blogs) => {
  
    console.log(blogs.blogs.items[0].fields.billede.sys.id)

   
    return (
      <div className="bg-background px-10 sm:px-24 pb-20">

        <h1 className="text-center text-4xl sm:text-5xl font-extralight pb-10 py-16 sm:py-8">
          Blogs
        </h1>
        <h3 className="mb-5 font-extralight text-2xl">Alle indlæg</h3>
        <div className="grid sm:grid-cols-3 gap-10 ">
          {blogs.blogs !== false ? (
            <>
              {blogs.blogs.items.map((blog) => (
                
                <>
                
                  <Blog
                    overskrift={blog.fields.overskrift}
                    paragraph={blog.fields.paragraph}
                    resume={blog.fields.resume}
                    image={
                      "https:" +
                      blogs.blogs.includes.Asset.find(
                        (id) => (id = blog.fields.billede)
                      ).fields.file.url
                    }
                    dato={blog.fields.dato}
                    blogID={`blog/${blog.sys.id}?billede=${blog.fields.billede.sys.id}`}
                    imageID={blog.fields.billede}
                  />
                </>
              ))}
            </>
          ) : (
            <div>error</div>
          )}
        </div>


      </div>
  
    );
  };
  
  export default Begivenhedertest;
  