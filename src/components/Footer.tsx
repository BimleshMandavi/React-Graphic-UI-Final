import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
function Footer() {
const fadeIn = {
hidden: { opacity: 0 },
visible: { opacity: 1, transition: { duration: 0.6 } },
};
return (
  <motion.footer
    initial="hidden"
    animate="visible"
    variants={fadeIn}
    className="bg-[#ffffff] font-Arimo font-normal text-gray-800 border-t border-gray-200 sm:px-28"
  >
    <div className="container mx-auto px-4 sm:pr-14 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
      {/* Column 1 */}
      <div className="hidden lg:flex lg:flex-col cursor-pointer sm:ml-[-19px]">
        <h5 className="text-[15px] font-semibold mb-4 text-[#997200]">
          PLATFORM
        </h5>
        <ul className="gap-2 transform -translate-x-[1px] text-[15px]">
          <li className="mb-2 text-[14px] font-Helvetica font-normal hover:text-sky-600">
            <p>Social Media Audit</p>
          </li>
          <li className="mb-2 text-[14px] font-Helvetica font-normal hover:text-sky-600">
            <p>Designera Learning</p>
          </li>
        </ul>
      </div>
      {/* Column 2 */}
      <div className="cursor-pointer hidden lg:flex lg:flex-col">
        <h5 className="text-[15px] font-semibold mb-4 text-[#997200]">
          DESIGN SERVICES
        </h5>
        <ul className=" transform -translate-x-[1px] text-[15px]">
          <li className="mb-4 hover:text-sky-600 font-Helvetica font-normal sm:text-[14px]">
            Content Writing
          </li>
          <li className="mb-4 hover:text-sky-600 font-Helvetica font-normal sm:text-[14px]">
            Graphic Design
          </li>
          <li className="mb-4 hover:text-sky-600 font-Helvetica font-normal sm:text-[14px]">
            Video Production
          </li>
          <li className="mb-4 hover:text-sky-600 font-Helvetica font-normal sm:text-[14px]">
            Commercial Ads
          </li>
          <li className="mb-4 hover:text-sky-600 font-Helvetica font-normal sm:text-[14px]">
            Product Design
          </li>
          <li className="mb-4 hover:text-sky-600 font-Helvetica font-normal sm:text-[14px]">
            Packaging Design
          </li>
          <li className="mb-4 hover:text-sky-600 font-Helvetica font-normal sm:text-[14px]">
            UI-UX Design
          </li>
          <li className="hover:text-sky-600 font-Helvetica font-normal sm:text-[14px]">
            Launch a Brand
          </li>
        </ul>
      </div>
      {/* Column 3 */}
      <div className="cursor-pointer hidden lg:flex lg:flex-col sm:ml-4">
        <h5 className="text-[15px] font-semibold mb-4 text-[#997200] ">
          MARTECH SERVICES
        </h5>
        <ul className="text-[15px] font-Helvetica font-normal sm:text-[14px]">
          <li className="mb-4 hover:text-sky-600 font-Helvetica font-normal sm:text-[14px]">
            <p>Custom Web Development</p>
          </li>
          <li className="mb-4 hover:text-sky-600 font-Helvetica font-normal sm:text-[14px]">
            Performance Marketing
          </li>
          <li className="mb-4 hover:text-sky-600 font-Helvetica font-normal sm:text-[14px]">
            Lead-Gen Funnel
          </li>
          <li className="mb-4 hover:text-sky-600 font-Helvetica font-normal sm:text-[14px]">
            Technical SEO
          </li>
          <li className="mb-4 hover:text-sky-600 font-Helvetica font-normal sm:text-[14px]">
            Market Research & Survey
          </li>
          <li className="mb-4 hover:text-sky-600 font-Helvetica font-normal sm:text-[14px]">
            Social Media Marketing
          </li>
          <li className="mb-4 hover:text-sky-600 font-Helvetica font-normal sm:text-[14px]">
            Campaign Planning
          </li>
          <li className="hover:text-sky-600 font-Helvetica font-normal sm:text-[14px]">
            WhatsApp/Email Marketing
          </li>
          <li className="hover:text-sky-600 font-Helvetica font-normal sm:text-[14px]">
            CRM
          </li>
        </ul>
      </div>
      {/* Column 4 */}
      <div className="cursor-pointer hidden lg:flex lg:flex-col sm:ml-16 sm:w-[400px]">
        <h5 className="text-[15px] font-semibold mb-4 text-[#997200]">
          MEDIA SERVICES
        </h5>
        <ul className="text-[15px]">
          <li className="mb-4 hover:text-sky-600 font-Helvetica font-normal sm:text-[14px]">
            Media Planning & Buying
          </li>
          <li className="mb-4 hover:text-sky-600 font-Helvetica font-normal sm:text-[14px]">
            Influencer Marketing
          </li>
          <li className="mb-4 hover:text-sky-600 font-Helvetica font-normal sm:text-[14px]">
            Event Marketing
          </li>
        </ul>
        <h5 className="text-[15px] font-semibold sm:mt-14 mb-4 text-[#997200]">
          TALENT NETWORK SERVICES
        </h5>
        <ul className="text-[15px]">
          <li className="mb-4 hover:text-sky-600 font-Helvetica font-normal sm:text-[14px]">
            Get Hired
          </li>
          <li className="mb-4 hover:text-sky-600 font-Helvetica font-normal sm:text-[14px]">
            Get Talent
          </li>
          <li className="hover:text-sky-600 font-Helvetica font-normal sm:text-[14px]">
            Evaluate Creative Talent
          </li>
        </ul>
      </div>
      {/* Column 5 */}
      <div className="cursor-pointer sm:transform sm:translate-x-[160px] hidden lg:flex sm:flex-col sm:mr-20">
        <h5 className="text-[15px] font-semibold text-[#997200] mb-4">
          RESOURCES
        </h5>
        <ul className="text-[15px] font-Helvetica font-normal sm:text-[14px]">
          <li className="mb-4 hover:text-sky-600 font-Helvetica font-normal sm:text-[14px]">
            Blogs
          </li>
          <li className="mb-4 hover:text-sky-600 font-Helvetica font-normal sm:text-[14px]">
            Case Studies
          </li>
          <li className="mb-4 hover:text-sky-600 font-Helvetica font-normal sm:text-[14px]">
            Community
          </li>
          <li className="mb-4 hover:text-sky-600 font-Helvetica font-normal sm:text-[14px]">
            E-books
          </li>
          <li className="mb-4 hover:text-sky-600 font-Helvetica font-normal sm:text-[14px]">
            Events
          </li>

          <li className="mb-4 hover:text-sky-600 font-Helvetica font-normal sm:text-[14px]">
            Global CMO’s
          </li>
          <li className="font-Helvetica font-normal sm:text-[14px]">
            Help Center
          </li>
        </ul>
      </div>
    </div>
    <div className=" flex justify-between flex-col md:flex-row md:justify-between pt-4 md:px-0 sm:mx-auto px-4 sm:py-6 border-t border-[#192138c9] ">
      {/* Company */}
      <div className="flex justify-between md:w-[58%] translate-y-[16px]">
        <div className="pb-6">
          <h5 className="text-[15px] font-semibold mb-4 text-[#997200]">
            COMPANY
          </h5>
          <ul className="text-[15px] font-Helvetica font-normal sm:text-[14px]">
            <li className="mb-2 font-Helvetica font-normal sm:text-[14px]">
              About Us
            </li>
            <p className="pb-4 font-Helvetica font-normal sm:text-[14px]">
              Join our team
            </p>
            <li className="w-full">
              <a
                href="#"
                className="text-white w-full hover:underline border lg:min-w-10 border-[#1600ea] bg-[#1600ea] rounded lg:p-2 font-Helvetica font-normal sm:text-[14px] "
              >
                Join Team
              </a>
            </li>
          </ul>
        </div>
        {/* Address */}
        <div className=" sm:ml-12 translate-x-[23px]">
          <h5 className="text-[15px]  mb-4 text-[#997200] font-Helvetica font-normal ">
            ADDRESS
          </h5>
          {/* <p className="hover:text-sky-800 cursor-pointer text-[15px]">Address</p> */}
          <div className="text-[15px] font-Helvetica font-normal sm:text-[14px]">
            <p>C 5 A Block - 24, Ground Floor, Janakpuri, New Delhi - 110058</p>
            <p className="my-3">
              14, Banshal Treashar,18, RamKrishna, Khandwa, Madhya Pradesh -
              450001
            </p>
            <p>
              1901, DB Ozone, Ketkipada, Dahisar East, Mumbai, Maharashtra -
              400068
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-4 md:w-[36%]">
        {/* Get in Touch */}
        <div className=" text-center">
          <h5 className="text-[15px] font-semibold mb-4 text-start text-[#997200]">
            GET IN TOUCH
          </h5>
          <div className="text-start text-[15px] font-Helvetica font-normal sm:text-[14px]">
            <p>Please connect with us at</p>
            <p className="mb-4 font-Helvetica font-normal sm:text-[14px]">
              +91-7974100169
            </p>
            <p className="font-Helvetica font-normal sm:text-[14px]">
              or Write us at{" "}
              <a
                className="text-[14px] font-Helvetica font-normal text-[#1700EB]"
                href="mailto:EMAIL"
              >
                designera@gmail.com
              </a>
            </p>
          </div>
        </div>
        {/* Social Media */}
        <div className=" lg:mr-14 sm:ml-12 translate-x-[20px]">
          <h5 className="text-[15px] font-semibold mb-4 text-[#997200]">
            SOCIAL
          </h5>
          <ul className="flex space-x-4 text-center ">
            <li>
              <a
                href="#"
                className="text-blue-600 hover:underline flex items-center"
              >
                <FaInstagram className="mr-2 text-black text-2xl" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-600 hover:underline flex items-center"
              >
                <FaLinkedin className="mr-2 text-black text-2xl" />
              </a>
            </li>
          </ul>
          <ul className="flex space-x-4 mt-2 text-center ">
            <li>
              <a
                href="#"
                className="text-blue-600 hover:underline items-center"
              >
                <FaXTwitter className="md:mr-2 text-black text-2xl" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-600 ml-2 md:ml-0 hover:underline flex items-center"
              >
                <FaFacebookSquare className="md:mr-2 text-black text-2xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="container mx-auto p-4 lg:p-0 py-4 lg:py-8 lg:flex lg:justify-between border-t border-[#192138c9] lg:pb-10">
      <div className="flex justify-evenly text-sm lg:justify-between lg:w-[42%]">
        <p className="text-sm text-[#1700ea6d] ">
          © 2024, Name Inc. All Rights Reserved.
        </p>
        <ul className="flex space-x-4 text-start ">
          <li>
            <a href="#" className="text-[#1700ea6d] hover:underline">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="text-[#1700ea6d] hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="text-[#1700ea6d] hover:underline">
              Sitemap
            </a>
          </li>
        </ul>
      </div>
      <div className="py-4 lg:py-0">
        <p className="text-sm text-gray-600 text-center">
          A Proud <span className="text-[#1700ea6d]">🇮🇳 Design Agency</span>.
        </p>
      </div>
    </div>
  </motion.footer>
);
}
export default Footer;
