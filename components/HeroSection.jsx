

"use client"
import Image from "next/image"

import { useEffect, useState } from "react"

import { Button } from "./Button";

import { ArrowDown, ChevronDown, Download, Gift} from "lucide-react";

import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";


import { motion } from "framer-motion"; 


import { TypewriterText } from "./WriterType"

const starPositions = [

  { left: 78.78, top: 63.69 },

  { left: 24.63, top: 65.43 },

  { left: 32.75, top: 51.77 },

  { left: 87.38, top: 63.86 },

  { left: 29.28, top: 41.77 },

  { left: 34.58, top: 4.03 },

  { left: 44.17, top: 95.54 },

  { left: 23.27, top: 93.03 },

  { left: 6.05, top: 99.92 },

  { left: 15.71, top: 97.12 },

  { left: 14.27, top: 75.27 },

  { left: 23.01, top: 99.85 },

  { left: 96.98, top: 43.21 },

  { left: 30.70, top: 46.28 },

  { left: 97.19, top: 33.47 },

  { left: 79.93, top: 98.48 },

  { left: 49.99, top: 13.66 },

  { left: 8.67, top: 87.43 },

  { left: 10.27, top: 34.13 },

  { left: 69.94, top: 53.10 },

  { left: 73.66, top: 9.43 },

  { left: 1.10, top: 54.46 },

  { left: 13.75, top: 17.03 },

  { left: 96.04, top: 65.10 },

  { left: 47.10, top: 27.85 },

  { left: 25.88, top: 8.54 },

  { left: 54.40, top: 54.39 },

  { left: 81.38, top: 76.26 },

  { left: 58.35, top: 60.20 },

  { left: 14.74, top: 47.22 },

];










const skills = [

"React"  ,

"Tailwind CSS" ,

 "Bootstrap"  ,

 "Redux Toolkit" ,

" AI Google Gemini" ,

 "Next.js" ,

 "Node.js" ,

 "Express.js" ,

 "MongoDB"  ,

"HTML5" ,

"CSS3" ,

"JavaScript"  ,

]







