import { RiReactjsLine } from "react-icons/ri";
import { SiTableau, SiJupyter, SiLangchain, SiTensorflow, SiReact } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10},
  animate: {
    y: [10, -10],
    opacity: 1,
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      {/* Static Section Title */}
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      className="my-20 text-center text-4xl font-semibold bg-gradient-to-r from-gray-600 via-gray-300 to-white bg-clip-text text-transparent">Tools & FrameWorks</motion.h2>

      {/* Animated Tools */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* TensorFlow */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTensorflow className="text-7xl text-orange-500" />
        </motion.div>

        {/* Tableau */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTableau className="text-7xl text-blue-600" />
        </motion.div>

        {/* Jupyter Notebook */}
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJupyter className="text-7xl text-orange-400" />
        </motion.div>

        {/* LangChain */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiLangchain className="text-7xl text-teal-500" />
        </motion.div>

        {/* React */}
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiReact className="text-7xl text-sky-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
