
import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu"; 
const CaseStudySection = () => {

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    hover: { scale: 1.2 },
  };
  return (
    <section className="bg-[#070324] py-8 sm:py-16 px-4  lg:px-8 text-white">
      <div className="max-w-8xl mt-8 ">
        <img className="6  flex justify-center  w-full" src="/pic-12.png" />
        {/* Logos Section */}
        <div className="flex flex-wrap justify-center mt-10 items-center sm:gap-24 gap-12 mb-8 sm:mb-16 cursor-pointer sm:mr-16">
          <motion.a href="/" 
           variants={itemVariants}
            whileHover="hover"
          >
            <img
              src="/assets/park+.png"
              alt="Park+"
              className="w-24 sm:w-40 sm:pr-2 grayscale  transition-all duration-300"
            />
          </motion.a>
          <motion.a href="/"
          variants={itemVariants}
            whileHover="hover"
          >
            <img
              src="/assets/piramal-new.svg"
              alt="Piramal"
              className="w-24 sm:w-40 grayscale  transition-all duration-300"
            />
          </motion.a>
          <motion.a href="/"
          variants={itemVariants}
            whileHover="hover"
          >
            <img
              src="/assets/adani_logo.png"
              alt="Adani"
              className="w-24 sm:w-40 grayscale  transition-all duration-300"
            />
          </motion.a>
          <motion.a href="/"
          variants={itemVariants}
            whileHover="hover"
          >
            <img
              src="/assets/Screenshot 2025-01-04 145058.png"
              alt="RVshare"
              className="w-24 sm:w-40 grayscale transition-all duration-300"
            />
          </motion.a>
          <motion.a href="/"
          variants={itemVariants}
            whileHover="hover"
          >
            <img
              src="/assets/apollo247.svg"
              alt="Apollo 247"
              className="w-24 sm:w-40 grayscale transition-all duration-300"
            />
          </motion.a>
        </div>


        {/* Main Content */}
       
       <motion.div className="md:px-20">
        <div className="lg:flex  gap-20 lg:justify-between">
        <div>
            
            <div className="w-full mx-auto flex justify-center"> 
            <div className="flex gap-2 items-center  mb-6">
              <img className="h-9 w-9" src="/pic-29.png" />
              <span className="text-[13px] text-center">FEATURED CASE STUDY</span>
            </div>
            </div>
            <h3 className="text-3xl   lg:text-3xl text-center  font-Arimo font-normal leading-9 mb-8 ">
              "Reimagining a Legacy:
              <p className="lg:mt-5"> Redefining Top's India</p>
              <p className="lg:mt-5">
                Brand Identity and Strategy
              </p>
              <p className="lg:mt-5">
                for the Modern Consumer"
              </p>
              <hr className=" green-400 mt-16" />
            </h3>
            <div className="flex  w-full sm:flex-row items-center gap-6 sm:gap-12 justify-center md:justify-start lg:pt-3">
              <div>
                <p className="text-3xl sm:text-8xl text-green-400">250%</p>
                <p className="text-xs mt-4 sm:text-xl text-[#c3ccd3] font-Inter">Increase in Click Rate</p>
              </div>
              <div>
                <p className="text-3xl sm:text-8xl text-green-400">192k+</p>
                <p className="text-xs sm:text-xl mt-4 text-[#c3ccd3] font-Inter">Leads Generated with Creatives</p>
              </div>
            </div>
            <a
              href="/case-studies/tops"
              className="inline-flex items-center text-2xl  text-white  mt-4 hover:underline lg:pt-12"
            >
              Read Case Study <span className="ml-2  rounded-full py-1 px-1 text-black  bg-white">
              <LuArrowRight className=" text-xl sm:text-2xl align-middle" />

              </span>
            </a>
        </div>
        <div className="pt-4">
               <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className=" "
          >
            <img
              src="/pic-10.png"
              alt="Tops Case Study"
              className="size-60 w-full h-full  md:w-[529px]"
            />
          </motion.div>
        </div>
        </div>
       </motion.div>
      </div>
    </section>
  );
};

export default CaseStudySection;
