


// "use client";
// import { Footer } from "@/components/footer";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import Image from "next/image";
// // import { Autoplay } from "swiper/modules/autoplay";
// // import { useCallback } from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Autoplay } from "swiper/modules";
// // import "swiper/css";

// export default function ProjectsPage() {
//   return (
//     <main>
//       {/* Hero Section */}
//       <section className="bg-[#0E3998] h-[500px] relative">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920')] bg-cover bg-center opacity-20"></div>
//         <div className="relative z-10 mx-20 justify-center pt-50">
//           <div className="w-[50px] h-[5px] bg-white/30 mb-6"></div>
//           <h1
//             className="text-[80px] font-extrabold text-white"
//             style={{ fontFamily: "'Archivo Black', sans-serif" }}
//           >
//             PROJECTS
//           </h1>
//         </div>
//       </section>

//       {/* Our Work Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="mb-8">
//             <h2
//               className="text-[50px] font-extrabold text-[#0E3998]"
//               style={{ fontFamily: "'Archivo Black', sans-serif" }}
//             >
//               OUR WORK
//             </h2>
//             <div className="w-[60px] h-[6px] bg-[#FFBC01] mt-4 mb-2"></div>
//           </div>

//           {/* ✅ Carousel Section */}
//           <ImageCarousel />

//           <div className="bg-white border border-gray-200 p-8 mt-12">
//             <h3 className="text-[24px] font-bold text-[#0E3998] mb-4">
//               ICULIS POSUERE PROIDENT VERO QUAERAT EXERCITATION!
//             </h3>
//             <p className="text-gray-600 leading-relaxed mb-6">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
//               tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
//               Corporis suscipit laboris nisi ut aliquid ex ea commodi consequat.
//             </p>
//             <button className="bg-[#FFBC01] text-white font-bold py-[15px] px-[50px] hover:bg-[#e5aa00] transition-colors">
//               GET A QUOTE
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Partners Section */}
//       <section className="bg-[#FFBC01] py-12">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
//             <div className="text-white text-2xl font-bold">buildings</div>
//             <div className="text-white text-2xl font-bold">BUILD IT</div>
//             <div className="text-white text-2xl font-bold">||||</div>
//             <div className="text-white text-2xl font-bold">we build</div>
//             <div className="text-white text-2xl font-bold">construct</div>
//             <div className="text-white text-2xl font-bold">||||</div>
//           </div>
//         </div>
//       </section>

//       {/* Ongoing Projects Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="mb-12">
//             <div className="w-[60px] h-[5px] bg-[#FFBC01] mb-6"></div>
//             <h2 className="text-[42px] font-extrabold text-[#0E3998]">
//               OUR ONGOING PROJECTS
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             <ProjectCard
//               title="NEQUE ALIQUET"
//               description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
//               image="https://images.unsplash.com/photo-1503594384566-461fe158e797?w=600"
//             />
//             <ProjectCard
//               title="VESTIBULUM EVENIET"
//               description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
//               image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600"
//             />
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </main>
//   );
// }

// /* ---------- Carousel Component ---------- */
//  function ImageCarousel() {
//    const [emblaRef, emblaApi] = useEmblaCarousel(
//      { loop: true, align: "start" },
//     [Autoplay({ delay: 3000,stopOnInteraction: false })]
//    );

//   // const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
//    // const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

//   const slides = [
    
//        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800",
//         "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800",
//        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800",
//        ];
    

  

//   return (
//     <div className="relative">
//       <div className="overflow-hidden" ref={emblaRef}>
//         <div className="flex">
//           {slides.map((slide, index) => (
//             <div key={index} className="flex-[0_0_45%] px-4  ">
//               <div className="grid  gap-8">
//                 <Image
//                   src={slide.main}
//                   alt="Main project"
//                   width={800}
//                   height={900}
//                   className="w-full h-170 object-cover "
//                 />

//                   <Image
//               src={slide}
//               alt={`Slide ${index + 1}`}
//               width={1200}
//               height={600}
//               className="w-full h-[500px] object-cover"
//             />


