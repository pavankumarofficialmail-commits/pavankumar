// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">

      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        <ContactForm />

        <div className="lg:w-3/4">

          {/* CONTACT INFO */}
          <div className="flex flex-col gap-8">

            {/* EMAIL */}
            <div className="text-sm md:text-xl flex items-center gap-5">
              <div className="w-12 h-12 flex items-center justify-center rounded-full
                bg-[#0f172a]/60 backdrop-blur-md
                border border-[#16f2b3]/20
                text-[#16f2b3]
                shadow-[0_0_15px_rgba(22,242,179,0.12)]
                transition-all duration-300
                hover:bg-[#16f2b3]/10
                hover:shadow-[0_0_30px_rgba(22,242,179,0.35)]
                hover:scale-105">
                <MdAlternateEmail size={22} />
              </div>
              <span className="text-gray-300 tracking-wide">
                {personalData.email}
              </span>
            </div>

            {/* PHONE */}
            <div className="text-sm md:text-xl flex items-center gap-5">
              <div className="w-12 h-12 flex items-center justify-center rounded-full
                bg-[#0f172a]/60 backdrop-blur-md
                border border-[#16f2b3]/20
                text-[#16f2b3]
                shadow-[0_0_15px_rgba(22,242,179,0.12)]
                transition-all duration-300
                hover:bg-[#16f2b3]/10
                hover:shadow-[0_0_30px_rgba(22,242,179,0.35)]
                hover:scale-105">
                <IoMdCall size={22} />
              </div>
              <span className="text-gray-300 tracking-wide">
                {personalData.phone}
              </span>
            </div>

            {/* LOCATION */}
            <div className="text-sm md:text-xl flex items-center gap-5">
              <div className="w-12 h-12 flex items-center justify-center rounded-full
                bg-[#0f172a]/60 backdrop-blur-md
                border border-[#16f2b3]/20
                text-[#16f2b3]
                shadow-[0_0_15px_rgba(22,242,179,0.12)]
                transition-all duration-300
                hover:bg-[#16f2b3]/10
                hover:shadow-[0_0_30px_rgba(22,242,179,0.35)]
                hover:scale-105">
                <CiLocationOn size={22} />
              </div>
              <span className="text-gray-300 tracking-wide">
                {personalData.address}
              </span>
            </div>

          </div>

          {/* SOCIAL ICONS */}
          <div className="mt-12 lg:mt-20 flex items-center gap-6">

            {[
              { href: personalData.github, icon: <IoLogoGithub size={22} /> },
              { href: personalData.linkedIn, icon: <BiLogoLinkedin size={22} /> },
              { href: personalData.twitter, icon: <FaXTwitter size={22} /> },
              { href: personalData.stackOverflow, icon: <FaStackOverflow size={22} /> },
              { href: personalData.facebook, icon: <FaFacebook size={22} /> },
            ].map((item, index) => (
              <Link key={index} target="_blank" href={item.href}>
                <div className="w-14 h-14 flex items-center justify-center rounded-full
                  bg-[#0f172a]/60 backdrop-blur-md
                  border border-[#16f2b3]/20
                  text-[#16f2b3]
                  shadow-[0_0_18px_rgba(22,242,179,0.15)]
                  transition-all duration-300
                  hover:bg-[#16f2b3]/10
                  hover:shadow-[0_0_35px_rgba(22,242,179,0.45)]
                  hover:scale-110 cursor-pointer">
                  {item.icon}
                </div>
              </Link>
            ))}

          </div>

        </div>
      </div>
    </div>
  );
}

export default ContactSection;