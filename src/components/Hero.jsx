import { Player } from "@lottiefiles/react-lottie-player";
import robotAnimation from "../assets/robotAnimation.json"; // Adjust the path as needed
import { motion } from "framer-motion";


const Hero = () => {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay },
    },
  });

  return (
    <div
      id="home" // Ensures navbar link scrolls here
      className="min-h-screen border-b border-neutral-900 pb-20"
    >
      <div>
        <div className="flex flex-wrap">
          {/* Left Section */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start ml-10 mt-10">
              {/* Animated Name */}
              <motion.h2
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="pb-8 text-4xl tracking-tight lg:mt-16 lg:text-8xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent mb-6 font-rounded"
              >
                Rodba Khondoker
              </motion.h2>

              <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent mb-6"></span>

              {/* Buttons */}
              <div className="flex gap-5 ">
                {/* Animated Resume Button */}
                <motion.a
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.42, 0, 0.58, 1], // Smooth cubic-bezier easing
                  }}
                  href="RodbaKhondokerResume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-[#a3a3db] text-neutral-800 font-bold text-lg shadow-md hover:bg-[#9292cc] transition"
                >
                  My Resume
                </motion.a>

                {/* Animated Contact Button */}
                <motion.a
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.42, 0, 0.58, 1],
                  }}
                  href="#contact"
                  className="px-9 py-3 rounded-lg bg-[#a3a3db] text-neutral-800 font-bold text-lg shadow-md hover:bg-[#9292cc] transition"
                >
                  Contact
                </motion.a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:p-8">
            {/* Animated Robot */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Player
                autoplay
                loop
                src={robotAnimation}
                style={{ height: "500px", width: "500px" }}
              ></Player>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
