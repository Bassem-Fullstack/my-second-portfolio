// "use client"

// import { useEffect, useState } from "react"

// const greetings = ["مرحبا", "Hello", "Hola", "Bonjour", "Ciao", "こんにちは", "你好"]


// export const Preloader = () => {
//   const [index, setIndex] = useState(0)
//   const [isLeaving, setIsLeaving] = useState(false)
//   const [isDone, setIsDone] = useState(false)

//   useEffect(() => {
//     document.body.style.overflow = "hidden"

//     // return () => {
//     //   document.body.style.overflow = ""
//     // }
//   }, [])

//   useEffect(() => {
//     const isLast = index === greetings.length - 1

//     const timer = setTimeout(() => {
//       if (isLast) {
//         setIsLeaving(true)
//       } else {
//         setIndex((prev) => prev + 1)
//       }
//     }, 600)

//     return () => clearTimeout(timer)
//   }, [index])

//   const handleTransitionEnd = () => {
//     setIsDone(true)
//     document.body.style.overflow = ""
//   }

//   if (isDone) return null
// return (
//   <div
//     onTransitionEnd={handleTransitionEnd}
//     className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-transform duration-700 ease-in-out
//       ${isLeaving ? "-translate-y-full" : "translate-y-0"}`}
//   >
//     {!isLeaving && (
//       <style>{`.animate-fade-in { animation-play-state: paused !important; }`}</style>
//     )}

//     <h1
//       key={index}
//       className="text-5xl font-bold text-foreground"
//       style={{ animation: `greeting 0.6s ease-in-out forwards` }}
//     >
//       {greetings[index]}
//     </h1>
//   </div>
// )
// }




"use client"

import { useEffect, useState } from "react"




 const greetings = ["مرحبا", "Hello", "Hola", "Bonjour", "Ciao", "こんにちは", "你好"]



export const Preloader = () => {


const [isIndex ,  setIsndex] = useState(0) 


const [isLeaving , setIsLeaving] = useState(false)

// const [isDone , setIsDone] = useState(false) //  دة ستيت بيمسح محتوي كلة من متصفح بعد ما الصفحة تخلص تحميل عشان ميبقاش تقيل على ذاكرة وكدة كدة انت مش هتستخدم صفحة في حاجة عشان كدة بنمسح محتوي بعد ما بيتحمل من دوم وبعدين نمسحوة من دوم عشان ميتقلش على ذاكرة 



useEffect(()=> {


document.body.style.overflow = isLeaving ? "" : "hidden"

}, [isLeaving])


useEffect(()=> {


const isLast = isIndex === greetings.length - 1


const timer = setTimeout( ()=> {

if(isLast) {

setIsLeaving(true) 

}


else {

 setIsndex((prev) => (prev + 1)) // يزود واحد على انديكس يعني كل مرة يزود عنصر يخش على عنصر او كلمة بعدة في حالة لو موصلش لاخر كلمة لكن لو وصل لاخر كلمة ستارة هتترفع اللى هو باك جراوند 

}

}

  
, 600)


// ربطناها بوقت عشان خاطر الحركة تكون سلسة مع انيمشين


return ()=> clearTimeout(timer)

} , [isIndex]) 





return (

<div className={`fixed inset-0 bg-background z-[999] flex items-center justify-center transition-transform duration-700 ease-in-out
  
  ${isLeaving ? "-translate-y-full" : "translate-y-0"}
  
  `}>


{/* {important */}

{
 !isLeaving && (

  <style>{`.animate-fade-in {animation-play-state : paused; !important }`}</style>
  
//  استخدمت ستايل مخصوص عشان اجمد انميشن بتاع هيرو سيكشن وقت ما صفحة تحميل تكون بتحمل

 )

}



<h1

key={isIndex}

className="text-6xl font-bold text-foreground"

style={{animation : "greeting 0.6s ease-in-out forwards"}}

>


{
  greetings[isIndex]
}

</h1>

</div>

)

}