//                 {/* <div className="grid gap-4"> */}
//                   // {/* <Image
//                   //   src={slide.small1}
//                   //   alt="Sub project 1"
//                   //   width={800}
//                   //   height={200}
//                   //   className="w-full h-44 object-cover rounded-lg"
//                   // /> */}
//                   {/* <Image
//                     src={slide.small2}
//                      alt="Sub project 2"
//                      width={800}
//                      height={200}
//                      className="w-full h-44 object-cover rounded-lg"
//                    /> */}
//                  {/* </div> */}
//               </div>
//              </div>
//           ))}
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       {/* <button
//         onClick={scrollPrev}
//         className="absolute top-1/2 left-4 -translate-y-1/2 bg-[#0E3998]/80 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#FFBC01] transition"
//       >
//         ‹
//       </button>
//       <button
//         onClick={scrollNext}
//         className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#0E3998]/80 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#FFBC01] transition"
//       >
//         ›
//       </button> */}
//     </div>
//   );
// }







// /* ---------- Project Card ---------- */
// function ProjectCard({
//   title,
//   description,
//   image,
// }: {
//   title: string;
//   description: string;
//   image: string;
// }) {
//   return (
//     <div className="bg-white overflow-hidden hover:shadow-lg transition-shadow">
//       <img
//         src={image || "/placeholder.svg"}
//         alt={title}
//         className="w-full h-64 object-cover"
//       />
//       <div className="p-6">
//         <h3 className="text-[20px] font-bold text-[#0E3998] mb-3">{title}</h3>
//         <p className="text-gray-600 text-[14px] leading-relaxed mb-4">
//           {description}
//         </p>
//         <button className="flex items-center gap-2 text-[#0E3998] font-bold hover:text-[#FFBC01] transition-colors">
//           <span className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center">
//             ⊕
//           </span>
//           Know More
//         </button>
//       </div>
//     </div>
//   );
// }







"use client";
import { Footer } from "@/components/footer";
import Image, { StaticImageData } from "next/image";
import tim from "@/public/time.png"
import blue from "@/public/blue.png"
import cha from "@/public/screen.png"
import buil from "@/public/build.png";
import buit from "@/public/buildit.png";
import stract from "@/public/const.png";
import general from "@/public/general.png";
import webui from "@/public/webuild.png";
import ongo from "@/public/ongoing.png"
import light from "@/public/light.png"
import { FaArrowRight } from "react-icons/fa";

