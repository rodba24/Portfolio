import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      className="my-20 text-center text-4xl font-semibold bg-gradient-to-r from-gray-500 via-gray-200 to-white bg-clip-text text-transparent">About Me</motion.h2>
      <div className="flex flex-wrap">
        {/* Text Section with Motion */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }} // Fades in and moves up
          initial={{ opacity: 0, x: 50 }} // Starts faded out and below
          transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth easing
          className="w-full flex justify-center items-center"
        >
          <div className="flex flex-col items-center text-center px-4 lg:px-20">
            <p className="max-w-3xl text-neutral-300 text-lg leading-relaxed mb-10">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
