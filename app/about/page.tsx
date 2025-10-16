


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
      <section className="bg-[#0E3998] h-[300px] sm:h-[400px] md:h-[500px] relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 mx-4 sm:mx-10 md:mx-20 justify-center pt-20 sm:pt-30 md:pt-50">
          <div className="w-[50px] sm:w-[60px] h-[5px] bg-white/30 mb-4 sm:mb-6"></div>
          <h1 className="text-[32px] sm:text-[40px] md:text-[50px] font-extrabold text-white">ABOUT</h1>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="mb-4 sm:mb-5 mx-4 sm:mx-10 md:mx-20">
            <h2
              className="text-[36px] sm:text-[48px] md:text-[60px] font-extrabold text-[#0E3998]"
              style={{ fontFamily: "'Archivo Black', sans-serif" }}
            >
              WHO WE ARE
            </h2>
            <div className="w-[40px] sm:w-[50px] h-[5px] bg-[#FFBC01] mt-3 sm:mt-4 md:mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-18 mx-4 sm:mx-10 md:mx-20">
            <div>
              <h3
                className="text-[18px] sm:text-[20px] md:text-[22px] font-extrabold text-[#0E3998]"
                style={{ fontFamily: "'Archivo Black', sans-serif" }}
              >
                WE MAKE YOUR VISION COME TRUE
              </h3>
              <Image src={fen} alt="fence" className="w-[300px] sm:w-[400px] md:w-[465px] h-4 sm:h-5 mb-4 sm:mb-6 md:mb-7" />
              <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet
                mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec
                tellus a odio tincidunt auctor nec sagittis sem nibh id elit. Duis sed odio sit amet.
              </p>
            </div>

            <div>
              <h3
                className="text-[18px] sm:text-[20px] md:text-[22px] font-extrabold text-[#0E3998]"
                style={{ fontFamily: "'Archivo Black', sans-serif" }}
              >
                PROFESSIONAL AND RELIABLE SERVICES
              </h3>
              <Image src={fen} alt="fence" className="w-[300px] sm:w-[400px] md:w-[465px] h-4 sm:h-5 mb-4 sm:mb-6 md:mb-7" />
              <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae
                erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent
                per conubia nostra, per inceptos himenaeos. Mauris in erat justo.
              </p>
              <div className="flex gap-2 sm:gap-3">
                <SocialIcon href="#" Icon={FaYelp} />
                <SocialIcon href="#" Icon={FaFacebook} />
                <SocialIcon href="#" Icon={FaTwitter} />
                <SocialIcon href="#" Icon={FaHouzz} />
                <SocialIcon href="#" Icon={FaHouzz} />
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 sm:gap-x-12 md:gap-x-16 gap-y-8 sm:gap-y-10 md:gap-y-12 mt-12 sm:mt-16 md:mt-20 mx-4 sm:mx-10 md:mx-20">
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
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 md:gap-8">
              <div className="flex flex-col justify-start pt-2 sm:pt-4 flex-shrink-0">
                <h3
                  className="text-[20px] sm:text-[24px] md:text-[28px] font-extrabold mb-3 sm:mb-4 text-[#0E3998] tracking-tight max-w-[180px] sm:max-w-[200px]"
                  style={{ fontFamily: "'Archivo Black', sans-serif" }}
                >
                  THIS CAN BE YOU!
                </h3>
                <p className="text-[13px] sm:text-[15px] mb-4 sm:mb-6 md:mb-8 text-gray-500 leading-relaxed max-w-[180px] sm:max-w-[200px]">
                  Lorem ipsum dolor sit amet, consec tetut elit tellus, luctus
                </p>
                <button className="bg-[#FFBC01] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 md:px-10 hover:bg-[#e5aa00] transition-colors text-xs sm:text-sm tracking-wide">
                  APPLY NOW
                </button>
              </div>
              <div className="flex-shrink-0 mx-auto sm:mx-0">
                <div className="w-[200px] sm:w-[240px] md:w-[270px] h-[200px] sm:h-[240px] md:h-[270px] bg-[#0E3998] rounded-full flex items-center justify-center">
                  <span className="text-white text-[80px] sm:text-[100px] md:text-[120px] font-bold">?</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
        <Image
          src={excavator}
          alt="excavator"
          className="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0E3998]/80"></div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12 md:py-15 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16 lg:gap-26 mx-4 sm:mx-10 md:mx-20 lg:mx-26">
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
        <div className="w-full h-[1px] bg-black/10 mx-4 sm:mx-10 md:mx-20 lg:mx-26 mt-6 sm:mt-10 md:mt-15"></div>
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
    <div className={`flex flex-col sm:flex-row items-start gap-4 sm:gap-6 md:gap-8 ${reverse ? 'sm:flex-row-reverse' : ''}`}>
      <div className="flex-shrink-0 mx-auto sm:mx-0">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-[200px] sm:w-[240px] md:w-[270px] h-[200px] sm:h-[240px] md:h-[270px] object-cover"
          width={200}
          height={200}
        />
      </div>
      <div className="flex flex-col justify-start pt-2 sm:pt-4 text-center sm:text-left">
        <h3
          className="mb-3 sm:mb-4 text-[20px] sm:text-[24px] md:text-[28px] font-extrabold text-[#0E3998] tracking-tight"
          style={{ fontFamily: "'Archivo Black', sans-serif" }}
        >
          {name}
        </h3>
        <p className="text-gray-500 text-[13px] sm:text-[15px] mb-4 sm:mb-6 leading-relaxed max-w-md">
          Lorem ipsum dolor sit amet, consec tetut elit tellus, luctus nec ullam corper mattis, pulvinar.
        </p>
        <div className="flex gap-2 sm:gap-3 justify-center sm:justify-start">
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
    <div className="text-center mt-6 sm:mt-8 md:mt-10">
      <div className="w-16 sm:w-20 md:w-25 h-16 sm:h-20 md:h-25 rounded-full border-2 sm:border-3 border-[#FFBC01] flex items-center justify-center text-2xl sm:text-3xl md:text-4xl mx-auto mb-4 sm:mb-6">
        <Icon className="text-[#FFBC01] w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8" />
      </div>
      <h3 className="text-[18px] sm:text-[21px] md:text-[23px] font-extrabold text-[#0E3998] mb-3 sm:mb-4" style={{fontFamily:"'Archivo Black',sans-serif"}}>{title}</h3>
      <p className="text-gray-400 text-[14px] sm:text-[16px] md:text-[17px] ">{description}</p>
    </div>
  );
}