

"use client"

import { Code2, Lightbulb, Rocket, Users } from "lucide-react"

import { motion } from "framer-motion"


const highLights = [
 
{ icon : Code2 , title : "Clean Code" , desc : "Writing maintainable , scalable code that stands the test of time."} ,


{ icon : Rocket , title : "Performance" , desc : "Optimizing for speed and delivering lightning-fast user experience."} ,


{ icon : Users , title : "Collaboration" , desc : "Working closely with teams to bring ideas to life."} ,


{ icon : Lightbulb , title : "Innovation" , desc : "Staying ahead with the latest technologies and best practices. "} ,

]



export const About = () => {



return (

<section id="about" className="py-28 relative overflow-hidden">

<div className="container mx-auto px-6 relative z-10">

<div className="grid lg:grid-cols-2 grid-cols-1 gap-16 items-center justify-center">

{/* Left columan */}

<div className="space-y-10">

<motion.div className="absolute inset-0 text-center"

initial = {{ opacity : 0 , y:85 , filter :"blur(10px)"}}

whileInView={{ opacity : 1 , y:0 , filter : "blur(0px)"}}

transition={ { duration : 0.75}}

viewport={ { once : true}}

>

<span className="text-secondary-foreground  text-lg font-medium tracking-wider uppercase">  

About Me

</span>

</motion.div> 

 <motion.h2 className="text-4xl md:text-5xl font-bold  leading-tight text-center lg:text-left text-secondary-foreground"
 
 initial = {{ opacity : 0 , y:85 , filter :"blur(10px)"}}

whileInView={{ opacity : 1 , y:0 , filter : "blur(0px)"}}

transition={ { duration : 0.8}}

viewport={ { once : true}}

 
 
 
 > 
    
Building the future, <span className="font-serif  italic font-normal text-white"> one component at a time. </span>
    
    
</motion.h2>



<motion.p className="text-muted-foreground px-2 text-center lg:text-left"


 initial = {{ opacity : 0 , y:85 , filter :"blur(10px)"}}

whileInView={{ opacity : 1 , y:0 , filter : "blur(0px)"}}

transition={ { duration : 0.8}}

viewport={ { once : true}}


> I am a passionate Full Stack Developer who enjoys building modern web applications from concept to deployment. I work with both frontend and backend technologies to create responsive, scalable, and user-friendly solutions. Through real-world projects, I continuously improve my skills, explore new technologies, and focus on delivering clean, efficient, and reliable applications.</motion.p>

<motion.div className="glass p-6 rounded-2xl shadow-[0_0_20px]  shadow-primary/25 "


 initial = {{ opacity : 0 , y:85 , filter :"blur(10px)"}}

whileInView={{ opacity : 1 , y:0 , filter : "blur(0px)"}}

transition={ { duration : 0.89}}

viewport={ { once : true}}




>
 
 <p className="text-lg font-medium text-foreground italic text-center lg:text-left"> " My mission is to create full website that are not just functional.but truly delightful _ products that users love to use and developers love to maintain."  </p>


</motion.div> {/* glass p-6 rounded-2xl */}

</div> {/* grid md:grid-cols-2 gap-16 items-center */}

{/* Right column - HighLights */}

<div className="grid lg:grid-cols-2 gap-6 ">

 
{
 
 highLights.map((item , index) => (


  <motion.div key={index} className="glass p-4 rounded-2xl flex flex-col items-center justify-center"
  
  
  
   initial = {{ opacity : 0 , y:85 , filter :"blur(10px)"}}

whileInView={{ opacity : 1 , y:0 , filter : "blur(0px)"}}

transition={ { duration : 0.89}}

viewport={ { once : true}}

  
  
  
  
  >

   <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 transition-colors hover:bg-primary/20">
     
    <item.icon className="w-6 h-6 text-primary"/>

   </div>
   
   <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
     
   <p className="text-sm text-muted-foreground text-center">{item.desc}</p>

  </motion.div>


 ))

} 




</div> {/* grid sm:grid-cols-2 gap-6 */}

</div>

</div> {/* container mx-auto px-6 relative z-10 */}

</section> // {/* py-32 relative overflow-hidden */}

)

}