"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import { getAssetPath } from "@/lib/utils";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h2 className="Welcome-text text-[13px]">
            B.Tech CSE • Full Stack &amp; Software Developer
          </h2>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-2 mt-4 text-slate-900 dark:text-white max-w-[720px] w-auto h-auto leading-tight"
        >
          <span className="text-xl sm:text-2xl font-semibold text-cyan-600 dark:text-cyan-400">
            Hi, I&apos;m
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-400 drop-shadow-sm">
              Ritesh Singh
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mt-2">
            Engineering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-cyan-700 dark:from-purple-500 dark:to-cyan-500">
              high performance
            </span>{" "}
            software &amp; systems.
          </h2>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-700 dark:text-gray-300 my-5 max-w-[650px] leading-relaxed"
        >
          I&apos;m a Computer Science and Engineering student at Lovely Professional University, specializing in C++, Python, Full Stack Web Development (React.js, Node.js, Flask), and Machine Learning. Passionate about algorithmic problem solving and building robust applications.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-wrap gap-4 items-center"
        >
          <a
            href="#projects"
            className="py-3 px-6 button-primary text-center text-slate-900 dark:text-white cursor-pointer rounded-lg font-medium transition duration-200 hover:scale-105"
          >
            Explore Projects
          </a>
          <a
            href="https://www.linkedin.com/in/ritesh-singh-d15/"
            target="_blank"
            rel="noreferrer noopener"
            className="py-3 px-6 border border-[#7042f8] hover:bg-[#7042f822] text-center text-slate-900 dark:text-white cursor-pointer rounded-lg font-medium transition duration-200"
          >
            LinkedIn Profile
          </a>
          <a
            href="mailto:cosmo1rit@gmail.com"
            className="py-3 px-6 border border-gray-700 hover:border-gray-500 text-center text-gray-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white cursor-pointer rounded-lg font-medium transition duration-200"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src={getAssetPath("/hero-bg.svg")}
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none invert dark:invert-0 opacity-50 dark:opacity-100"
        />
      </motion.div>
    </motion.div>
  );
};
