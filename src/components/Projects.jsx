

// // export default Projects;
// import { PROJECTS } from "../constants";
// import { useRef } from "react";
// import { FaGithub } from "react-icons/fa";
// import { motion } from "framer-motion";

// const Projects = () => {
//   const scrollRef = useRef(null);

//   const scrollLeft = () => {
//     scrollRef.current.scrollBy({ left: -500, behavior: "smooth" });
//   };

//   const scrollRight = () => {
//     scrollRef.current.scrollBy({ right: 500, behavior: "smooth" });
//   };

//   return (
//     <div
//       id="projects" // Ensures navbar link scrolls here
//       className="min-h-screen border-b border-neutral-800 pb-20"
//     >
//       <h2 className="my-20 text-center text-4xl">Projects</h2>
//       <div className="relative flex items-center justify-center">
//         {/* Scroll Buttons */}
//         <button
//           onClick={scrollLeft}
//           className="absolute left-4 z-10 bg-neutral-800 text-white rounded-full p-2 shadow-md hover:bg-neutral-700 hidden md:block"
//         >
//           ◀
//         </button>
//         <button
//           onClick={scrollRight}
//           className="absolute right-4 z-10 bg-neutral-800 text-white rounded-full p-2 shadow-md hover:bg-neutral-700 hidden md:block"
//         >
//           ▶
//         </button>

//         {/* Projects Container */}
//         <div
//           ref={scrollRef}
//           className="flex overflow-x-scroll gap-4 scroll-smooth scrollbar-hide px-6 w-full max-w-[1200px] justify-center"
//         >
//           {PROJECTS.map((project, index) => (
//             <div
//               key={index}
//               className="w-[290px] h-[340px] rounded-lg shadow-lg bg-neutral-800 border border-neutral-800 overflow-hidden flex-shrink-0 hover:border-purple-400 transition border-2"
//             >
//               <div className="flex items-center justify-center w-full h-[150px] bg-neutral-900">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="p-3">
//                 <h3 className="text-lg font-semibold text-white mb-2 mt-5">
//                   {project.title}
//                 </h3>
//                 <p className="text-xs text-neutral-400 mb-2">
//                   {project.description}
//                 </p>
//                 {/* GitHub Link */}
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition text-sm"
//                 >
//                   <FaGithub /> View on GitHub
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

// import { PROJECTS } from "../constants";
// import { useRef } from "react";
// import { FaGithub } from "react-icons/fa";
// import { motion } from "framer-motion";

// const Projects = () => {
//   const scrollRef = useRef(null);

//   const scrollLeft = () => {
//     scrollRef.current.scrollBy({ left: -1000, behavior: "smooth" });
//   };

//   const scrollRight = () => {
//     scrollRef.current.scrollBy({ left: 500, behavior: "smooth" });
//   };

//   return (
//     <div
//       id="projects"
//       className="min-h-screen border-b border-neutral-800 pb-20"
//     >
//       <motion.h2
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//         className="my-20 text-center text-4xl"
//       >
//         Projects
//       </motion.h2>
//       <div className="relative flex items-center justify-center">
//         {/* Scroll Buttons */}
//         <button
//           onClick={scrollLeft}
//           className="absolute left-4 z-10 bg-neutral-800 text-white rounded-full p-2 shadow-md hover:bg-neutral-700"
//         >
//           ◀
//         </button>
//         <button
//           onClick={scrollRight}
//           className="absolute right-4 z-10 bg-neutral-800 text-white rounded-full p-2 shadow-md hover:bg-neutral-700"
//         >
//           ▶
//         </button>

//         {/* Projects Container */}
//         <div
//           ref={scrollRef}
//           className="flex overflow-x-auto gap-4 scroll-smooth scrollbar-hide px-6 w-full max-w-[1200px] justify-center"
//         >
//           {PROJECTS.map((project, index) => (
//             <motion.div
//               key={index}
//               className="w-[290px] h-[340px] rounded-lg shadow-lg bg-neutral-800 border border-neutral-800 overflow-hidden flex-shrink-0 hover:border-purple-400 transition border-2"
//               initial={{ scale: 0.9, opacity: 0 }}
//               whileInView={{ scale: 1, opacity: 1 }}
//               transition={{
//                 ease: "easeOut",
//                 duration: 0.6,
//               }}
//             >
//               <div className="flex items-center justify-center w-full h-[150px] bg-neutral-900">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="p-3">
//                 <h3 className="text-lg font-semibold text-white mb-2 mt-5">
//                   {project.title}
//                 </h3>
//                 <p className="text-xs text-neutral-400 mb-2">
//                   {project.description}
//                 </p>
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition text-sm"
//                 >
//                   <FaGithub /> View on GitHub
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

import { PROJECTS } from "../constants";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 500, behavior: "smooth" });
  };

  return (
    <div
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center border-b border-neutral-900 pb-20"
    >
      {/* Section Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl font-semibold bg-gradient-to-r from-gray-400 via-gray-200 to-white bg-clip-text text-transparent"
      >
        Projects
      </motion.h2>

      {/* Scrollable Section */}
      <div className="relative w-full max-w-[1200px] ">
        {/* Scroll Button - Left */}
        <button
          onClick={scrollLeft}
          className=" hidden absolute left-4 top-1/2 -translate-y-1/2 bg-neutral-800 text-white rounded-full p-3 shadow-md hover:bg-neutral-700 z-20 "
        >
          ◀
        </button>

        {/* Scroll Button - Right */}
        <button
          onClick={scrollRight}
          className=" hidden absolute right-4 top-1/2 -translate-y-1/2 bg-neutral-800 text-white rounded-full p-3 shadow-md hover:bg-neutral-700 z-20"
        >
          ▶
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 scroll-smooth scrollbar-hide px-2 mb-25"
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              className={`w-[290px] h-[340px] flex-shrink-0 rounded-lg shadow-lg bg-neutral-800 border border-neutral-800 hover:border-purple-400 transition overflow-hidden ${
                index === 0 ? "ml-28" : ""
              }`} // Adds margin-left to the first project card
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                ease: "easeOut",
                duration: 0.6,
              }}
            >
              {/* Project Image */}
              <div className="w-full h-[150px] bg-neutral-900 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Details */}
              <div className="p-4 flex flex-col ">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-400 mb-4 flex-grow">
                  {project.description}
                </p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-sm text-purple-300 flex items-center gap-2 mt-auto"
                >
                  <FaGithub /> View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