export const HeroSection = () => {


const [mounted , setMounted] = useState(false) 



useEffect(()=> {

setMounted(true) 


// math.random () انا عملت ستيت عشان يمنع ايرور كان بيحصل سيرفر اتشمل يبعت قيمة ماس رندم للمتصفح فالمتصفح هنا برضو بيعرض قيمة مختلفة رقم عشوائي مختلف عن رقم العشوائي اللى جاي من سيرفر فالريأكت حس ان فية ايرور لانهم مش نفس قيمة سيرفر بعت رقم عشوائي ومتصفح بعت رقم عشوائي تاني خالص فالاتنين مش نفس قيم اما راح ضربلك ايرور فالحل هنا اية الحل ان يوس ايفكيت يستني لغاية ما سيرفر يبعت قيم عشوائية ويوس ايفكيت يرندر على متصفح فقط يعني من الاخر خلينا يوس ايفكيت يستنا وينتظر رد سيرفر نيكست جيس بعد ما يرمي قيمة بتاعتة ويوس ايفكيت يرندر قيمة ثابتة على متصفح فقط مالوش علاقة بقيمة عشوائية جاية من سيرفر


// نيكست جيس بياخد ماس رندم ويبصيها للمتصفح نيكست جيس بنفس قيمة طبعا المتفح ريأكت بنستخدم يوس ايفكيت و دة عشان ينتظر لحد ما يبعتلوة قيمة ثابتة جاية من سيرفر ويكون نفس قيمة سيرفر نيكست جس هي هي نفس قيمة على متصفح


// math.random () = 2 السيرفر نيكست جيس بيروح يحدف القيمة دي على متصفح بيكون المتصفح رياكت عندة قيمة تانية غير 2 بيجي بقي على رياكت يضربلك ايرور

// math.raddom () = 3 دة قيمة متصفح ريأكت ضربلك ايرور لان متصفح متوقع ان قيم هتيجي من سيرفر قيم ثابتة وطبعا خاصية ماس كل شواية تكريت رقم عشوائي مختلف مرة على سيرفر نيكست جيس كريتلك رقم 2 وانت هنا على متصفح كريت رقم 3 فريأكت حس ان قيم مختلفة مش زاي بعض اما راح ضربلي ايرور 

// فالحل هنا عملنا يوس ايفكيت ينتظر القيمة اللى جاية من السيرفر وياخدها ويعرضها على طول اول ما الصفحة تفتح بحيث نمنع ماس ريندم يكريت رقم عشوائي جديد مختلف وطبعا رياكت ونيكست جيس هيكونوا نفس رقم عشوائي بتاع ماس اصبح بقي مفيش ايرور لانهم نفس قيمة

} , [])


return (

<section id="home" className="relative min-h-scren flex flex-col z-40 items-center  overflow-hidden ">


{/* bg-image */}



<div className="absolute inset-0">
 
 <Image src="/hero-bg.jpg" alt="hero-image" fill className="w-full h-full object-cover opacity-40"   />


 <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
  

</div> {/* absolute inset-0 */}




{/* Green Stars */}


<div className="absolute inset-0 overflow-hidden">
 
{/* احنا هنعمل نجوم صغيرة حوالين هيرو سكشين الفكرة هنا استخدمنا خدعة بسيطة استخدمنا ارية 30 مرة تكرار طبعا العناصر دي بتكون فاضية طبعا 30 مصفوفة فاضية وسبيرد اوبيترتور بيحدث قيم اللى جواها ايا كان قيم بتعرضها ولو كان قيم فاضية سبيرد اوبيترتور بيحولها انديفينت على طول هنبدأ بقي نضيف نجوم بتاعنا */}

 {
  mounted && starPositions.map((star , index) => (

  <div className="w-1.5 h-1.5 rounded-full absolute opacity-60 "
  
  key={index} 
  
  style={{

     backgroundColor : "#20B2A6" ,
     
     top : `${star.top}%` ,

     left : `${star.left}%`,

     animation : `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite` ,

     animationDelay : `${Math.random() * 5}s`

  }}

  >

  </div>  //{/* w-1.5 h-1.5 rounded-full absolute */}


  ))

 }



</div> {/* absolute inset-0 */}



{/* Contents  تفاصيل */}

<div className="container mx-auto px-6 md:px-11 pt-32 relative z-10">

{/* left-column Text Conten */}


<div className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-center">
 

 <div className="space-y-8">

 <div className="animate-fade-in text-center lg:text-left">
 
 <span className="inline-flex gap-1 items-center rounded-full glass px-2 py-1 text-sm text-primary">

 <span className="w-2 h-2 bg-primary rounded-full animate-pulse "/> Software Engineer • Full Stack Specialist

{/* •  خلي بالك انا عملت سبان واحدة فقط وقفلت تاج عشان خاطر اعمل نقطة دي ودامك مش عايزها تاخد مساحة كلام اللى بعدة وتاخد باقي كلام اللى بعدة انا عايز اعمل نقطة واحدة فقط جمب كلام كدة   */}
 
  </span>

 </div> {/* animate-fade-in */}



{/* Headline */}


<div className="space-y-4 text-center lg:text-left">
 
 <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold animate-fade-in [animation-delay:100ms]">

 <span className="-tracking-tight leading-tight">Hello, I am</span> 

<br/>

<span className="leading-tight -tracking-tight">Bassem Ali</span>

<br/>

<span className="font-serif italic text-primary leading-tight">  <TypewriterText />  </span>


 </h1>


<p className="mx-auto text-muted-foreground max-w-lg  animate-fade-in [animation-delay:200ms]">

Full-Stack Developer focused on building modern, responsive, and user-friendly web applications with clean and scalable code.

</p>

 <div className="flex lg:flex-row flex-col items-center  gap-5 animate-fade-in  [animation-delay:300ms]">

 <a href="#contact">

  
  <Button className="hover:-translate-y-1 py-4 transition-transform duration-300">
   
  
    Contect Me <ArrowDown size={20} />

  </Button>
  
  </a>
  
  <span className="relative rounded-full hover:bg-primary/30 hover:-translate-y-1 transition-all duration-300  overflow-hidden bg-surface  p-5 cursor-pointer"> 
 
 <svg xmlns="http://www.w3.org/2000/svg" className=" absolute inset-0 w-full h-full pointer-events-none" >


 <rect
  
  width="100%" 

  height="100%" 

  rx="32" 

  fill="none"

  stroke="rgb(var(--color-primary))"
  
   strokeWidth="2"
    
   strokeDasharray="550 400"

   className="animate-border-path"

 />


 </svg>



 <a className="inline-flex gap-2" href="/bassem-ali-fullstack-cv.pdf" download > Download CV <Download size={20}/> </a>

  </span>

</div> {/* flex gap-4  */}


{/*  social Links  */}


<div className="flex px-1 items-center lg:justify-start justify-center gap-2 animate-fade-in [animation-delay:400ms] ">


 <span className="text-sm text-muted-foreground">Follow :  </span>

<a className="p-2 rounded-full glass hover:bg-primary/10  hover:text-primary cursor-pointer transition-all duration-300" href="https://github.com/Bassem-Fullstack" target="blank"> <FaGithub className="w-5 h-5"/> </a>

<a className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary cursor-pointer transition-all duration-300" href="https://www.linkedin.com/in/bassem-ali-040b04356" target="blank">  <FaLinkedin className="w-5 h-5" /> </a>



</div> {/* flex items-center gap-2  */}

</div> {/* space-y-4  */}



</div> {/* space-y-8  */}


{/* right-column My Image Conten */}

<div className="relative animate-fade-in [animation-delay:350ms] ">



<div className="relative max-w-md mx-auto">


<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 animate-pulse to-primary/10 blur-2xl" />


<div className=" relative glass rounded-3xl p-2 bg-gray-950  shadow-[0_0_20px]  shadow-primary/25">


<Image alt="profile" width={700} height={716} src="/profile1.png" className="w-full object-cover rounded-2xl" unoptimized priority  />




{/* floating badge */}


<div className="absolute -bottom-4 -right-4 glass rounded-xl p-3 animate-float">

 <div className="flex gap-2 items-center">

 <div className="w-2 h-2 animate-pulse bg-green-500 rounded-full"/>

 <span className="text-sm font-medium">Availabe for work</span>

 </div> {/* flex gap-2 items-center */}

</div> {/* absolute -bottom-4 -right-4 glass rounded-x */}



{/* stats badge */}


<div className="absolute -top-4 -left-4 glass rounded-xl p-3 animate-float">

  <div className="text-2xl text-center font-bold text-primary">2+</div>
   
   <div className="text-xs  text-muted-foreground">Years Building.</div>

</div> {/* absolute -top-4 -left-4 glass rounded-xl p-3 */}


</div> {/* relative glass rounded-3xl p-2  shadow-[0_0_20px] */}


</div> {/* relative max-w-md mx-auto */}


</div> {/* relative animate-fade-in [animation-delay:350ms]*/}


</div> {/* grid lg:grid-cols-2 gap-12 items-center */}



 {/* Skills section */}


<div className="mt-20">
 
 <motion.p className="text-[17px] italic animate-fade-in [animation-delay:400ms] text-center text-muted-foreground tracking-wider mb-5"
 
initial = {{ opacity : 0 , y:85 , filter :"blur(10px)"}}

whileInView={{ opacity : 1 , y:0 , filter : "blur(0px)"}}

transition={ { duration : 0.75}}

viewport={ { once : true , amount : 0.3}}



> Technologies I work with</motion.p>


<motion.div className="relative overflow-hidden z-20 "

initial = {{ opacity : 0 , y:85 , filter :"blur(10px)"}}

whileInView={{ opacity : 1 , y:0 , filter : "blur(0px)"}}

transition={ { duration : 0.8 }}

viewport={ { once : true , amount : 0.3}}
 




>
 
 <div className="flex animate-marquee"

 
 > { [...skills , ...skills].map((skill , index) => (

// عملت اتنين سكيلز عشان خاطر اعمل انيمشين شريط بتاعي وهو عبارة عن سكرول بيتحرك تلقائي لوحدة من يمين لشمال طبعا انا طبعت قيم مرتين سكيلز عشان خاطر امنع فراغ بيحصل بمعني بمعني انك لو كتبت سكيلز واحدة بس هتلاقي شريط وصل عند اخر كلمة وبان فراغ شواية كدة وهيرجع يعيد تاني نفس سكيلز واحنا مش عايزين يبان فراغ يعني وصل لااخر كلمة خلاص مش هيبدأ يعرضلك سكيلز هيسيب فراغ بسيط حبتين عشان لحد ما شريط يخلص ويرجع يعرضلك سكيلز بتاعك عشان كدة وهيعرضلك شاشة فاضية وفراغ فاضي لحد ما شريط سكورول يخلص ويرجع يعرضلك كلمات تاني عشان كدة استخدمت سكيلز مرتين عشان نمنع فراغ
 
// ... طبعا استخدمت سبيرد اوبيرتور عشان خاطر اعرف متصفح او ريأكت ان دة مصفوفة معاها مصفوفة ومكررها مرتين الهدف احنا بنمنع الفراغ اللى بيحصل لو كنت طبعت مصفوفة واحدة فقط كان هيبقي في فراغ واضحة لحد ما انمشين او سكرول يخلص عشان كدة استخدمت سبيرد اوبيرتور بقولوة كررلي قيم دي مرتين بحيث يكرر نفس قيم ميكررلكش نفس مصفوفة عشان كدة لو مكنتش استخدمت سبيرد اوبيرتور كان هيحصل فراغ وكان هيعملك مصفوفة داخل مصفوفة يعني مصفوفتين داخل مصفوفة كبيرة و دة خلط احنا عايزينوة يعمل انيمشين على قيم موجودة مصفوفة فقط مش يعملي مصفوفة داخل مصفوفة ويبقي فية فراغ 

// كمان فيما بعد لو حبيت تضيف قيمة هتروح تضيفها في المصفوفة اللى فوق بتاع سكيلز لو حبيت تضيف سكيلز بعدين فيما بعد هتضاف جوة مصفوفة والمصفوفة هتتحدث تلقائي لوحدها وكمان استخدمنا سبيرد اوبيرتور هنا عشان خاطر انيمشين نكرر مصفوفة مرتين 

// contact ممكن تستخدم كونتيكت يعني هي يجمعلك كل قيم بتاع مصفوفة الاولي فيها قيم والمصفوفة تانية فيها قيم ويحطهالك كلهم مرة واحدة في مصفوفة واحدة كبيرة هي هي بدل ما تستخدم سبيرد اوبيرتور هي هي نفس فكرة

// لو لاحظت اني شيلت سبيرد اوبيرتور من سكيلز مصفوفين اتنين وبيفوت كدة بيحصل رعشة يقف ويرجع يكمل تاني عشان بيخرج من مصفوفة الاولة يخش يلف على مصفوفة تانية واحنا مش عايزين كدة احنا عايزين يلف على قيم داخل مصفوفة مش يلف على مصفوفة مصفوفة عشان كدة استخدمت سبيرد اوبيرتور عشان يعرف دة مصفوفة عشان اكرر مصفوفتين ويلف على قيم بتاعتها

<div key={index} className="px-6 mb-3 py-4">

  <span className="text-nowrap text-xl font-semibold text-muted-foreground/50 hover:text-primary cursor-pointer transition-colors duration-300">{skill}</span>

</div> // {/* px-6  py-4 */}


 ))} 
 
 </div>  {/* flex animate-marquee */}

 {/* استخدمت سكيلز مرتين عشان حركة تكون سلسة */}

</motion.div> {/*relative overflow-hidden  */}


</div> {/* mt-20 animate-fade-in [animation-delay:400ms] */}



</div> {/* container mx-auto px-6 pt-32 pb-20 relative z-10  */}


<motion.div className=" flex flex-col items-center gap-2"

initial = {{ opacity : 0 , y:50 , filter : "blur(10px)" }}

whileInView={{ opacity : 1 , y:0 , filter : "blur(0px)" }}

transition={ { duration : 0.83 }}

viewport={ { once : true }}


>


<Link href="#about" className="flex flex-col items-center gap-2 text-muted-foreground">


<span className="text-xs uppercase glass rounded-full px-3 py-1 "> Scroll </span>

<ChevronDown className="w-5 h-5 animate-bounce"/>

</Link>


</motion.div> {/* absolute bottom-8 left-1/2   */}

</section> // {/* relative min-h-screen flex items-center */}





)


}