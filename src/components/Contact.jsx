import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contact" // Ensures navbar link scrolls here
      className="py-25 border-b border-neutral-800"
    >
      <div className="border-b border-neutral-900 pb-20 ">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold mt-10 text-center bg-gradient-to-r from-gray-400 via-gray-200 to-white bg-clip-text text-transparent"
        >
          Contact
        </motion.h2>
        <div className="text-center tracking-tighter my-4">
          <a href={`mailto:${CONTACT.email}`} className="border-b">
            {CONTACT.email}
          </a>
        </div>
        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-4">
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-blue-300 transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-purple-500 transition"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
