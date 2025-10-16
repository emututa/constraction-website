


import { Footer } from "@/components/footer"
import fen from "@/public/fence.png"
import hair from "@/public/hair.png"
import excavator from "@/public/yellow.png"
import Image, { StaticImageData } from "next/image"
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYelp,
  FaHouzz,
  FaBuilding,
  FaMedal,
  FaUserTie
} from "react-icons/fa"
import { IconType } from "react-icons/lib";

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#0E3998] h-[500px] relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 mx-20 justify-center pt-50">
          <div className="w-[60px] h-[5px] bg-white/30 mb-6"></div>
          <h1 className="text-[50px] font-extrabold text-white">ABOUT</h1>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-5 mx-20">
            <h2
              className="text-[60px] font-extrabold text-[#0E3998]"
              style={{ fontFamily: "'Archivo Black', sans-serif" }}
            >
              WHO WE ARE
            </h2>
            <div className="w-[50px] h-[5px] bg-[#FFBC01] mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-18 mx-20">
            <div>
              <h3
                className="text-[22px] font-extrabold text-[#0E3998]"
                style={{ fontFamily: "'Archivo Black', sans-serif" }}
              >
                WE MAKE YOUR VISION COME TRUE
              </h3>
              <Image src={fen} alt="fence" className="w-[465px] h-5 mb-7" />
              <p className="text-gray-600 leading-relaxed mb-4">
                Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet
                mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec
                tellus a odio tincidunt auctor nec sagittis sem nibh id elit. Duis sed odio sit amet.
              </p>
            </div>

            <div>
              <h3
                className="text-[22px] font-extrabold text-[#0E3998]"
                style={{ fontFamily: "'Archivo Black', sans-serif" }}
              >
                PROFESSIONAL AND RELIABLE SERVICES
              </h3>
              <Image src={fen} alt="fence" className="w-[465px] h-5 mb-7" />
              <p className="text-gray-600 leading-relaxed mb-6">
                Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae
                erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent
                per conubia nostra, per inceptos himenaeos. Mauris in erat justo.
              </p>
              <div className="flex gap-3">
                <SocialIcon href="#" Icon={FaYelp} />
                <SocialIcon href="#" Icon={FaFacebook} />
                <SocialIcon href="#" Icon={FaTwitter} />
                <SocialIcon href="#" Icon={FaHouzz} />
                <SocialIcon href="#" Icon={FaHouzz} />
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12 mt-20 mx-20">
            <TeamMember
              name="MARK SUMMERS"
              image={hair}
            />
            <TeamMember
              name="JENNIFER MORRIS"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
            />
            <TeamMember
              name="FREYA GILBERT"
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400"
              reverse={true}
            />
            <div className="flex items-start gap-8">
              <div className="flex flex-col justify-start pt-4 flex-shrink-0">
                <h3
                  className="text-[28px] font-extrabold mb-4 text-[#0E3998] tracking-tight max-w-[200px]"
                  style={{ fontFamily: "'Archivo Black', sans-serif" }}
                >
                  THIS CAN BE YOU!
                </h3>
                <p className="text-[15px] mb-8 text-gray-500 leading-relaxed max-w-[200px]">
                  Lorem ipsum dolor sit amet, consec tetut elit tellus, luctus
                </p>
                <button className="bg-[#FFBC01] text-white font-bold py-4 px-10 hover:bg-[#e5aa00] transition-colors text-sm tracking-wide">
                  APPLY NOW
                </button>
              </div>
              <div className="flex-shrink-0">
                <div className="w-[270px] h-[270px] bg-[#0E3998] rounded-full flex items-center justify-center">
                  <span className="text-white text-[120px] font-bold">?</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="relative h-[600px] w-full">
        <Image
          src={excavator}
          alt="excavator"
          className="h-[550px] w-[900px] object-cover"
        />
        <div className="absolute inset-0 bg-[#0E3998]/80"></div>
      </section>

      {/* Stats Section */}
      <section className="py-15 bg-white">
        <div className="grid md:grid-cols-3 gap-26 mx-26">
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
        <div className="w-full h-[1px] bg-black/10 mx-26 mt-15"></div>
      </section>

      <section className="bg-white py-20 relative overflow-hidden">
        <div className="relative z-10 flex justify-center items-center flex-col w-[90%] mx-auto text-white md:w-[56%]">
          <div className="w-[35px] h-[5px]  md:w-[60px] mb-[20px] bg-[#FFBC01]"></div>
          <h2 className="text-[40px] font-extrabold text-center md:text-[60px] text-[#0E3998]" style={{fontFamily:"'Archivo Black', sans-serif"}}>
            LET&apos;S BUILD YOUR DREAMS!
          </h2>
          <p className="text-center my-[30px] text-gray-400 text-[16px]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.
          </p>
          <button className="bg-[#FFBC01] mb-30 text-white font-bold py-[15px] px-[50px] hover:bg-[#e5aa00] transition-colors">
            CONTACT US
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}

/* Reusable social icon component */
function SocialIcon({ href, Icon }: { href: string; Icon: any }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-7 h-7 rounded-full bg-[#0E3998] flex items-center justify-center hover:bg-[#FFBC01] transition-colors text-white"
    >
      <Icon className="w-4 h-4" />
    </a>
  )
}

function TeamMember({ name, image, reverse = false }: { name: string; image: string | StaticImageData; reverse?: boolean }) {
  return (
    <div className={`flex items-start gap-8 ${reverse ? 'flex-row-reverse' : ''}`}>
      <div className="flex-shrink-0">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-[270px] h-[270px] object-cover"
          width={270}
          height={270}
        />
      </div>
      <div className="flex flex-col justify-start pt-4">
        <h3
          className="mb-4 text-[28px] font-extrabold text-[#0E3998] tracking-tight"
          style={{ fontFamily: "'Archivo Black', sans-serif" }}
        >
          {name}
        </h3>
        <p className="text-gray-500 text-[15px] mb-6 leading-relaxed max-w-md">
          Lorem ipsum dolor sit amet, consec tetut elit tellus, luctus nec ullam corper mattis, pulvinar.
        </p>
        <div className="flex gap-3">
          <SocialIcon href="#" Icon={FaTwitter} />
          <SocialIcon href="#" Icon={FaFacebook} />
          <SocialIcon href="#" Icon={FaInstagram} />
          <SocialIcon href="#" Icon={FaLinkedin} />
        </div>
      </div>
    </div>
  )
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
    <div className="text-center mt-10 ">
      <div className="w-25 h-25 rounded-full border-3 border-[#FFBC01] flex items-center justify-center text-4xl mx-auto mb-6">
        <Icon className="text-[#FFBC01] w-8 h-8" /> 
      </div>
      <h3 className="text-[23px] font-extrabold text-[#0E3998]  mb-4" style={{fontFamily:"'Archivo Black',sans-serif"}}>{title}</h3>
      <p className="text-gray-400 text-[17px] ">{description}</p>
    </div>
  );
}