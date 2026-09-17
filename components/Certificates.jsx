

"use client"


import { motion } from "framer-motion";

// Certificates data — for use in portfolio (no images, data only)

const certificates = [
  {
    id: 1,

    title: "Backend Web Development Training (Node.js)",

    issuer: "SEF Academy",

    score: "97%",

    duration: "120 Hours",

    date: "2026-08-10", // 10/8/2026

    type: "Training",

  },

  {
    id: 2,

    title: "Technology Track",

    issuer: "Microsoft",

    program: "Tawar w Sayar",

    partners: "Ministry of Communications and Information Technology (MCIT)",

    score: null,

    duration: null,

    date: "2023-02-03", // 3/2/2023

    type: "Track",

  },

  {
    id: 3,

    title: "Soft Skills Track",

    issuer: "Microsoft",

    program: "Tawar w Sayar",

    partners: "Ministry of Communications and Information Technology (MCIT)",

    score: null,

    duration: null,

    date: "2023-01-27", // 27/1/2023

    type: "Track",

  },

  {
    id: 4,

    title: "Back-End Web Development Diploma (Node.js)",

    issuer: "SEF Academy",

    score: "96.99%",

    duration: "3 Months",

    date: "2026-05-03", // 3/5/2026

    type: "Diploma",

  },

  {
    id: 5,

    title: "Front-End Web Development Diploma (React.js)",

    issuer: "SEF Academy",

    score: "97.15%",

    duration: "6 Months",

    date: "2025-12-12", // date on certificate is unclear/garbled (12/12/2015) — verify before using

    type: "Diploma",

  },
];







export const Certificates = () => {



 return (


<section id="certificates" className="py-28 relative overflow-hidden">

<div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5  -translate-y-1/2 rounded-full blur-3xl" />



<div className="container mx-auto px-6 relative z-10">



{/* section headers  */}


<motion.div className="max-w-3xl mb-16 mx-auto text-center"

 initial = {{ opacity : 0 , y:85 , filter :"blur(10px)"}}

whileInView={{ opacity : 1 , y:0 , filter : "blur(0px)"}}

transition={ { duration : 0.8}}

viewport={ { once : true}}

>


<span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase "> Education Journey </span>

<h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">

Certificates that <span className="font-serif italic font-normal tracking-wider text-white">speak volumes</span>

</h2>

<p className="text-muted-foreground"> A collection of diplomas and training tracks in Front-End, <br/> Back-End, and soft skills  backed by Microsoft and SEF Academy.</p>

</motion.div> {/* max-w-3xl mb-16 mx-auto  */}
 


{/* Time line */}


<div className="relative">


<div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70  to-primary/10 md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)] " />


{/* Certificates Items */}

<div className="space-y-12">


{

 certificates.map((cer , idx) => (


 <div key={idx} className="relative grid md:grid-cols-2 gap-8" >

 {/* Time line */}

 <div className="absolute left-0 md:left-1/2 top-0 w-2 h-2 bg-primary -translate-x-1/2 rounded-full animate-pulse ring-4 ring-background/30">

 </div> {/* absolute */}


{/* Content */}

 <div className={`pl-8 md:pl-0 ${ idx % 2 ===0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-10" }`}>


{/*  يعني احنا عملنا باقي قسمة طريقة دي عشان نشوف الرقم انديكس بتاع كل مصفوفة زوجي او فردي ولو طلع فردي يجيبوة على يمين العمود ولو زوجي يكون ع شمال العمود  */}

 <motion.div className="glass flex flex-col gap-2 p-4 rounded-2xl  border border-primary/30 hover:border-primary/50 transition-colors duration-300"
 
 
  initial = {{ opacity : 0 , y:85 , filter :"blur(10px)"}}

whileInView={{ opacity : 1 , y:0 , filter : "blur(0px)"}}

transition={ { duration : 0.85}}

viewport={ { once : true}}
 
 
 >
 
 <span className="text-xl font-semibold mt-2">  {cer.title}</span>
  
 <h3> Issuer : {cer.issuer}</h3>

<p className="text-sm  text-primary font-medium "> <span className="text-white">Date : </span> {cer.date}</p>

<p className="leading-relaxed"> {cer.partners}</p>

 </motion.div> {/* glass flex flex-col gap-2 p-4 */}

 </div> {/* pl-8 md:pl-0 ${ idx % 2 ===0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-10" */}

 </div>  // {/* relative grid md:grid-cols-2 gap-8 */}

 ))

}




</div> {/* space-y-12 */}


</div> {/* relative */}


</div> {/* container mx-auto px-6 relative z-10  */}


 </section> // {/*  py-28 relative overflow-hidden */}


 )   




}