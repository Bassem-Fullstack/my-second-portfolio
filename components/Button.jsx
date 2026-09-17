
"use client"


// هنعمل كمبيوند واحد لزر البوتين بدل ما اروح كل سيكشن واعمل زر هو كمبيوند واحد استخدموة في مشروع يلميلي الدنيا كلها واستخدمة وقت ما انا عايز في اي كمبيوند تاني لوحدة


// وطبعا هنبصالي لها تلاتة بارميتر وهو كلاس ستايل و حجم زر يكون قد اية ومسافات وتالت حاجة واخيرة تشالدرين عشان الزر يظهر حوالين محتوي اللى انا بستدعية في زر


export const Button = ({ className="" , size="default" , children , ...props }) => {

// ...props  دة هيعرضلي الاحداث الخاصة بزر يعني لو زر بتاعي نوعة سبميت يرسل بيانات فقط خلاص هيشتغل و لو زر بتاعي حدث فقط برضو هيبعتهولي هنا على اساس هيئة فاليو واوبجكيت مثال بص تحتك


{/* <Button onClick={handleClick} disabled={true} id="submit-btn">
     
 دة الحدث بتاعك هناك في كمبيوند تاني لما تبعتوة كبروب\ 

 بيستلموة على هيئة اوبجكيت زاي كدة عشان توصل للزر بتاعك بوتين اصلي 


 props = { دة احداث بتاعتك جاية من كمبيونتد تاني وبوتين استلموة منك على اساس كدة ويبعتوة للبوتين زر اصلي بتاعك اللى هو تحت في ريترن
  onClick: handleClick,
  disabled: true,
  id: "submit-btn" 

  دولت بقي هيبعتوة للبوتين اصلي زر اصلي في ريترن تحت 
}
  
 type submit هناك في كمبيوند تاني كتبتها وبصيتها هنا في زر بوتين الاصلي بباصي الخصائص بتاعتي هنا 


    </Button> */}




const sizeClasses = {

 sm : "px-4 py-2 text-sm" , 

 default : "px-6 py-3 text-base" , 

 lg : "px-8 py-4 text-lg"


}


const baseClasses = "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:opacity-80 transition-opacity duration-300 shadow-md shadow-primary"


const classes = `${baseClasses} ${sizeClasses[size]} ${className}`


return (

 <button className={classes} {...props}>
  
  <span  className="relative flex items-center justify-center gap-2" >{children}</span>

 </button>


)




}








