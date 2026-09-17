

"use client"

import { motion } from "framer-motion"

import { ArrowRight , ArrowUp, ArrowUpRight, Galaxy } from "lucide-react";

import Image from "next/image";
import { FaGithub } from "react-icons/fa6";









 const projects = [

{
    id : 1 ,

    title : "E-commerce Platform",
    
    des: "A full-stack E-commerce platform built for high performance and smooth user experience. Features robust state and cart management powered by Redux Toolkit, secure authentication using JWT tokens, and dynamic product data management backed by MongoDB. Includes responsive product filtering, quantity controls, and a persistent shopping cart across sessions.",

    img : "/image1.png" ,
     
    tags : ["Next.js" , "Redux Toolkit" , "MongoDB" , "JWT" , "Tailwind CSS" ] ,

    code : "https://github.com/Bassem-Fullstack/Coffe-Store-FrontEnd.git" ,

    demo : "https://coffe-store-front-end.vercel.app"

},


{
    id : 2 ,

    title : "AI Resume Builder",

    des: "AI-powered CV Builder leveraging the Google Gemini API to generate professional resume content. Features real-time state management with Redux Toolkit and live previews, allowing users to instantly export their finalized resume as a clean PDF file. Supports multiple resume templates and section customization for a tailored final result.",

    img : "/image5.png" ,
    
    tags : ["Next.js" , "Node.js" , "MongoDB" , "Gemini API" , "Passport" , "Tailwind CSS"] ,

    code : "https://github.com/Bassem-Fullstack/ResumeCV-FrontEnd.git" ,

    demo : "https://resume-cv-front-end.vercel.app"
},


{
    id : 3,

    title : "AI Translation App",

    des: "An AI-powered translation tool built with the Google Gemini API, featuring speech-to-text input via the Web Speech API and a history sidebar for reviewing past translations. Backed by a centralized Axios instance with token-refresh interceptors for seamless authenticated requests. Supports multiple language pairs with instant translation feedback.",

    img : "/image3.png" ,

    tags : ["Next.js" , "Express.js" , "Gemini API" , "Web Speech API" , "Tailwind CSS"] ,

    code : "https://github.com/Bassem-Fullstack/TranslationFrontEnd.git" ,

    demo : "https://translation-front-end-bice.vercel.app/register"
},


{
    id : 4,

    title : "Quick Chat _ Messaging",

    des: "A real-time chat application built with Socket.io for instant private and group messaging, featuring live typing indicators and online presence tracking. Includes Google OAuth login and Cloudinary-powered profile picture uploads. Designed with a responsive interface that keeps conversations synced instantly across devices.",

    img : "/image2.png" ,

    tags : ["Next.js" , "Socket.io" , "MongoDB" , "Passport.js" , "Tailwind CSS"] , 

    code : "https://github.com/Bassem-Fullstack/ChatApp_frontEnd-.git" ,

    demo : "https://chat-app-front-end-livid-ten.vercel.app/register"
},



{
  id: 5,

  title: "AI Image Generator",

  des: "An AI-powered tool that turns text prompts into images instantly. Users write a description in Arabic, which gets translated to English in real-time using the Google Gemini API, then passed to the Clipdrop text-to-image API to generate a matching image on the spot. Generated images are saved to a personal gallery, where users can freely add new ones.",

  img: "/image6.png",

  tags: ["Next.js", "Gemini API", "Clipdrop API", "Tailwind CSS" ,"MongoDB" , "Express.js"] , 

   code : "https://github.com/Bassem-Fullstack/Image_Generator_FrontEnd.git" ,

    demo : "https://image-generator-front-end-two.vercel.app"

},

{
    id : 6 ,
    
    title : "E-Commerce REST API",

    des: "A production-grade backend API with Product, Cart, Wishlist, and Order modules, featuring atomic checkout logic built with Mongoose Transactions to prevent race conditions. Integrated Stripe for payments and Brevo for order-confirmation emails. Designed with scalability in mind, supporting concurrent orders without data conflicts.",

    img : "/image4.png" ,

    tags : ["Express.js" , "MongoDB" , "Stripe" , "JWT" , "Node.js"  ], 
    
    code : "https://github.com/Bassem-Fullstack/BackEndStore.git" ,

   
    
},

];