export default function ProjectsPage() {
 
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#0E3998] h-[300px] sm:h-[400px] md:h-[500px] relative">
        <div className="relative z-10 mx-4 sm:mx-10 md:mx-20 justify-center pt-20 sm:pt-30 md:pt-50">
          <div className="w-[40px] sm:w-[50px] h-[5px] bg-white/30 mb-4 sm:mb-6"></div>
          <h1
            className="text-[48px] sm:text-[64px] md:text-[80px] font-extrabold text-white"
            style={{ fontFamily: "'Archivo Black', sans-serif" }}
          >
            PROJECTS
          </h1>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-12 sm:py-16 md:py-20 flex justify-center bg-white">
        <div className="max-w-7xl px-2 sm:px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="mr-0 lg:mr-[38px] ml-0 lg:ml-[45px] mb-6 lg:mb-0">
            <div className="mb-6 sm:mb-8">
            <h2
              className="text-[36px] sm:text-[48px] md:text-[60px] font-extrabold text-[#0E3998]"
              style={{ fontFamily: "'Archivo Black', sans-serif" }}
            >
              OUR WORK
            </h2>
            <div className="w-[50px] sm:w-[60px] h-[6px] bg-[#FFBC01] mt-3 sm:mt-4 mb-1"></div>
          </div>
          <Image src={tim} alt="white house" className="w-full max-w-[600px] h-auto lg:h-200"/>
          </div>

            <div className="flex flex-col w-full lg:w-[600px] mt-6 lg:mt-0">
              <Image src={blue} alt="" className="my-3 sm:my-5 w-full max-w-[530px]" />
             <Image src={cha} alt="" className="w-full max-w-[530px]"/>
              <p className="font-extrabold text-[#0E3998] text-[20px] sm:text-[24px] md:text-[26px] mb-[15px] sm:mb-[20px] mt-[20px] sm:mt-[30px]" style={{fontFamily:"'Archivo Black',sans-serif"}}>ICULIS POSUERE PROIDENT VERO QUAERAT EXERCITATION!</p>
              <p className="text-[14px] sm:text-[16px] text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Corporis suscipit gravida quisquam ultrices omnis et dolorem.</p>
              <button className="bg-[#FFBC01] text-white text-[14px] sm:text-[15px] w-[180px] sm:w-[200px] font-bold py-[12px] sm:py-[15px] px-[25px] sm:px-[30px] hover:bg-[#e5aa00] transition-colors mt-4 sm:mt-5">
               GET A QUOTE
              </button>
            </div>

       </div>

      </div>
      </section>


       <section className="bg-[#FFBC01] py-8 sm:py-12">
             <div className="max-w-7xl mx-auto px-2 sm:px-4">
               <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-0.5">
                 <Image src={buil} alt=""  className="w-20 sm:w-30 md:w-35 lg:w-45 h-12 sm:h-20 md:h-25 lg:h-30    border-x-2 border-white/30"/>
                 <Image src={buit} alt=""  className="w-20 sm:w-30 md:w-35 lg:w-45 h-12 sm:h-20 md:h-25 lg:h-30     border-x-2 border-white/30"/>
                 <Image src={stract} alt=""  className="w-20 sm:w-30 md:w-35 lg:w-45 h-12 sm:h-20 md:h-25 lg:h-30    border-x-2 border-white/30"/>
                 <Image src={general} alt="" className="w-20 sm:w-30 md:w-35 lg:w-45 h-12 sm:h-20 md:h-25 lg:h-30    border-x-2 border-white/30" />
                 <Image src={webui} alt="" className="w-20 sm:w-30 md:w-35 lg:w-45 h-12 sm:h-20 md:h-25 lg:h-30      border-x-2 border-white/30" />
               </div>
             </div>
       </section>

      {/* Ongoing Projects Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 flex flex-col lg:flex-row py-8 sm:py-12 md:py-14">
          <div className="mb-8 sm:mb-10 md:mb-12 w-full lg:w-[350px] mx-0 lg:mx-15">

            <h2 className="text-[36px] sm:text-[48px] md:text-[60px] font-extrabold text-[#0E3998]" style={{fontFamily:"'Archivo Black',sans-serif"}}>
              OUR ONGOING PROJECT <span> S</span>
            </h2>
            <div className="w-[50px] sm:w-[60px] h-[5px] bg-[#FFBC01] mb-4 sm:mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            <ProjectCard
              title="NEQUE ALIQUET"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              image={ongo}
              titleSize = "22px"
            />
            <ProjectCard
              title="VESTIBULUM EVENIET"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              image={light}
              titleSize = "26px"

            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ---------- Project Card ---------- */
function ProjectCard({
  title,
  description,
  image,
  titleSize = "22px",
}: {
  title: string;
  description: string;
  image: string | StaticImageData;
  titleSize?: string;
}) {
  return (
  // <div className="bg-white">
     <div className="w-full max-w-[350px] mx-auto">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover"
      />
      <div className="p-4 sm:p-6">
        <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-extrabold text-[#0E3998] mb-2 sm:mb-3" style={{fontFamily:"'Archivo Black',sans-serif"}}>{title}</h3>
        <p className="text-gray-400 text-[14px] sm:text-[16px] leading-relaxed mb-3 sm:mb-4">
          {description}
        </p>
        <button className="flex items-center gap-2 text-[13px] sm:text-[14px] text-[#0E3998] hover:text-[#FFBC01] transition-colors">
          <span className="w-3 sm:w-4 h-3 sm:h-4 rounded-full border-2 border-current flex items-center justify-center">
            <FaArrowRight className="w-[8px] sm:w-[10px] h-[8px] sm:h-[10px]"/>
          </span>
          Know More
        </button>
      </div>
     </div>
    // { </div> }
  );
}
