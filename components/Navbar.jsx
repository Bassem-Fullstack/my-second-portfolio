

"use client"

import Image from "next/image"

import Link from "next/link"

import { AnimatePresence, motion } from 'framer-motion';

import {Button} from "./Button"

import { Menu, X  } from "lucide-react";

import { useEffect, useState } from "react";


 const navLinks = [ 

{href : "#home" , label : "Home"} ,

{href : "#about" , label : "About"} ,

{href : "#projects" , label : "Projects"} , 

{href : "#certificates" , label : "Certificates"} ,

{href : "#testimonials" , label : "Testimonials"} , 

]


export default function Navbar () {


const [openMenu , setOpenMenu] = useState(false)


const [scroll , setScroll] = useState(false) 



useEffect(() => {


const handleScroll = () => {


setScroll(window.scrollY > 50 )

}


window.addEventListener("scroll" , handleScroll)

return ()=>  window.removeEventListener("scroll" , handleScroll)

} , [])




return (

<header className={`fixed top-0 left-0 right-0 z-50 py-2 transition-colors duration-500
  
   
      ${ scroll ? "bg-surface/50 backdrop-blur-md " : "bg-transparent"}

  
  `}>

<nav className="container  mx-auto lg:px-6 md:px-3 grid grid-cols-2 md:grid-cols-3 justify-between">


<motion.div className="justify-self-start"

  animate={{ opacity: [1, 0.5, 1]  }}

  transition={{ duration: 2, repeat: Infinity }}
>
  <Image src="/logo.png" alt="BA Logo" width={150} height={70}   className="w-[170px] md:w-[150px]" />

</motion.div> {/* motion.div */}



{/* Desktop Navbar */}

<div className="hidden md:flex justify-self-center py-4 animate-fade-in [animation-delay:200ms]">

 <div className="glass rounded-full p-2 flex  items-center ">
   
   {navLinks.map((eachLink , index) => (

     <Link key={index} href={eachLink.href} className="px-4 py-1 text-sm text-muted-foreground hover:text-foreground hover:bg-surface rounded-full" >{eachLink.label}</Link>

   ))}

 </div> {/* flex items-center gap-1 */}

 </div> {/* flex items-center gap-1 */}


 <div className="justify-self-end flex  items-center animate-fade-in [animation-delay:300ms] ">
  
 <a className="hidden md:flex " href="#contact">

   <Button>Contect Me</Button>


   </a>   {/*  hidden md:flex  */}


{/* menu moblie زر هيدر منيو */}

<button className={`md:hidden absolute right-8  transition-transform duration-300 text-foreground ${openMenu ? "rotate-180" : "rotate-0"} `} onClick={()=> setOpenMenu(!openMenu)}>

{ openMenu ? <X size={24}/> : <Menu size={24} />  }

</button>



 </div>









</nav> {/* container mx-auto px-6 grid grid-cols-3  */}




  {

   openMenu &&(

  <div className="md:hidden glass-strong animate-fade-in rounded-md"
  
  // initial = {{opacity : 0 , height : 0 }}
  
  //  animate = {{ opacity : 1 , height : "auto" }} 

  //    exit={{ opacity: 0, height: 0 }}

  // transition={{ duration: 0.4, ease: "easeInOut" }}

  >


   <div className="container mx-auto p-6 flex flex-col items-center gap-4">
   
 {navLinks.map((eachLink , index) => (

     <Link key={index} href={eachLink.href} onClick={()=> setOpenMenu(false) } className="text-lg text-muted-foreground hover:text-foreground py-2" >{eachLink.label}</Link>

   ))}

   <a href="#contact">

  
  <Button className="hover:-translate-y-1 py-4 transition-transform duration-300">
   
  
    Contect Me 

  </Button>
  
  </a>

   </div>


 </div> // {/* md:hidden glass-strong */}


   )} 



</header> //{/* fixed top-0 left-0 right-0  z-50 bg-transparent py-2 */}


)


}