

"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { FaYelp, FaFacebook, FaTwitter, FaHouzz, FaPlus, FaStar, FaMedal,FaUserTie,FaBuilding,FaQuoteLeft,FaPhoneAlt,FaEnvelope, FaMapMarker, } from "react-icons/fa";
import write from "@/public/write.png";
import wire from "@/public/fence.png";
import team from "@/public/team.png";
import tab from "@/public/table.png";
import house from "@/public/house.png";
import jacket from "@/public/blackjacket.png";
import shades from "@/public/blackshades.png";
import otshirt from "@/public/orange_tshirt.png";
import project from "@/public/project.png";
import { IconType } from "react-icons/lib";
import buil from "@/public/build.png";
import buit from "@/public/buildit.png";
import stract from "@/public/const.png";
import general from "@/public/general.png";
import webui from "@/public/webuild.png";
import log from "@/public/logo.png"
import wire2 from "@/public/wire2.png"
import bb from "@/public/bbb.png"
import best from "@/public/best.png"
import top from "@/public/top.png"
import peo from "@/public/people.png"



export default function HomePage() {

  return (
    <main>
      {/* HERO SECTION */}
      <section className="bg-[#0E3998] h-[500px] w-full  relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 flex mx-30 mt-28 flex-col w-[90%] text-white md:w-[50%] ">
          <p className="font-extrabold text-[18px] text-white/50">Construction Services</p>
          <div className="w-[60px] h-[6px] bg-white/50 mb-10 mt-5"></div>
          <h1
            className="text-[40px] md:text-[60px] font-extrabold "
            style={{ fontFamily: "'Archivo Black', sans-serif" }}
          >
            BUILDING YOUR DREAMS
          </h1>
         
          <button className="mt-8 w-[230px] bg-[#FFBC01] text-white font-bold py-[15px] px-[50px] hover:bg-[#e5aa00] transition-colors">
            GET A QUOTE
          </button>
        </div>
      </section>

  
      <section className="py-20 bg-gray-50">
         <div className="w-[1150px] mx-auto px-4">
          <div className="grid md:grid-cols-3 ">
            <div className="bg-[#FFBC01] text-white flex flex-col   p-8 pt-12 min-h-[350px] hover:shadow-lg transition-all">
              
                <h3
                  className="text-[30px] font-extrabold mb-9"
                  style={{ fontFamily: "'Archivo Black', sans-serif" }}
                >
                  PROFESSIONAL AND RELIABLE SERVICES.
                </h3>
                <div className="w-[50px] h-[5px] bg-white/90 "></div>
              <div className="flex gap-2 mt-10 mb-40">
                {[FaYelp, FaFacebook, FaTwitter, FaHouzz,FaHouzz,].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-7 h-7 rounded-full bg-[#0E3998] flex items-center justify-center hover:bg-[#0a2d7a] transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>

            <ServiceCard
              title="GENERAL CONTRACT"
              pic={wire}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
              image={write}
            />

            <ServiceCard
              title="PROJECT PLANNING"
              pic={wire}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
              image={team}
            />

            <ServiceCard
              title="HOUSE REFURBISHMENT"
              pic={wire}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
              image={write}
            />

            <ServiceCard
              title="KITCHEN REMODELING"
              pic={wire}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
              image={tab}
            />

            <ServiceCard
              title="HOUSE EXTENSION"
              pic={wire}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
              image={house}
            />
          </div>
        </div>
      </section>





      {/* ABOUT SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-[42px] font-extrabold text-[#0E3998]" style={{ fontFamily: "'Archivo Black', sans-serif" }} >ABOUT</h2>
            <div className="w-[45px] h-[5px] bg-[#FFBC01] mx-auto mb-6 mt-6"></div>
          </div>
          <div className="max-w-3xl  mx-auto text-center">
            <h3 className="text-[28px] font-bold text-[#0E3998] mb-6">
              NO JOB IS TOO BIG FOR US, WE&apos;LL GET IT DONE.
            </h3>
            <p className="text-gray-400 text-[16px]  leading-relaxed mb-6">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.
               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat  nulla pariatur. Excepteur sint occaecat cupidatat non proiden.
            </p>
            <p className="text-gray-400 text-[16px] leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            <Link
              href="/about"
              // className="inline-block bg-[#FFBC01] text-white font-bold py-[15px] px-[50px] hover:bg-[#e5aa00] transition-colors"
              className="text-[15px] font-bold text-[#0E3998] flex flex-col items-center"
            >
              READ MORE
              <div className="w-[90px] h-[1px] bg-[#0E3998]"></div>
            </Link>
            
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 pb-110 bg-gray-50">
        <div className="w-294.5 mx-auto px-4">
          <div className=" flex flex-col items-center mb-12">
            <h2 className="text-[42px] font-extrabold text-[#0E3998]" style={{ fontFamily: "'Archivo Black', sans-serif" }}>OUR HAPPY CLIENTS!</h2>
            <div className="w-[50px] h-[3px] bg-[#0E3998]"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam varius consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elelit tellus."
              name="JEMMA STONE"
              rating={5}
              customer={otshirt}
            />
            <TestimonialCard
              quote="Elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam varius consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elelit tellus."
              name="JOE KELLY"
              rating={5}
              customer={shades}
            />
            <TestimonialCard
              quote="Elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam varius consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elelit tellus."
              name="STELLAR ALBA"
              rating={5}
              customer={jacket}
            />
          </div>
        </div>
      </section>

      {/* WHY US SECTION */}
      <section className="py-20 bg-[#0E3998] relative">
        <div className="max-w-5xl mx-28 ">
        <div className="absolute top-[-350px]">
          <div className="text-center items-center flex flex-col mb-12">
            <h2 className="text-[42px] font-extrabold text-[#0E3998]">WHY US?</h2>
            <div className="bg-[#FFBC01] w-[60px] h-[5px]"></div>
          </div>

          <div className="mb-12">
            <Image
              src={project}
              alt="Why choose us"
              className=" w-full h-[400px] object-cover"
            />
          </div>
         </div>
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureCard
              icon={FaMedal}
              title="20+ YEARS EXPERIENCE"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
            <FeatureCard
              icon={FaUserTie}
              title="PROFESSIONAL SERVICES"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
            <FeatureCard
              icon={FaBuilding}
              title="100+ COMPLETED PROJECTS"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
          </div>
          <div className="w-full h-[0.5px] bg-gray-500 mt-15"></div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#0E3998] py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 flex justify-center items-center flex-col w-[90%] mx-auto text-white md:w-[56%]">
          <div className="w-[60px] h-[5px] bg-white/30 md:w-[60px] mb-[20px]"></div>
          <h2 className="text-[30px] font-extrabold text-center md:text-[50px]">
            LET&apos;S BUILD YOUR DREAMS!
          </h2>
          <p className="text-center my-[30px] text-[16px]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.
            
          </p>
          <button className="bg-[#FFBC01] mb-30 text-white font-bold py-[15px] px-[50px] hover:bg-[#e5aa00] transition-colors">
            CONTACT US
          </button>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="bg-[#FFBC01] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-0.5 ">
            <Image src={buil} alt=""  className="w-45 h-30    border-x-2 border-white/30"/>
            <Image src={buit} alt=""  className="w-45 h-30     border-x-2 border-white/30"/>
            <Image src={stract} alt=""  className="w-45 h-30    border-x-2 border-white/30"/>
            <Image src={general} alt="" className="w-45 h-30    border-x-2 border-white/30" />
            <Image src={webui} alt="" className="w-45 h-30      border-x-2 border-white/30" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* COMPONENTS */
function ServiceCard({
  title,
  pic,
  description,
  image,
}: {
  title: string;
  pic: string | StaticImageData;
  description: string;
  image: string | StaticImageData;
}) {
  return (
    <div className="bg-white hover:border-none border-1 border-gray-200 px-8 py-12 overflow-hidden hover:shadow-lg transition-shadow  ">
      <div className="relative w-75 h-55 ">
        <Image src={image} alt={title} fill className="object-cover" sizes="100vw" />
      </div>
        <h3 className="text-[22px] font-extrabold text-[#0E3998] mb-3 " style={{ fontFamily: "'Archivo Black', sans-serif" }} >{title}</h3>
         <div className="relative bottom-7 w-100 h-1  ">
        <Image src={pic} alt={title}   className="object-cover "   />
         </div>
        <p className="text-gray-500 text-[16px] mb-4  mt-[20px]">{description}</p>
        <button className="text-[#0E3998] font-bold hover:text-[#FFBC01] transition-colors"><FaPlus/></button>
      
    </div>
  );
}

function TestimonialCard({
  quote,
  name,
  rating,
  customer,
}: {
  quote: string;
  name: string;
  rating: number;
  customer: string | StaticImageData,
}) {
  return (
    <div className="bg-white  py-5 px-9 rounded-[7px] hover:shadow-lg transition-shadow ">
      <div className="text-[#001A3D] text-3xl mb-4"><FaQuoteLeft/></div>
      <p className="text-gray-500 text-[16px]  mb-4 ">{quote}</p>
      <div className="flex  gap-[1px] mb-5">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} className="w-4 h-4 text-[#FFBC01]" />
        ))}
      </div>
      <div className="w-[300px] h-[1px] bg-black/5 mb-5"></div>
      <div className=" flex mb-4">
        <Image src={customer} alt={name} width={60} height={60} className="rounded-full" />
      <p className="font-bold text-[#0E3998] text-[16px] mx-[15px]" style={{fontFamily:"'Archivo', sans-serif"}}>{name}</p>
      </div>
    </div>
  );
}


function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: IconType;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center mt-50">
      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-4xl mx-auto mb-6">
        <Icon className=" text-[#FFBC01] w-8 h-8" /> 
      </div>
      <h3 className="text-[23px] font-extrabold text-white mb-4" style={{fontFamily:"'Archivo Black',sans-serif"}}>{title}</h3>
      <p className="text-gray-400 text-[17px] ">{description}</p>
    </div>
  );
}



function Footer() {
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
  );
}








