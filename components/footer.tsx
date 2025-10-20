import Link from "next/link"
import Image from "next/image"
import { FaPhoneAlt,FaEnvelope, FaMapMarker, } from "react-icons/fa"
import wire from "@/public/fence.png";
import wire2 from "@/public/wire2.png"
import log from "@/public/logo1.png"
import bb from "@/public/bbb.png"
import best from "@/public/best.png"
import top from "@/public/top.png"
import peo from "@/public/people.png"




export function Footer() {
  return (
    
<footer className="bg-[#001a3d] text-white py-12 sm:py-16 md:py-20 lg:py-30">
      <div className="max-w-7xl sm:mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Logo and Contact */}
          <div>
            <div className="mb-4 sm:mb-6">
              <Link href="/#">
              <Image src={log} alt="logo"  className="w-[120px] h-[80px] sm:w-[120px] sm:h-[80px] mx-3 "/>
              </Link>

            </div>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <div className="flex items-center">
                 <FaPhoneAlt className="mx-3 sm:mx-2 text-[#FFBC01] text-sm sm:text-base"/>
              <Link href="tel:+26377187003"><p className="text-xs sm:text-sm">+263 777 187 003</p></Link>
              </div>

             <div className="flex items-center">
              <FaEnvelope className="mx-3 sm:mx-2 text-[#FFBC01] text-sm sm:text-base"/>
              <p className="text-xs sm:text-sm">contact@site.com</p>
             </div>

              <div className="flex flex-row sm:flex-row sm:items-center">
                <FaMapMarker className="mx-3 sm:mx-2 text-[#FFBC01] text-sm sm:text-base mb-1 sm:mb-0"/>
              <p className="text-xs sm:text-sm">123 Fifth Avenue,</p>
              <p className="text-xs sm:text-sm ml-0 sm:ml-6">New York, NY 10160</p>

              </div>

            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base text-[14px] mx-3 sm:text-lg font-bold ">OUR SERVICES</h3>
            <Image src={wire2} alt="fence"  className="w-[220px] h-[15px] mx-2 sm:w-[130px] sm:h-[20px] mb-4 sm:mb-6 object-cover" />
            <ul className="space-y-2 mx-6 sm:space-y-3 text-xs sm:text-sm">
              {[
                "General Contract",
                "Project Planning",
                "House Refurbishment",
                "Kitchen Remodeling",
                "Interior Design",
                "House Extension",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#FFBC01] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-base mx-3 sm:text-lg font-bold ">A FEW WORDS ABOUT US</h3>
            <Image src={wire} alt="fence"  className="w-[200px] h-[40px] mx-3 sm:w-[280px] sm:h-[30px] mb-4 sm:mb-6 object-cover" />
            <p className="text-[14px] sm:text-sm leading-relaxed mb-4 sm:mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <div className="flex justify-center sm:flex gap-2 sm:gap-4">
            <Image src={bb} alt="" width={50} height={50} className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]" />
            <Image src={best} alt="" width={50} height={50} className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]" />
            <Image src={top} alt="" width={50} height={50} className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]" />
            <Image src={peo} alt="" width={50} height={50} className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]" />
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/60">
          <p>Copyright © 2025 Construction | Powered by Construction</p>
        </div>
      </div>
    </footer>



  )
}
