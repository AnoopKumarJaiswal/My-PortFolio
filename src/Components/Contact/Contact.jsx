import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser"
import toast from "react-hot-toast";

const Contact = () =>{
   const form = useRef()
   const [isSent, setIsSent] = useState(false)
   const sendEmail = (e) =>{
      e.preventDefault()

      emailjs
      .sendForm(
         "service_l6hbsp9" ,// Repalce with your emailjs service id
         "template_8kc84vt", // Repalce with your emailjs Template id
         form.current,
         "qmyjmC5-SF4CB5PQ7" //Repalce with your emailjs Public key
      )
      .then(
         () =>{
            setIsSent(true)
            form.current.reset() // Reset form field after sending
            toast.success("Message Sent Successfully! ✅",{
               position : "top-right",
            })
         },
         (error)=>{
            toast.error("Error Sending Message", error)
            toast.error("Faild to Send Message. Please Try Again." , {
               position : "top-right",
               
            })
         }
      )
   }
   return (
    <section 
    id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw]  md:px-[7vw] lg:px-[20vw]">

          {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
         I'd love to here from you-reach out for any opportunities or question !
        </p>
      </div>

     {/* Contect Form */}
     <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
      <h3 className="text-xl font-semibold text-white text-center">
         Connect With Me
      </h3>
      <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
         <input type="email" name="user_email" placeholder="Your Email"  required
         className="w-full p-3 rounded-md bg-[#131025]  text-white border border-gray-600 focus:outline-none focus:border-purple-500" />

         <input type="text" name="user_name" placeholder="Your Name"  required
         className="w-full p-3 rounded-md bg-[#131025]  text-white border border-gray-600 focus:outline-none focus:border-purple-500" />

         <input type="text" name="subject" placeholder="Subject"  required
         className="w-full p-3 rounded-md bg-[#131025]  text-white border border-gray-600 focus:outline-none focus:border-purple-500" />
         <textarea name="message" placeholder="Message" rows={4}
          className="w-full p-3 rounded-md bg-[#131025]  text-white border border-gray-600 focus:outline-none focus:border-purple-500" 
         ></textarea>

         {/* Send button  */}
         <button type="submit"
         className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
         >
          Send
         </button>
      </form>
     </div>
    </section>
   )
}

export default Contact