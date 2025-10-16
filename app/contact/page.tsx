import { Footer } from "@/components/footer"
import {FaInstagram, FaFacebook, FaTwitter, FaLinkedin,} from "react-icons/fa"
import Image from "next/image"
import map from "@/public/mapl.jpeg"


export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#0E3998] h-[250px] sm:h-[300px] md:h-[500px] w-full flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 mx-23">
          <div className="w-[50px] sm:w-[50px] h-[5px] bg-white/30  mb-4 sm:mb-6"></div>
          <h1 className="text-[32px] sm:text-[40px] md:text-[60px] font-extrabold text-white text-center" style={{ fontFamily: "'Archivo Black', sans-serif" }}>CONTACT</h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white p-4 sm:p-8 md:p-12 lg:p-16 xl:p-25 shadow-lg flex flex-col lg:flex-row justify-between gap-8 lg:gap-0">

      <div className="w-full lg:w-auto">
         <h2 className="text-[24px] sm:text-[28px] md:text-[30px] font-extrabold text-[#0E3998] mb-6 sm:mb-8"style={{fontFamily:"'Archivo Black',sans-serif"}}>GET IN TOUCH</h2>
         <div className="w-[40px] sm:w-[50px] h-[6px] bg-[#FFBC01] my-6 sm:my-8"></div>


         <p className="text-gray-500 mt-4 sm:mt-6 md:mt-8">Phone</p>
         <p className="text-[18px] sm:text-[20px] md:text-[22px] font-extrabold text-[#0E3998] my-[10px] sm:my-[12px]" style={{fontFamily:"'Archivo Black',sans-serif"}}>+263 777 187 003</p>
         <div className="w-[25px] sm:w-[30px] h-[5px] bg-gray-200 mb-8 sm:mb-10 md:mb-12"></div>


         <p className="text-gray-500">Email</p>
         <p className="text-[18px] sm:text-[20px] md:text-[22px] font-extrabold text-[#0E3998] my-[10px] sm:my-[12px]" style={{fontFamily:"'Archivo Black',sans-serif"}}>contact@info.com</p>
         <div className="w-[25px] sm:w-[30px] h-[5px] bg-gray-200 mb-8 sm:mb-10 md:mb-12"></div>

         <p className="text-gray-500">Address</p>
         <p className="text-[18px] sm:text-[20px] md:text-[22px] font-extrabold text-[#0E3998] my-[10px] sm:my-[12px]" style={{fontFamily:"'Archivo Black',sans-serif"}}>123 Fifth Avenue, New York,
         NY 10160</p>
         <div className="w-[25px] sm:w-[30px] h-[5px] bg-gray-200 mb-8 sm:mb-10 md:mb-12"></div>

         <p className="text-gray-500">Keep in Touch</p>

         <div className="flex my-[12px] sm:my-[14px] gap-2 sm:gap-3">
                         {[ FaFacebook, FaTwitter,FaInstagram, FaLinkedin,].map((Icon, i) => (
                           <a
                             key={i}
                             href="#"
                             className="w-6 sm:w-7 h-6 sm:h-7 rounded-full text-[#0E3998] flex items-center justify-center hover:bg-[#0a2d7a] transition-colors"
                           >
                             <Icon className="w-4 sm:w-5 h-4 sm:h-5" />
                           </a>
                         ))}
                       </div>
         <div className="w-[25px] sm:w-[30px] h-[5px] bg-gray-200 mb-8 sm:mb-10 md:mb-12"></div>



       </div>


         <div className="w-full lg:w-170">
            <div className="bg-white/90 px-6 sm:px-8 md:px-12 py-8 sm:py-12 md:py-16 shadow-xl">
            <h2 className="text-[24px] sm:text-[28px] md:text-[30px] font-extrabold text-[#0E3998]" style={{fontFamily:"'Archivo Black',sans-serif"}}>MESSAGE US</h2>
            <div className="w-[40px] sm:w-[50px] h-[6px] bg-[#FFBC01] my-6 sm:my-8"></div>
            <h2 className="text-[14px] sm:text-[16px] font-bold text-black/40 mb-2">Name *</h2>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
            <input type="text" className="w-full border border-gray-200 bg-gray-100 p-3 mb-4 sm:mb-6" placeholder="First" />
            <input type="text" className="w-full border border-gray-300 bg-gray-100 p-3 mb-4 sm:mb-6" placeholder="Last" />
            </div>

            <h2 className="text-[14px] sm:text-[16px] font-bold text-black/40 mb-2">Email *</h2>
            <input type="email" className="w-full border border-gray-300 p-3 mb-4 sm:mb-6 bg-gray-100" />
            <h2 className="text-[14px] sm:text-[16px] font-bold text-black/40 mb-2">Comment or Message *</h2>
            <textarea className="w-full border border-gray-300 p-3 mb-4 sm:mb-6 h-24 sm:h-32 bg-gray-100"></textarea>
            <button className="bg-[#FFBC01] text-white font-bold py-[12px] sm:py-[15px] px-[30px] sm:px-[40px] md:px-[50px] hover:bg-[#e5aa00] transition-colors text-sm sm:text-base">
              SUBMIT
            </button>
          </div>
        </div>

      </section>

      
      <section className="">

        <Image src={map} alt="map" className="w-full h-80 sm:h-100 md:h-120" />
      </section>

      <Footer />
    </main>
  )
}
