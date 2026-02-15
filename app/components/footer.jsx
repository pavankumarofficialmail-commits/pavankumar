"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { FiArrowUp } from "react-icons/fi";

function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="relative border-t bg-[#0d1224] border-[#353951] text-white overflow-hidden"
    >
      {/* Luxury Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-violet-900/20 via-transparent to-pink-900/20 blur-3xl opacity-40 pointer-events-none"></div>

      {/* Futuristic Animated Line */}
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 h-[2px] w-1/3 bg-gradient-to-r from-transparent via-violet-400 to-transparent"
      />

      <div className="relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Your Branding (Unchanged) */}
          <p className="text-sm tracking-wide">
            © Built & Managed by{" "}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/pavankumar-in/"
              className="text-[#16f2b3] hover:opacity-80 transition duration-500"
            >
              Pavan Kumar | SAP & Coupa Analyst
            </Link>
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-8">

            <motion.div whileHover={{ scale: 1.12 }}>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/pavankumar-in/"
                className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-[#16f2b3] transition duration-500"
              >
                <FaLinkedin />
                LinkedIn
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.12 }}>
              <Link
                target="_blank"
                href="https://drive.google.com/file/d/1Ync5iKDQH4mF-oAeN4-vgYcGQo6SiADy/view?usp=sharing"
                className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-[#16f2b3] transition duration-500"
              >
                <MdDownload />
                Resume
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.12 }}>
              <a
                href="mailto:pavankumarofficialmail@gmail.com"
                className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-[#16f2b3] transition duration-500"
              >
                <HiOutlineMail />
                Email
              </a>
            </motion.div>

            {/* Floating Luxury Scroll Button */}
            <motion.button
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 shadow-xl"
            >
              <FiArrowUp />
            </motion.button>

          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Footer;