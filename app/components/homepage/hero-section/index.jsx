"use client";
import React, { useEffect, useRef } from "react";
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

export default function HeroSection() {
  const codeRef = useRef(null);

  useEffect(() => {
    const container = codeRef.current;
    if (!container) return;

    const lines = Array.from(container.querySelectorAll(".code-line"));
    const revealDelay = 120;
    const activeGlowDelay = 60;
    const restartDelay = 5000;
    const fadeOutDelay = 25;

    let idx = 0;
    let revealInterval = null;
    let restartTimeout = null;

    function resetLines() {
      lines.forEach((ln) => {
        ln.classList.remove("visible", "active-line");
      });
      idx = 0;
    }

   function startReveal() {
  resetLines();

  revealInterval = setInterval(() => {
    if (idx >= lines.length) {
      clearInterval(revealInterval);

      // Let it sit fully visible for premium pause
      restartTimeout = setTimeout(() => {

        // Smooth fade out instead of instant reset
        lines.forEach((ln, i) => {
          setTimeout(() => {
            ln.classList.remove("active-line");
            ln.style.opacity = "0";
            ln.style.transform = "translateY(6px)";
          }, i * fadeOutDelay);
        });

        // Restart smoothly
        setTimeout(() => {
          lines.forEach((ln) => {
            ln.style.opacity = "";
            ln.style.transform = "";
          });
          startReveal();
        }, lines.length * fadeOutDelay + 300);

      }, restartDelay);

      return;
    }

    const current = lines[idx];
    current.classList.add("visible");

    setTimeout(() => {
      current.classList.add("active-line");
    }, activeGlowDelay);

    idx++;
  }, revealDelay);
}


    startReveal();

    return () => {
      clearInterval(revealInterval);
      clearTimeout(restartTimeout);
    };
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-between py-6 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8 w-full">

        {/* LEFT SIDE */}
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is{" "}
            <span className="text-pink-500 aura-hero-name">
  {personalData.name}
</span>

            {` , I'm a Value-Architect in `}
            <span className="text-[#16f2b3]">{personalData.designation}</span>.
          </h1>

          <p className="mt-4 text-sm sm:text-base text-gray-400 max-w-xl leading-relaxed">
            Where P2P, O2C & Accounts Meet Business Impact
          </p>

          <div className="my-12 flex items-center gap-5">
            <Link href={personalData.github} target="_blank" className="transition-all text-pink-500 hover:scale-125 duration-300">
              <BsGithub size={30} />
            </Link>
            <Link href={personalData.linkedIn} target="_blank" className="transition-all text-pink-500 hover:scale-125 duration-300">
              <BsLinkedin size={30} />
            </Link>
            <Link href={personalData.facebook} target="_blank" className="transition-all text-pink-500 hover:scale-125 duration-300">
              <FaFacebook size={30} />
            </Link>
            <Link href={personalData.leetcode} target="_blank" className="transition-all text-pink-500 hover:scale-125 duration-300">
              <SiLeetcode size={30} />
            </Link>
            <Link href={personalData.twitter} target="_blank" className="transition-all text-pink-500 hover:scale-125 duration-300">
              <FaTwitterSquare size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full text-white flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-xs md:text-sm text-white"
              target="_blank"
              href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE CODE BOX */}
        <div className="order-1 lg:order-2 relative rounded-lg border border-[#1b2c68a0] bg-gradient-to-r to-[#0a0d37] from-[#0d1224] overflow-hidden">
          
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>

          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8 relative">
            <code ref={codeRef} className="font-mono text-xs md:text-sm lg:text-base block relative">

<div className="code-line aura-line">
  <span className="text-pink-500 aura-const">VALUE</span>
  <span className="ml-2 text-white aura-name">ARCHITECT PROFILE</span>
</div>

<div className="code-line ml-4 lg:ml-8">
  <span className="text-amber-300 aura-name">{personalData.name}</span>
</div>

<div className="code-line ml-4 lg:ml-8 text-white">
  ⚙ Process Optimization Intelligence
</div>

<div className="code-line ml-4 lg:ml-8 text-white">
  💰 Financial Accuracy
</div>

<div className="code-line ml-4 lg:ml-8 text-white">
  📊 Operational Excellence
</div>

<div className="code-line ml-4 lg:ml-8 text-gray-400">
  ───────────────────────────
</div>

<div className="code-line ml-4 lg:ml-8 text-white">
  SYSTEMS
</div>

<div className="code-line ml-4 lg:ml-8 text-amber-300">
  SAP MM • SAP FI • COUPA
</div>

<div className="code-line ml-4 lg:ml-8 text-gray-400">
  ───────────────────────────
</div>

<div className="code-line ml-4 lg:ml-8 text-white">
  CORE STRENGTHS
</div>

<div className="code-line ml-8 lg:ml-16 text-orange-400">
  ✓ Optimization
</div>

<div className="code-line ml-8 lg:ml-16 text-orange-400">
  ✓ Compliance
</div>

<div className="code-line ml-8 lg:ml-16 text-orange-400">
  ✓ Accuracy
</div>

<div className="code-line ml-4 lg:ml-8 text-gray-400">
  ───────────────────────────
</div>

<div className="code-line ml-4 lg:ml-8 text-white">
  RESULT
</div>

<div className="code-line ml-4 lg:ml-8 text-amber-300 aura-result">
  Business Value Delivered
</div>

<div className="code-line ml-4 lg:ml-8 text-amber-300">
  I Don’t Manage Operations. I Master Them.
</div>

<span className="absolute -right-2 bottom-6 md:bottom-8 cursor-block">
  <span className="cursor-block-dot" />
</span>

</code>
          </div>
        </div>
      </div>

      <style jsx>{`
        .code-line {
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 260ms cubic-bezier(.4,0,.2,1),
            transform 260ms cubic-bezier(.4,0,.2,1),
            box-shadow 200ms ease;

          padding: 2px 0;
          border-radius: 6px;
        }
        .code-line.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .code-line.active-line {
          box-shadow: 0 6px 22px rgba(22, 242, 179, 0.06);
          background: linear-gradient(90deg, rgba(22, 242, 179, 0.02), rgba(100,100,150,0));
        }

        .cursor-block-dot {
          display: inline-block;
          width: 8px;
          height: 16px;
          border-radius: 2px;
          background: #16f2b3;
          animation: blink 1s steps(2, start) infinite;
          box-shadow: 0 0 10px rgba(22,242,179,0.28);
        }
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }

        /* -------- ULTRA AURA HEADER -------- */

.aura-line {
  position: relative;
}

.aura-name {
  text-shadow:
    0 0 6px rgba(22,242,179,0.6),
    0 0 12px rgba(22,242,179,0.4),
    0 0 20px rgba(22,242,179,0.2);
  animation: auraPulse 3s ease-in-out infinite;
}

.aura-const {
  text-shadow:
    0 0 6px rgba(255,0,150,0.5),
    0 0 12px rgba(255,0,150,0.3);
}

.aura-brace {
  text-shadow:
    0 0 6px rgba(100,100,255,0.4);
}

@keyframes auraPulse {
  0% { text-shadow:
      0 0 6px rgba(22,242,179,0.6),
      0 0 12px rgba(22,242,179,0.4),
      0 0 20px rgba(22,242,179,0.2);
  }
  50% { text-shadow:
      0 0 10px rgba(22,242,179,0.9),
      0 0 18px rgba(22,242,179,0.6),
      0 0 30px rgba(22,242,179,0.4);
  }
  100% { text-shadow:
      0 0 6px rgba(22,242,179,0.6),
      0 0 12px rgba(22,242,179,0.4),
      0 0 20px rgba(22,242,179,0.2);
  }
}
/* ---------- NAME AURA ---------- */
.aura-name {
  text-shadow:
    0 0 6px rgba(255, 180, 0, 0.7),
    0 0 12px rgba(255, 120, 0, 0.4);
}

/* ---------- RESULT AURA ---------- */
.aura-result {
  text-shadow:
    0 0 6px rgba(22, 242, 179, 0.8),
    0 0 14px rgba(22, 242, 179, 0.5);
}

/* ---------- HERO NAME AURA ---------- */
.aura-hero-name {
  text-shadow:
    0 0 6px rgba(255, 0, 128, 0.6);
}


      `}</style>
    </section>
  );
}
