import axios from "axios";
import {remark} from 'remark'
import html from 'remark-html'
import React, { lazy } from 'react';
import Image from 'next/image'

function Blog({ overskrift, paragraph, image, dato }) {
 
  const processedContent = remark().use(html).processSync(paragraph).toString()
  const d = new Date(dato)
  const f = new Intl.DateTimeFormat('da-DK', {
     dateStyle: 'long',
     

    
    })

// <h1 className="text-center text-4xl sm:text-5xl font-extralight pb-10 py-16 sm:py-8">
    return (
      
      <>
      <div className="flex justify-center">
        <Image src={image} width={1000} height={500} placeholder="blur" alt="header image" blurDataURL="true"/>
      </div>
      <h1 className="text-4xl font-extralight mb-2 mt-5 text-center">{overskrift}</h1>
      <p className="mb-5  italic text-sm text-center">{f.format(d)}</p>
      <div className="markdown">
      <div dangerouslySetInnerHTML={{ __html: processedContent }} />
      </div>
      </>
)
  }
  
  export async function getServerSideProps({ query }) {
  
  const blogID = query.blog
  const billede = query.billede


      const client = axios.create({
        baseURL: 'https://cdn.contentful.com',
        headers: {
          'Content-Type': "application/json",
          'Authorization': `Bearer ${process.env.API_KEY}`
        },

      })
      
  
  try {
      const response = await client.get(`/spaces/v9sb7460yx5u/entries/${blogID}`)
      const responseImage = await client.get(`/spaces/v9sb7460yx5u/assets/${billede}`)
       const blogs = response.data
       const imageURL = responseImage.data.fields.file.url
       
       
       return {
        props: {
            blogs,
            imageURL
            
           
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
  
  export default function BlogPost ({blogs, imageURL}) {
  


    return (
      <div className="bg-background px-10 sm:px-24 pb-20">
       <Blog
                    overskrift={blogs.fields.overskrift}
                    paragraph={blogs.fields.paragraph}
                    resume={blogs.fields.resume}
                    image={
                      "https:" + imageURL
                    }
                    dato={blogs.fields.dato}
                    
                  />
  </div>
    );
  };
  
  
  