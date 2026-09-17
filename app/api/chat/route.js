


import { GoogleGenerativeAI } from "@google/generative-ai";



const GenAI = new GoogleGenerativeAI (process.env.GEMINI_API_KEY)


const systemContext = `

You are a helpful assistant on Bassem's portfolio website. 

Answer visitor questions about Bassem based ONLY on the following information.

If asked something you don't know, say you don't have that information and suggest contacting Bassem directly.


About Bassem:

- Self-taught full-stack developer based in Egypt, freelancing since 2025.

- Works with the MERN stack and Next.js.

- Projects include: an AI-powered CV builder, an AI Translation App web app, real-time chat app (Quick Chat) , E-commerce Platform , and AI Image Generator.

- GitHub: https://github.com/Bassem-Fullstack


How to contact Bassem:

- Through the contact form in the "Contact" section of this website.

- Email: [https://mail.google.com/mail/?view=cm&fs=1&to=bassemali102345@gmail.com]

- LinkedIn: [https://www.linkedin.com/in/bassem-ali-040b04356] 

- WhatsApp : [https://wa.me/0201125567499]


Keep answers short, friendly, and professional. 

Do not use Markdown formatting 

(no asterisks, no bullet points, no links in brackets). Write plain text only, 

and if you mention a link, write the full URL directly in the sentence. `






export async function POST(request) {


try {

const { message } = await request.json() // دة بياخد بيانات جاية على هيئة جيسون من سيرفر اللى هو طلب بعتوة مستخدم وبيجي هنا يفكوة يحولوة اوبجكيت خاصية هنا مش بتحولوة جيسون ركز هو التيم عمل نيكست جيس لسيرفرات بيستخدموة دالة جيسون هنا عشان يحول لاوبجكيت تستقبل طلب او بيانات على هيئة اوبجكيت ولما تخلص العمليات بتاعتك بتبعتوة بنفس طريقة على هيئة جيسون برضو فهمت


// الدالة request.json() مش بتحوّل البيانات لـ JSON، بالعكس:

// هي بتستقبل البيانات اللي جاية اصلاً على هيئة JSON (يعني نص/Text عبر الشبكة).

// وبعدين بتفكها وتحوّلها لـ JavaScript Object عادي في الذاكرة عشان تعرف تقرأ القيم منه (زي message)

if(!message) {

return Response.json({ error : "Message is required" } , {status : 400} )

}



const model = GenAI.getGenerativeModel({model : "gemini-3.5-flash-lite"})


const result = await model.generateContent( 

   ` ${systemContext}\n\nVisitor question : ${message} ` 


// ` ${systemContext}\n\nVisitor question : ${message} ` n\n دة بنعملوة عشان الغباء اصطناعي يعرف يفرق مابين تعليمات واسألة مستخدم واجابات مجرد مسافات بنعملها عشان اجابات تبان بشكل منطقي وحلو ولاصطناعي ميتخلطبش 

)


const getText = result.response.text() 

return Response.json({ getText })

} 



catch(err) {

 console.error("Gemini API error:", err)

    return Response.json(

      { error: "Something went wrong. Please try again." },

      { status: 500 }

    )

}
    
    
}






