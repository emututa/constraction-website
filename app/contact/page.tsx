import { Footer } from "@/components/footer"
import {FaInstagram, FaFacebook, FaTwitter, FaLinkedin,} from "react-icons/fa"
import Image from "next/image"
import map from "@/public/mapl.jpeg"


export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#0E3998] h-[400px] w-full flex justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10">
          <div className="w-[60px] h-[5px] bg-white/30 mx-auto mb-6"></div>
          <h1 className="text-[50px] font-extrabold text-white text-center">CONTACT</h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className=" bg-white p-25 shadow-lg flex justify-between">
        
      <div className="">
         <h2 className="text-[30px] font-extrabold text-[#0E3998] mb-8"style={{fontFamily:"'Archivo Black',sans-serif"}}>GET IN TOUCH</h2>
         <div className="w-[50px] h-[6px] bg-[#FFBC01] my-8"></div>

        
         <p className="text-gray-500 mt-25">Phone</p>
         <p className="text-[22px] font-extrabold text-[#0E3998] my-[12px]" style={{fontFamily:"'Archivo Black',sans-serif"}}>+263 777 187 003</p>
         <div className="w-[30px] h-[5px] bg-gray-200 mb-12"></div>
         

         <p className="text-gray-500">Email</p>
         <p className="text-[22px] font-extrabold text-[#0E3998] my-[12px]" style={{fontFamily:"'Archivo Black',sans-serif"}}>contact@info.com</p>
         <div className="w-[30px] h-[5px] bg-gray-200 mb-12"></div>

         <p className="text-gray-500">Address</p>
         <p className="text-[22px] font-extrabold text-[#0E3998] my-[12px]" style={{fontFamily:"'Archivo Black',sans-serif"}}>123 Fifth Avenue, New York,
         NY 10160</p>
         <div className="w-[30px] h-[5px] bg-gray-200 mb-12"></div>

         <p className="text-gray-500">Keep in Touch</p>

         <div className="flex my-[14px] ">
                         {[ FaFacebook, FaTwitter,FaInstagram, FaLinkedin,].map((Icon, i) => (
                           <a
                             key={i}
                             href="#"
                             className="w-7 h-7 rounded-full text-[#0E3998] flex items-center justify-center hover:bg-[#0a2d7a] transition-colors"
                           >
                             <Icon className="w-5 h-5" />
                           </a>
                         ))}
                       </div>
         <div className="w-[30px] h-[5px] bg-gray-200 mb-12"></div>

         

       </div>
           

         <div className=" w-170 ">
            <div className="bg-white/90 px-12 py-16 shadow-xl">
            <h2 className="text-[30px] font-extrabold text-[#0E3998] " style={{fontFamily:"'Archivo Black',sans-serif"}}>MESSAGE US</h2>
            <div className="w-[50px] h-[6px] bg-[#FFBC01] my-8"></div>
            <h2 className="text-[16px] font-bold text-black/40 mb-2">Name *</h2>
            <div className="flex gap-5">
            <input type="text" className="w-full border border-gray-200 bg-gray-100 p-3 mb-6" placeholder="First" />
            <input type="text" className="w-full border border-gray-300 bg-gray-100 p-3 mb-6" placeholder="Last" />
            </div>

            <h2 className="text-[16px] font-bold text-black/40 mb-2 ">Email *</h2>
            <input type="email" className="w-full border border-gray-300 p-3 mb-6 bg-gray-100" />
            <h2 className="text-[16px] font-bold text-black/40 mb-2 ">Comment or Message *</h2>
            <textarea className="w-full border border-gray-300 p-3 mb-6 h-32 bg-gray-100"></textarea>
            <button className="bg-[#FFBC01] text-white font-bold py-[15px] px-[50px] hover:bg-[#e5aa00] transition-colors">
              SUBMIT
            </button>
          </div>
        </div>
        
      </section>

      
      <section className="">
       
        <Image src={map} alt="map" className="w-full h-120" />
      </section>

      <Footer />
    </main>
  )
}
