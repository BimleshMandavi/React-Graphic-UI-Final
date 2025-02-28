import { motion } from "framer-motion";
const StatsSection = () => {
  return (
    <section className="bg-[#7B23FD] w-full text-white py-20 px-6">
      {/* Heading */}
      <motion.h2
        className="text-[48px] md:text-[60px] font-Helvetica lg:text-[60px] text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Designera is best for your business
      </motion.h2>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 w-[97%] px-16 text-center translate-x-[20px]">
        <motion.div
          className="flex justify-between items-center py-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="w-full text-[18px] md:text-[20px] lg:text-[18px] text-left">
            Social media creative projects completed to date
          </p>
          <h3 className="text-[48px] md:text-[56px] lg:text-[75px] font-medium">
            20K+
          </h3>
        </motion.div>
        <motion.div
          className="flex justify-between items-center py-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="w-full text-[18px] md:text-[20px] lg:text-[18px] text-left">
            Social media creative projects completed to date
          </p>
          <h3 className="text-[48px] md:text-[56px] lg:text-[75px] font-medium">
            1900+
          </h3>
        </motion.div>
        <motion.div
          className="flex justify-between items-center border-t border-white/20 py-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="w-full text-[18px] md:text-[20px] lg:text-[18px] text-left">
            Social media creative projects completed to date
          </p>
          <h3 className="text-[48px] md:text-[56px] lg:text-[75px] font-medium">
            30K+
          </h3>
        </motion.div>
        <motion.div
          className="flex justify-between items-center border-t border-white/20 py-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="w-full text-[18px] md:text-[20px] lg:text-[18px] text-left">
            Social media creative projects completed to date
          </p>
          <h3 className="text-[48px] md:text-[56px] lg:text-[75px] font-medium">
            4.8/5
          </h3>
        </motion.div>
      </div>
    </section>
  );
};
export default StatsSection;