export const Projects = () => {




 return (

<section id="projects" className="py-24 relative overflow-hidden">


{/* Bg glows ضباب باكجرواند */}


<div className="absolute top-1/4 right-0 w-[50%] h-[50%] bg-primary/10 rounded-full blur-3xl animate-pulse " />

<div className="absolute bottom-1/4 left-0 w-[50%] h-[50%] bg-highlight/10 rounded-full blur-3xl animate-pulse " />

<div className="container mx-auto px-6 relative z-10">


<motion.div className="text-center mx-auto max-w-3xl mb-16"

 initial = {{ opacity : 0 , y:85 , filter :"blur(10px)"}}

whileInView={{ opacity : 1 , y:0 , filter : "blur(0px)"}}

transition={ { duration : 0.8}}

viewport={ { once : true}}

>


<span className="text-lg text-secondary-foreground font-medium tracking-wider uppercase italic ">Featured Work </span>

<motion.h2 className="text-3xl  md:text-4xl font-bold mt-4 mb-6 text-secondary-foreground">

    Projects that <span className="font-serif  italic font-normal text-white">make an impact.</span>
</motion.h2>

<p className="text-muted-foreground"> A selection of my recent work , from complex web applications <br /> to innovative tools that solve real-world problems . </p>


</motion.div> { /*  text-center mx-auto max-w-3xl mb-16  */}


<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 ">


{

projects.map((pro , index) => (

 
       
    <div key={index} className=" hover:-translate-y-2  duration-500 h-full ">

    <motion.div className="glass group rounded-2xl border-muted transition-colors duration-500  hover:border-muted-foreground overflow-hidden  h-full flex flex-col"
    
     initial = {{ opacity : 0 , y:85 , filter :"blur(10px)"}}

   whileInView={{ opacity : 1 , y:0 , filter : "blur(0px)"}}

  transition={ { duration : 0.85}}

   viewport={ { once : true}}

    >

     {/* Image  */}

      <div className="relative overflow-hidden aspect-video">
         
        <Image src={pro.img} alt={pro.title} width={500} height={500} className="w-full h-full object-cover" /> 

      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50  opacity-20"/>

    
     {/* overlay links  */}

     <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
     
     <a href={pro.demo} target="blank" className="p-3 glass rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-200 ">
     
      <ArrowUpRight className="w-5 h-5"/>

     </a>
         

      <a href={pro.code} target="blank"  className="p-3 glass rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
         
       <FaGithub className="w-5 h-5"/>  

      </a>   


     </div> {/*  absolute inset-0 flex items-center  */}
        

    </div>  {/*  relative overflow-hidden aspect-video  */}


  
    {/* Content المحتوي تفاصيل عنك وعن مشاريع هباب انت عاملها */}


     <div className="p-3">

      <div className="flex flex-col items-center justify-center gap-2">
       
       <h3 className="text-xl text-center font-semibold group-hover:text-primary transition-colors">{pro.title}</h3>

      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500"/>
      
      <p className="text-center text-muted-foreground text-sm mb-2">{pro.des}</p>
    
     <div className="flex flex-wrap justify-center items-center gap-3 "> 
        
      {pro.tags.map((tag , i) => (

       <span className=" rounded-full bg-surface px-2  py-1 text-xs font-medium text-muted-foreground border border-muted transition-all hover:text-primary hover:border-primary/50 " key={i}>{tag}</span>

      ))} 
      
      </div> {/*  p-3 */}

      </div> {/*  flex flex-col items-center */}   
     
     </div>  {/*  flex flex-wrap justify-center*/}
 

   </motion.div>   {/*  glass group rounded-2xl overflow-hidden */}

     </div>  // {/*  hover:-translate-y-2  duration-500 h-full */}


))

}




</div> { /* grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 */}


</div> { /*  container mx-auto px-6 relative z-10  */}

</section> // { /*  py-28 relative overflow-hidden */}

 )   



}