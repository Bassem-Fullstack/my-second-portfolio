


"use client"

import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

import Image from "next/image"

import { useState } from "react"


import { motion } from "framer-motion" 



const testimonials = [
    
    
{

  id : 1 ,
  
  author : "Bassem is one of the most talented engineers I have worked with , His attention to detail and ability to translate complex requirements into elegant solutions is remarkable." ,

  name : "Sarah Chen" ,

  role : "CTO.Tech Innovators Inc." ,
  
  image : "/pic4.png"

} ,


    
{

  id : 2 ,
  
  author : "Working with Bassem was a game-changer for our project.He delivered ahead of schedule with code quality that set a new standard for our team." ,

  name : "Michael Rodriguez" ,

  role : "Product Manger." ,
  
  image : "/pic3.png"

} ,


    
{

  id : 3 ,
  
  author : " Not only is Bassem techically brilliant , but he is also fantastic communicator and team player. He elevated everyone around him." ,

  name : "David Kim" ,

  role : "CEO.Innovation Hub." ,
  
  image : "/pic1.png"

} ,


]






export const SweetComments = () => {



const [currentIndex , setCurrentIndex ] = useState(0) 


const handleNext = ( ) => {


if(currentIndex === testimonials.length-1) {


 setCurrentIndex(0) // بقولوة لو انا واقف على اخر عنصر في انديكس مصفوفة ارجع للقيمة ابتدائية يعني معناها ارجع للقيمة انديكس الاول بتاع مصفوفة 


// length-1  لينس لو فاكر زمان كان بيحسب عدد العناصر مصفوفة ويبدأ العد من 1 لكن الانديكس يبدأ العد من الصفر عشان كدة احنا عندنا تلات عناصر داخل مصفوفة لما يجي يعد هيعد 0 1 2 دة الانديكس لكن لينث بيعد 1 2 3 عشان كدة قولتلوة -1 عشان انديكس ميروحش يكمل عد ويلاقي العنصر التالت مش موجود هيضرب ايرور

}


else {

 setCurrentIndex( currentIndex + 1)


// بقولوة لو انت مش واقف على اخر مصفوفة ولسة هتبدأ عد من الصفر من اول خالص زود واحد وانت طالع

}

}



const handlePrev = () => {



if (currentIndex === 0 ) {

  setCurrentIndex(testimonials.length-1) // لو انا واقف على اول عنصر ارجع لاخر عنصر في انديكس

}

else {

 setCurrentIndex(currentIndex - 1) // لو انا مش واقف على اول عنصر لما تيجي ترجع نقص واحد يعني ارجع لوراة

}



}


// زر بيزود عنصر عدة واحدة ولو وصل لاخر بيرجع لاول عنصر تاني انديكس والزر تاني بينقص عنصر واحد ولو وصل لاول عنصر هيرجع لعنصر لاخر عنصر تاني



// [الأول: 0]  <--->  [الثاني: 1]  <--->  [الأخير: 2]
//     |                                       |
//     +---- (دوس سابق) <----------- (دوس التالي) ---+



return (


<section id="testimonials" className="py-20 mt-12 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 w-[800px] h-[800px]  bg-primary/5 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />

 
<div className="container mx-auto px-6 relative z-10">


{/* Section Text */}


<motion.div className="text-center max-w-3xl mx-auto mb-10"


 initial = {{ opacity : 0 , y:85 , filter :"blur(10px)"}}

whileInView={{ opacity : 1 , y:0 , filter : "blur(0px)"}}

transition={ { duration : 0.8}}

viewport={ { once : true}}

>


<span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase ">

Whate People Say

</span>

<h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">

Kind words from {" "}

<span className="font-serif italic font-normal tracking-wider text-white ">

 amazing people.

</span>

</h2>


</motion.div> {/*  text-center max-w-3xl mx-auto mb-16   */}



{/* Comments Others */}


<div className="max-w-2xl mx-auto">

<motion.div className="relative"



 initial = {{ opacity : 0 , y:85 , filter :"blur(10px)"}}

whileInView={{ opacity : 1 , y:0 , filter : "blur(0px)"}}

transition={ { duration : 0.8}}

viewport={ { once : true}}


>

{/* Quato علامة كومة */}

<div className="glass p-8 rounded-3xl md:p-10  shadow-[0px_0px_20px]  shadow-primary/30">

 <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center"> 
  
  <Quote className="w-5 h-5 text-primary-foreground"/> 
  
  </div> {/* absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center */}
 
{/* 
 <p>"{testimonials[0].author}"</p>  */}

<p className="text-xl font-medium leading-relaxed mb-4 pt-4 text-center">"{testimonials[currentIndex].author}"</p>
 
 <div className="flex gap-4 items-center justify-center">

 <Image src={testimonials[currentIndex].image} alt={testimonials[currentIndex].author} width={300} height={300} className="w-14 h-14 rounded-full object-cover border-2 border-primary" />

 
 <div className="###">

 <div className="font-semibold"> {testimonials[currentIndex].name} </div>

 <div className="text-sm text-muted-foreground"> {testimonials[currentIndex].role} </div>

 </div> {/* ### */}


 </div> {/* flex gap-4 items-center */}


</div>  {/* glass p-8 rounded-3xl md:p-12  shadow-[0px_0px_20px]  shadow-primary/30 */}

</motion.div> {/* relative */}




<div className="flex items-center justify-center gap-4 mt-8 ">
 
 <button onClick={handlePrev} className="p-2 glass rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
 
 <ChevronLeft size={20}/>

 </button>


<div className="flex gap-2 items-center">

 { 
 
  testimonials.map((_ , i) => (

  <button key={i} className={`w-2 h-2 rounded-full transition-all duration-300 ${i ===currentIndex ? "bg-primary w-7" : "bg-muted-foreground/30"} hover:bg-muted-foreground/50`} />

  )) 

 }


<button onClick={handleNext} className="p-2 glass rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
 
 <ChevronRight size={20}/>

 </button>

</div> {/* flex gap-2 items-center */}

</div> {/* flex items-center justify-center  */}


</div> {/* max-w-4xl mx-auto */}


</div> {/* container mx-auto px-6 relative z-10  */}


</section> // {/* py-24 relative overflow-hidden  */}


)




}