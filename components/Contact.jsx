


"use client"

import { motion } from "framer-motion"

import { Mail, MapPin, Phone, Send } from "lucide-react"

import { Button } from "./Button"

import { useState } from "react"

import emailjs from "@emailjs/browser" 

import { toast } from "react-toastify"



const contactInfo = [


{

 id : 1 ,

 icon : Mail ,

 label : "Email" ,
 
 value : "bassemali102345@gmail.com" , 

 href :  "https://mail.google.com/mail/?view=cm&fs=1&to=bassemali102345@gmail.com", 

} ,




{

 id : 2 ,

 icon : Phone ,

 label : "Phone" ,
 
 value : "01125567499" , 

 href : "https://wa.me/0201125567499"

} ,


{

 id : 3 ,

 icon : MapPin ,

 label : "Location" ,
 
 value : "Khanka, Qalyubia" ,

  href: "https://www.google.com/maps/search/?api=1&query=Khanka,+Qalyubia",

} ,


]




export const Contact = () => {


const [formDate , setFormDate] = useState({


name : "" , 

email : "" ,

message : ""

})




const [loading , setLoading] = useState(false) 


const handleSubmit =  async(e) => {

e.preventDefault()

setLoading(true) 

try {

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID

const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID

const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

// نعمل تشيك بسيط ونتأكد من قيم بتاعتنا وهو نعمل شرط لو اي قيمة فيها ايرور يعرضلي رسالة دي

if(!serviceId || !templateId || !publicKey) {

 throw new Error("EmailJS configuration is missing . Please check your env")

}


await emailjs.send( serviceId , templateId  , {

name : formDate.name ,

email : formDate.email , 

message : formDate.message

} ,

publicKey

)

// ترتيب مهم سيرفر ايدي ثم تبيمليت ايدي ثم محتوي بتاعك بيانات ثم بابليك كي اخر حاجة


toast.success("Message sent sucessfully")

setFormDate({ name : "" , email : "" , message : "" }) // بنصفر قيم ونحدثها من اول جديد ونفضيها

}

catch(err) {

console.log(err)

toast.error("Something went wrong. Please try again.")

}


finally{

 setLoading (false)

}




}


return (


<section id="contact" className="py-24 relative overflow-hidden">


<div className="absolute left-0 w-full h-full">


  <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/5 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />

<div className="absolute top-1/2 left-1/2 w-64 h-64 bg-highlight/5 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />


</div> {/* absolute top-0 left-0 w-full h-full */}


<div className="container mx-auto px-6 relative z-10">

<motion.div className="text-center max-w-3xl mx-auto mb-10"


 initial = {{ opacity : 0 , y:85 , filter :"blur(10px)"}}

whileInView={{ opacity : 1 , y:0 , filter : "blur(0px)"}}

transition={ { duration : 0.8}}

viewport={ { once : true}}

>


<span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase ">

 Get In Touch

</span>

<h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">

Lets build  {" "}

<span className="font-serif italic font-normal tracking-wider text-white ">

 something great.

</span>

</h2>

<p className="text-muted-foreground">

Have a project in mind ❓ I would love to hear about it <br/> Send me a message and lets discuss how we can work together .

</p>

</motion.div> {/*  text-center max-w-3xl mx-auto mb-16   */}


<div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

 <motion.div className="glass p-8 rounded-3xl border border-primary/30 h-fit"
 
  initial = {{ opacity : 0 , y:85 , filter :"blur(10px)"}}

whileInView={{ opacity : 1 , y:0 , filter : "blur(0px)"}}

transition={ { duration : 0.83}}

viewport={ { once : true}}

 
 
 >

 <form className="space-y-6 " onSubmit={handleSubmit}>

  <div className="flex flex-col gap-2">

<label  className="text-sm font-medium"> Name </label>
   
 <input  required placeholder="Your Name..."  value={formDate.name} onChange={(e)=> setFormDate({ ...formDate , name : e.target.value})}   type="text" className="w-full p-3 bg-surface rounded-xl border border-border focus:border-primary outline-none transition-all" />

  </div> 




  <div className="flex flex-col gap-2" >

<label  className="block text-sm font-medium"> Email </label>
   
 <input required placeholder="Your Email @ ..." value={formDate.email} onChange={(e)=> setFormDate({ ...formDate , email : e.target.value})}  type="email" className="w-full p-3 bg-surface rounded-xl border border-border focus:border-primary outline-none transition-all" />

  </div> 


  <div className="flex flex-col gap-2">

<label  className="text-sm font-medium"> Message </label>
   
 <textarea rows={3}  required placeholder="Your Message..."  value={formDate.message} onChange={(e)=> setFormDate({ ...formDate , message : e.target.value})}    type="text" className="w-full p-3 bg-surface rounded-xl border border-border focus:border-primary outline-none transition-all  "/>

  </div> 


 <Button className="w-full" type="submit">
   
   Send Message <Send size={20}/> 

 </Button>

 </form> {/* space-y-6 */}

 </motion.div> {/* glass p-8 rounded-3xl border border-primary/30  */}



 {/* Contact Info  */}



<motion.div className="space-y-6"

 initial = {{ opacity : 0 , y:85 , filter :"blur(10px)"}}

whileInView={{ opacity : 1 , y:0 , filter : "blur(0px)"}}

transition={ { duration : 0.85}}

viewport={ { once : true}}



>

<div className="glass rounded-3xl p-8">


<h3 className="text-xl mb-6 text-center  font-semibold">Contact Information </h3>


<div className="space-y-4">
 

{

 contactInfo.map((item , index) => (
  
  <a key={ index } href={item.href} target="blank" className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors duration-150 " >

  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">


  <item.icon className="text-primary w-5 h-5"/>

  </div> {/*  w-12 h-12 rounded-xl bg-primary/10 flex */}

<div className="###">


  <div className="text-sm text-muted-foreground mb-1">
  
  {item.label}

  </div> {/*  text-sm text-muted-foreground */}

  <div className="font-medium">
  
    {item.value}

  </div>

  </div> {/* ### ديف عادي   بيعمل بلوك زايوة زاي تاج برجراف بس انا استخدمت ديف فاضي عشان البيانات الارقام يجي تحت بعضو كان ممكن استخدم فليكس بس لقيت دة اسهل ومش مستهلة  */}

 </a> // {/*  flex items-center gap-4 p-4  */}


 ))

}

</div> {/* space-y-4  */}


</div> {/* glass rounded-3xl mb-6   */}



{/* A card availability */}


<div className="glass rounded-3xl p-8 border-primary/30">


<div className="flex items-center gap-2 mb-3">

<span className="w-2 h-2 bg-green-400  animate-pulse rounded-full" />

<span className="font-medium">Currently Available</span>

</div> {/* flex items-center gap-3 mb-4   */}

 
 <p className="text-muted-foreground text-sm leading-relaxed">
  
   I am Currently open to opportunities and exciting projects.

   Wheather you need full-time engineer or freelance consultant ,

   Lets talk ............

 </p>


</div> {/* glass rounded-3xl p-8 border-primary/30  */}


</motion.div> {/* space-y-6  */}





</div> {/* grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto  */}



</div> {/* container mx-auto px-6 relative z-10  */}

</section> // {/* py-32 relative overflow-hidden  */}

)



}

