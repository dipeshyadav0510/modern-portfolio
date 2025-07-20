import { Swiper, SwiperSlide } from "swiper/react";
import { FaCode, FaPencilAlt, FaRobot, FaPalette } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Link from "next/link";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Pagination, Navigation } from "swiper";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// data
const serviceData = [
  {
    icon: <FaCode />,
    title: "Development",
    description: "Full-stack web development solutions with modern technologies.",
    details: [
      {
        title: "Front-end Development",
        description: "Creating responsive and interactive user interfaces using React, Next.js, and Tailwind CSS."
      },
      {
        title: "Back-end Development",
        description: "Building robust server-side applications with secure authentication and data handling."
      },
      {
        title: "E-commerce Development",
        description: "Developing online stores with payment integration and inventory management."
      },
      {
        title: "API Integration",
        description: "Seamlessly connecting applications with third-party services and APIs."
      },
      {
        title: "Database Setup",
        description: "Designing and implementing efficient database structures for optimal performance."
      }
    ]
  },
  {
    icon: <FaPencilAlt />,
    title: "Copywriting",
    description: "Compelling content that engages audiences and drives action.",
    details: [
      {
        title: "Product Descriptions",
        description: "Crafting persuasive product descriptions that highlight key features and benefits."
      },
      {
        title: "Ad Copy",
        description: "Creating engaging ad copy for Facebook Ads, Google Ads, and other platforms."
      },
      {
        title: "Email Marketing",
        description: "Developing effective email campaigns that convert readers into customers."
      },
      {
        title: "Blog Writing",
        description: "Writing informative and engaging blog posts that establish authority."
      },
      {
        title: "Social Media Captions",
        description: "Creating attention-grabbing captions that increase engagement."
      },
      {
        title: "Presentations",
        description: "Developing clear and impactful presentation content."
      }
    ]
  },
  {
    icon: <FaRobot />,
    title: "Robotics",
    description: "Building and programming robots for various applications.",
    details: [
      {
        title: "Arduino Programming",
        description: "Programming microcontrollers for automated control and functionality."
      },
      {
        title: "Basic Electronics",
        description: "Implementing electronic circuits and components for robotic systems."
      },
      {
        title: "Sensor Integration",
        description: "Incorporating various sensors for environmental interaction and data collection."
      },
      {
        title: "Motor Control",
        description: "Implementing precise motor control systems for movement and automation."
      },
      {
        title: "Chassis Development",
        description: "Designing and building robust robot chassis and structural components."
      },
      {
        title: "Robot Assembly",
        description: "Complete robot assembly and integration of all components."
      }
    ]
  },
  {
    icon: <FaPalette />,
    title: "Branding",
    description: "Creating distinctive brand identities that leave lasting impressions.",
    details: [
      {
        title: "Logo Design",
        description: "Creating unique and memorable logos that represent brand values."
      },
      {
        title: "Business Cards & Stationery",
        description: "Designing professional business cards and corporate stationery."
      },
      {
        title: "Tagline and Slogan Creation",
        description: "Developing catchy taglines that capture brand essence."
      },
      {
        title: "Visual Identity Assets",
        description: "Creating comprehensive visual assets including icons and social media kits."
      }
    ]
  },
];

const ServiceSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [modalSlide, setModalSlide] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [swiper, setSwiper] = useState(null);

  const nextService = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const prevService = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleModalClick = (e) => {
    if (e.target.closest('.services-pagination') || e.target.closest('.modal-navigation')) {
      e.stopPropagation();
      return;
    }
    setShowDetails(false);
  };

  // Handle modal navigation separately
  const handleModalNavigation = (index) => {
    setModalSlide(index);
  };

  // When opening modal, sync its state with main slider
  const handleOpenDetails = (index) => {
    setModalSlide(index);
    setActiveSlide(index);
    setShowDetails(true);
  };

  return (
    <div className="relative h-full flex flex-col items-center">
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
        }}
        onSwiper={setSwiper}
        pagination={{
          clickable: true,
          el: '.services-pagination',
        }}
        loop={true} // Enable infinite loop
        modules={[FreeMode, Pagination, Navigation]}
        className="h-[240px] sm:h-[340px] w-full max-w-[900px]"
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.realIndex); // Use realIndex for looped slides
        }}
      >
        {serviceData.map((item, index) => (
          <SwiperSlide key={index}>
            <div 
              className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 backdrop-blur-sm"
              onClick={() => handleOpenDetails(index)}
            >
              {/* icon */}
              <div className="text-4xl text-[#8B5CF6] mb-4">{item.icon}</div>
              {/* title & desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Main view navigation - reduced margin-top */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <button 
          onClick={prevService}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-[rgba(139,92,246,0.15)] hover:bg-[rgba(139,92,246,0.3)] transition-all duration-300"
        >
          <BsChevronLeft className="text-[#8B5CF6]" />
        </button>
        <div className="services-pagination !static !w-auto flex gap-2"></div>
        <button 
          onClick={nextService}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-[rgba(139,92,246,0.15)] hover:bg-[rgba(139,92,246,0.3)] transition-all duration-300"
        >
          <BsChevronRight className="text-[#8B5CF6]" />
        </button>
      </div>

      {/* Details Panel - Fixed Position Overlay */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
            onClick={handleModalClick}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[rgba(65,47,123,0.95)] rounded-2xl p-4 sm:p-6 backdrop-blur-md border border-[rgba(255,255,255,0.1)] shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] w-full max-w-4xl relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setShowDetails(false)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white/50 hover:text-white transition-colors"
              >
                <IoClose size={24} />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleModalNavigation((modalSlide - 1 + serviceData.length) % serviceData.length);
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
              >
                <BsChevronLeft size={20} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleModalNavigation((modalSlide + 1) % serviceData.length);
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
              >
                <BsChevronRight size={20} />
              </button>

              {/* Service content */}
              <div className="px-2 sm:px-8 mt-6 sm:mt-0">
                {/* Service title */}
                <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl text-[#8B5CF6]">
                    {serviceData[modalSlide].icon}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#8B5CF6]">
                    {serviceData[modalSlide].title}
                  </h3>
                </div>

                {/* Service description */}
                <p className="text-white/70 mb-6 sm:mb-8 text-sm sm:text-base">
                  {serviceData[modalSlide].description}
                </p>

                {/* Service details grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  {serviceData[modalSlide].details.map((detail, index) => (
                    <div 
                      key={index}
                      className="bg-[rgba(89,65,169,0.2)] p-4 sm:p-6 rounded-lg backdrop-blur-sm hover:bg-[rgba(89,65,169,0.3)] transition-all duration-300"
                    >
                      <h4 className="text-[#8B5CF6] font-medium text-base sm:text-lg mb-2">
                        {detail.title}
                      </h4>
                      <p className="text-white/70 text-sm sm:text-base">
                        {detail.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Contact button */}
                <div className="flex justify-center mb-4">
                  <Link 
                    href="/contact"
                    className="group relative overflow-hidden rounded-full bg-[rgba(139,92,246,0.2)] hover:bg-[rgba(139,92,246,0.3)] border border-[#8B5CF6] px-8 py-4 transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowDetails(false);
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <span className="group-hover:-translate-x-3 transition-transform duration-300">
                        Contact Me
                      </span>
                      <HiOutlineMail 
                        className="opacity-0 -translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                        size={20}
                      />
                    </span>
                    <div className="absolute inset-0 z-0 bg-gradient-to-r from-[rgba(139,92,246,0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </Link>
                </div>

                {/* Service navigation dots */}
                <div className="flex justify-center gap-2 pt-4 border-t border-white/10 modal-navigation">
                  {serviceData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleModalNavigation(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === modalSlide 
                          ? 'bg-[#8B5CF6] w-4' 
                          : 'bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceSlider;
