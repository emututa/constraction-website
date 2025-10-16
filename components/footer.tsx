import Link from "next/link"
import Image from "next/image"
import { FaPhoneAlt,FaEnvelope, FaMapMarker, } from "react-icons/fa"
import wire from "@/public/fence.png";
import wire2 from "@/public/wire2.png"
import log from "@/public/logo.png"
import bb from "@/public/bbb.png"
import best from "@/public/best.png"
import top from "@/public/top.png"
import peo from "@/public/people.png"




export function Footer() {
  return (
    
<footer className="bg-[#001a3d] text-white py-30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Contact */}
          <div>
            <div className="mb-6">
              <Link href="/#"> 
              <Image src={log} alt="logo" width={150} height={150}/>
              </Link>
            
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex ">
                 <FaPhoneAlt className="mx-2 text-[#FFBC01]"/>
              <Link href="tel:+26377187003"><p>+263 777 187 003</p></Link>
              </div>
             
             <div className="flex ">
              <FaEnvelope className="mx-2 text-[#FFBC01]"/>
              <p>contact@site.com</p>
             </div>
              
              <div className="flex ">
                <FaMapMarker className="mx-2 text-[#FFBC01]"/>
              <p>123 Fifth Avenue,</p>
              <p>New York, NY 10160</p>

              </div>
              
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold ">OUR SERVICES</h3>
            <Image src={wire2} alt="fence" width={130} height={200} className="mb-6 object-cover" />
            <ul className="space-y-3 text-sm">
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
            <h3 className="text-lg font-bold ">A FEW WORDS ABOUT US</h3>
            <Image src={wire} alt="fence" width={280} height={200} className="mb-6 object-cover" />
            <p className="text-sm leading-relaxed mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <div className="flex gap-4">
            <Image src={bb} alt="" width={70} height={70} />
            <Image src={best} alt="" width={70} height={70} />
            <Image src={top} alt="" width={70} height={70} />
            <Image src={peo} alt="" width={70} height={70} />
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>Copyright © 2025 Construction | Powered by Construction</p>
        </div>
      </div>
    </footer>



  )
}
