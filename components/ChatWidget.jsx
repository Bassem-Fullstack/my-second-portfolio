
"use client"

import { MessageCircle, Send, X } from "lucide-react"

import { useState } from "react"



const linkText = (text) => {

return text.split(/(https?:\/\/[^\s]+)/g).map((part , i) => (


 part.startsWith("http") ? (

  <a 
   
   key={i}

   href={part}

   className="underline text-primary"
  
   target="blank"

  >
 
  {part}

  </a>

 ) 

 :part

))

}










export const ChatWidget = () => {


const [isOpen , setIsOpen] = useState(false)


 const [input , setInput] = useState("") 


 const [ messages , setMessages ] = useState([

{ role : "bot" , text : "Hi! Ask me anything about Bassem 👋" }

//  احنا بنخزن وبنحدث الانبوت اللى مستخدم كتبوة هنا في ستيت وبنخزن رسايل اللى بتدور مابين مستخدم ومابين الذكاء اصطناعي عشان خاطر هنعرضوة ونميزوة بالالوان ونعرف اللى بيرد بيكون لونة اخضر واللى بيسأل بيكون لونة رصاصي

])


const [loading , setLoading] = useState(false) 



const sendMessage = async () => {

const trimmed = input.trim() // الفكرة حطينا انبوت في متغير عشان نلغي مسافات ونمنع ان مستخدم يبعت اي حاجة فاضية من غير بيانات او كتابة نص واحد على اقل او يبعت تيكست فاضي

if(!trimmed || loading) return // وقف الدالة على طول ومتنفذش العملية لو مستخدم بعت بيانات فاضية او تحميل متحملش اخرج من فونشين على طول متكلمش عملية بعدها


setLoading(true) 

setInput("") // بصفر وبحدث قيمة 

setMessages((prev)=> [...prev , {role : "user" , text : trimmed}]) // بحدث رسايل اللى مستخدم يبعتها اول بأول وبحتفظ برسايل قديمة


try {

const res = await fetch("/api/chat" , {

method : "POST" ,

headers : { "Content-Type" : "application/json" } , 

body : JSON.stringify({message : trimmed})

})


const getDate = await res.json()


if(!res.ok) {

  throw new Error ( getDate.error || "Something went wrong" )
}



setMessages((prev) => [...prev , {role : "bot" , text : getDate.getText}]) 

}


catch(err) {

setMessages((prev) => [...prev , {role : "bot" , text : "Sorry, something went wrong. Please try again." }])

}

finally {

 setLoading(false) 

}


}



const handleSend = (e) => {


 if(e.key === "Enter") {

  e.preventDefault()
  
  sendMessage() // بقولوة هنا لو الزر الحدث بتاع كيبورد لو بيساوي انتر نفذلي الشرط دة وهو مستخدم سهل يدوس انتر يبعت داتا عادي طبعا استخدمنا بريفنت عشان نوقف السلوك افتراضي بتاع متصفح وميعملش ريلود كل شواية يعني من الاخر اي زرار في كيبورد لو دوست علية متبعتش بيانات غير زرار انتر فقط

//  عملنا كدة عشان خاطر نشغل زرار انتر في كيبورد لما مستخدم يكتب في انبوت ويدوس انتر من غير حدث دة الزر انتر مش هيشتغل ولا هيبعت فورم بيانات بتاع مستخدم

// sendMessage() جوة دالة הـ handleKeyDown عشان لما المستخدم يدوس Enter ينفذ نفس الخطوات تماماً اللي بتتنفذ لما يدوس بالماوس على زرار الإرسال (Send button)


 }

}




return (

<div className="fixed bottom-6 right-6 z-50 ">

 

 {
  
  isOpen && (

    <div className="w-80 h-96 glass-strong rounded-2xl shadow-xl flex flex-col overflow-hidden">

       
      <div className="flex  items-center p-4 justify-between border-b border-border ">

    <span className="text-sm  font-medium text-foreground">Start Chat </span>
      
     <button className="text-muted-foreground hover:text-foreground transition-colors" onClick={()=> setIsOpen(!isOpen)}>
      
      <X size={20} />

     </button>

     </div> {/* flex  items-center p-4 justify-between */}


     <div className="flex-1 overflow-y-auto p-4 space-y-4 ">
       
       {
        messages.map((mes , idx) => (


        <div key={idx} 
        
         className={`text-sm p-3 max-w-[85%]  rounded-xl break-words
          
          ${mes.role === "user" ? "ml-auto bg-primary text-primary-foreground" : "mr-auto bg-surface text-foreground"  


         }`}

        >

        {linkText(mes.text)}

       </div> //{/* text-sm p-3 text-center  rounded-full */}


        ))}
      
{loading && (

  <div className="mr-auto  p-3 rounded-xl flex items-center gap-1">

    <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" />

    <span
      className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce"
      style={{ animationDelay: "0.15s" }}
    />

    <span
      className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce"
      style={{ animationDelay: "0.3s" }}
    />


 {/* استخدمت انيمشين ديلي هنا عشان اخر كل واحدة ونقط كلهم ميطلعوش مع بعض وتبان سلسة وكدة كدة كلاس جاهز بتاع تاويلند لكن توقيت انيمشين مش موجود عشان كدة استخدمت ستايل */}

  </div> // {/* mr-auto  p-3 rounded-xl flex items-center gap-1 */}

 )}
        
       </div> {/* flex-1 overflow-y-auto p-3 space-y-3 */}


         <div className="p-4 border-t border-border flex items-center gap-3 ">
          
          <input
          
           value={input} 
           
           onChange={(e)=> setInput(e.target.value)}

           placeholder=" Type your question"
             
           onKeyDown={handleSend}

           className="flex-1  rounded-full outline-none bg-surface p-2 text-sm text-foreground focus:outline-primary/50 "

          />
          
   
          
          <button disabled={loading} onClick={sendMessage} className="bg-primary text-primary-foreground p-2 rounded-full disabled:opacity-50">
           
           <Send size={17}/>

          </button>


         </div> {/* p-4 border-t border-border flex items-center */}

    </div>  //{/* w-80 h-96 glass-strong rounded-2xl shadow-xl */}


  )
  
  }




{

!isOpen && (


 <button onClick={()=> setIsOpen(!isOpen)} className="w-14 h-14 rounded-full bg-primary animate-bounce text-primary-foreground shadow-[0px_0px_20px] shadow-primary/25 flex items-center justify-center">

  
 <MessageCircle className="w-6 h-6" />

 </button>

 )
  
}




</div> // {/* fixed bottom-6 right-6 z-50 */}


)







}
















