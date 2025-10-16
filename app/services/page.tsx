import { Footer } from "@/components/footer"
import team from "@/public/team.png"
import fenc from "@/public/fence.png"
import toproo from "@/public/toproof.png"
import cal from "@/public/caclculate.png"
import dirty from "@/public/dirtyhouse.png"
import four from "@/public/fourchairs.png"
import tail from "@/public/tails.png"
import ext from "@/public/ext.png"
import { StaticImageData } from "next/image";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";


export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className=" bg-[#0E3998]  h-[500px] w-full  relative overflow-hidden">
        <div className="absolute inset-0  bg-cover bg-center opacity-15" style={{backgroundImage:"url('project.png')"}} ></div>
        <div className="relative z-10 mt-40 mx-17">
          <div className="w-[40px] h-[5px] bg-white/30  mb-6"></div>
          <h1 className="text-[50px] font-extrabold text-white "   style={{ fontFamily: "'Archivo Black', sans-serif" }}>SERVICES</h1>
        </div> 
        
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
        
            <h2 className="text-[42px] font-extrabold text-[#0E3998]" style={{ fontFamily: "'Archivo Black', sans-serif" }}>WHAT WE DO</h2>
                <div className="w-[50px] h-[5px] bg-[#FFBC01] my-12"></div>
            <p className="text-gray-600 mt-4 max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              image={toproo}
              title="GENERAL CONTRACT"
              pic={fenc}
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore."
            />

            <ServiceCard
              image={cal}
              title="HOUSE REFURBISHMENT"
              pic={fenc}
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore."
              
            />
            <ServiceCard
              image={dirty}
              title="KITCHEN REMODELING"
              pic={fenc}
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore."
              
            />
            <ServiceCard
              image={four}
              title="INTERIOR DESIGN"
              pic={fenc}
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore."
              
            />
            <ServiceCard
              image={tail}
              title="HOUSE EXTENSION"
              pic={fenc}
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore."
            />

            <ServiceCard
              image={ext}
              title="HOUSE EXTENSION"
              pic={fenc}
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0E3998] py-20 relative overflow-hidden" >
       <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage:"url('crane.png')"}}></div>

    <div className="flex mx-20 gap-20">
      <div className=" flex flex-col justify-center">
        <div className="w-[50px] h-[4px] bg-white/50"></div>
        <h3 className=" text-[60px] font-extrabold text-white " style={{fontFamily:"'Archivo Black',sans-serif"}}>LET&apos;S BUILD YOUR DREAMS!</h3>
        <p className="text-[16px] text-gray-400">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>

      </div>

      <div className=""> 
       
        <div className="relative z-10 w-140 mx-auto px-4">
          <div className="bg-white px-12 py-16 shadow-xl">
            <h2 className="text-[20px] font-bold text-black/40 mb-2">Name *</h2>
            <div className="flex gap-5">
            <input type="text" className="w-full border border-gray-200 bg-gray-100 p-3 mb-6" placeholder="First" />
            <input type="text" className="w-full border border-gray-300 bg-gray-100 p-3 mb-6" placeholder="Last" />
            </div>

            <h2 className="text-[20px] font-bold text-black/40 mb-2 ">Email *</h2>
            <input type="email" className="w-full border border-gray-300 p-3 mb-6 bg-gray-100" />
            <h2 className="text-[20px] font-bold text-black/40 mb-2 ">Comment or Message *</h2>
            <textarea className="w-full border border-gray-300 p-3 mb-6 h-32 bg-gray-100"></textarea>
            <button className="bg-[#FFBC01] text-white font-bold py-[15px] px-[50px] hover:bg-[#e5aa00] transition-colors">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
      </div>
      </section>

      <Footer />
    </main>
  )
}



function ServiceCard({
  title,
  description,
  image,
  pic,
}: {
  image: string | StaticImageData;
  title: string;
  pic: string | StaticImageData;
  description: string;
  
}) {
  return (
    <div className="bg-white hover:border-none border-1 border-gray-200 px-8 py-12 overflow-hidden hover:shadow-lg transition-shadow  ">
      <div className="relative w-75 h-55 ">
        <Image src={image} alt={title}  className="object-cover" sizes="100vw" />
      </div>
        <h3 className="text-[22px] font-extrabold text-[#0E3998] mb-7 mt-50 " style={{ fontFamily: "'Archivo Black', sans-serif" }} >{title}</h3>
         <div className="relative bottom-7 w-100 h-1  ">
        <Image src={pic} alt={title}   className="object-cover "   />
         </div>
        <p className="text-gray-500 text-[16px] mb-4  mt-[20px]">{description}</p>
        <button className="text-[#0E3998] font-bold hover:text-[#FFBC01] transition-colors"><FaPlus/></button>
      
    </div>
  );
}
