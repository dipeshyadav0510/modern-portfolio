import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, easeInOut, easeOut } from "framer-motion";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpg",
          link: "https://github.com/dipeshyadav0510/modern-portfolio",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
          link: "https://github.com/dipeshyadav0510/brain-tumor",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
          link: "https://github.com/dipeshyadav0510/company",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
          link: "https://github.com/dipeshyadav0510",
        },
      ],
    },
  ],
};

// Animation variants for the falling effect
const cardVariants = (index) => ({
  initial: {
    opacity: 0,
    y: -50,
    rotate: index % 2 === 0 ? -10 : 10,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: index * 0.2,
      ease: easeOut,
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    rotate: index % 2 === 0 ? -20 : 20,
    transition: {
      duration: 0.6,
      ease: easeInOut,
    },
  },
  hover: {
    scale: 1.02,
    rotate: index % 2 === 0 ? -5 : 5,
    transition: {
      duration: 0.3,
      ease: easeInOut,
    },
  },
});

// Animation variants for disappearing elements
const elementVariants = {
  initial: { opacity: 0, scale: 0 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.4,
      ease: easeOut,
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0,
    transition: {
      duration: 0.3,
      ease: easeInOut,
    }
  },
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {slide.images.map((image, imageI) => (
              <motion.div
                key={imageI}
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                variants={cardVariants(imageI)}
                initial="initial"
                animate="animate"
                exit="exit"
                whileHover="hover"
              >
                <div className="flex items-center justify-center relative overflow-hidden group">
                  {/* image */}
                  <motion.div
                    variants={elementVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="group-hover:blur-sm transition-all duration-300"
                  >
                    <Image
                      src={image.path}
                      alt={image.title}
                      width={500}
                      height={300}
                    />
                  </motion.div>

                  {/* overlay gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                    aria-hidden
                    variants={elementVariants}
                    initial="initial"
                    whileHover="animate"
                    exit="exit"
                  />

                  {/* View Project Link */}
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <Link
                      href={image.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-x-2 text-white font-medium tracking-wider"
                    >
                      <span>VIEW PROJECT</span>
                      <BsArrowRight className="text-xl" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
