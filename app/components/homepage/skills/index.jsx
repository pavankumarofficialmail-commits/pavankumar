"use client";

// @flow strict
import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div
      id="skills"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      {/* Glow background */}
      <div className="w-[120px] h-[120px] bg-violet-500 rounded-full absolute top-6 left-1/2 -translate-x-1/2 blur-3xl opacity-20" />

      {/* Top divider */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      {/* Section title */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center gap-3">
          <span className="w-24 h-[2px] bg-[#1a1443]" />
          <span className="bg-[#1a1443] text-white px-5 py-2 text-xl rounded-md shadow-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      {/* Skills marquee */}
      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover
          pauseOnClick
        >
          {skillsData.map((skill, id) => {
            const icon = skillsImage(skill);

            return (
              <div
                key={id}
                className="group relative w-36 min-w-fit m-3 sm:m-5 cursor-pointer 
                           transition-all duration-500 hover:scale-[1.12]"
              >
                {/* Card */}
                <div
                  className="relative h-full w-full rounded-xl 
                             border border-[#1f223c] 
                             bg-[#0f132a]/80 backdrop-blur-md
                             transition-all duration-500
                             group-hover:border-violet-500
                             group-hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]"
                >
                  {/* Side glow */}
<div className="pointer-events-none absolute inset-y-0 left-0 w-[2px]
                bg-gradient-to-b from-transparent via-violet-500/40 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

<div className="pointer-events-none absolute inset-y-0 right-0 w-[2px]
                bg-gradient-to-b from-transparent via-violet-500/40 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Animated top line */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col items-center justify-center gap-4 p-6">
                    {/* Icon */}
                    {/* Icon */}
<div
  className="
    relative flex items-center justify-center
    h-16 w-16
    sm:h-18 sm:w-18
    md:h-24 md:w-24
    rounded-full
    bg-violet-500/15
    group-hover:bg-violet-500/25
    transition-all duration-300
    group-hover:-translate-y-1
  "
>
  {skillsImage(skill)?.src ? (
    <Image
      src={skillsImage(skill).src}
      alt={skill}
      width={112}
      height={112}
      className="
        h-12 w-12
        sm:h-14 sm:w-14
        md:h-16 md:w-16
        object-contain
        transition-all duration-300
        group-hover:scale-110
        group-hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.9)]
      "
    />
  ) : (
    <div className="h-12 w-12 rounded-full bg-violet-500/30 blur-sm" />
  )}
</div>

                    {/* Label */}
                    <p className="text-center text-white text-sm sm:text-base font-medium tracking-wide">
                      {skill}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;
