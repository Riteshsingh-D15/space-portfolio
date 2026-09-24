"use client";

import React from "react";
import Link from "next/link";
import {
  FaGraduationCap,
  FaCertificate,
  FaLaptopCode,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  CERTIFICATIONS_DATA,
  EDUCATION_DATA,
  PERSONAL_INFO,
  TRAINING_AND_EXPERIENCE,
} from "@/constants";

export const Education = () => {
  return (
    <section id="education" className="flex flex-col items-center justify-center py-20 px-6 md:px-16 z-[20]">
      {/* Education Header */}
      <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-cyan-700 dark:from-purple-500 dark:to-cyan-500 py-10 text-center">
        Education & Training
      </h2>

      {/* Grid: Education + Training */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Education Column */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 rounded-xl bg-purple-900/30 border border-purple-500/40 text-purple-700 dark:text-purple-400">
              <FaGraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">
              Academic Background
            </h3>
          </div>

          {EDUCATION_DATA.map((edu, idx) => (
            <div
              key={`${edu.institution}-${idx}`}
              className="relative p-6 rounded-2xl border border-gray-300 dark:border-[#2A0E61] bg-white/70 dark:bg-[#03001477] backdrop-blur-md transition-all duration-300 hover:border-[#7042f8] hover:shadow-lg hover:shadow-purple-900/20"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  {edu.institution}
                </h4>
                <span className="text-xs px-3 py-1 rounded-full bg-[#7042f826] border border-[#7042f855] text-cyan-700 dark:text-cyan-300 font-semibold">
                  {edu.score}
                </span>
              </div>

              <p className="text-sm text-purple-800 dark:text-purple-300 font-medium mb-3">
                {edu.degree}
              </p>

              <div className="flex flex-wrap gap-4 text-xs text-gray-600 dark:text-gray-400 mb-3">
                <span className="flex items-center gap-1.5">
                  <FaCalendarAlt className="text-purple-700 dark:text-purple-400" />
                  {edu.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <FaMapMarkerAlt className="text-cyan-700 dark:text-cyan-400" />
                  {edu.location}
                </span>
              </div>

              {edu.details && (
                <ul className="space-y-1.5 mt-3 text-xs text-gray-700 dark:text-gray-300">
                  {edu.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <FaCheckCircle className="text-purple-700 dark:text-purple-400 w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Training & Certifications Column */}
        <div className="flex flex-col gap-6">
          {/* Summer Training */}
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 rounded-xl bg-cyan-900/30 border border-cyan-500/40 text-cyan-700 dark:text-cyan-400">
              <FaLaptopCode className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">
              Technical Training
            </h3>
          </div>

          {TRAINING_AND_EXPERIENCE.map((train, idx) => (
            <div
              key={`${train.title}-${idx}`}
              className="p-6 rounded-2xl border border-gray-300 dark:border-[#2A0E61] bg-white/70 dark:bg-[#03001477] backdrop-blur-md transition-all duration-300 hover:border-[#7042f8] hover:shadow-lg hover:shadow-cyan-900/20"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  {train.title}
                </h4>
                <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/40 text-cyan-700 dark:text-cyan-300 font-semibold">
                  {train.organization}
                </span>
              </div>

              <div className="flex flex-wrap gap-4 text-xs text-gray-600 dark:text-gray-400 mb-3">
                <span className="flex items-center gap-1.5">
                  <FaCalendarAlt className="text-purple-700 dark:text-purple-400" />
                  {train.period}
                </span>
              </div>

              <ul className="space-y-2 mt-3 text-xs text-gray-700 dark:text-gray-300">
                {train.highlights.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <FaCheckCircle className="text-cyan-700 dark:text-cyan-400 w-3.5 h-3.5 mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {"certificateLink" in train && Boolean((train as { certificateLink?: string }).certificateLink) && (
                <div className="pt-3 border-t border-gray-200 dark:border-gray-800 mt-3">
                  <Link
                    href={(train as { certificateLink: string }).certificateLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-700 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors duration-150"
                  >
                    <span>View Training Certificate</span>
                    <FaExternalLinkAlt className="w-3 h-3" />
                  </Link>
                </div>
              )}
            </div>
          ))}

          {/* Certifications Section */}
          <div id="certifications" className="flex items-center gap-3 mt-4 mb-2">
            <div className="p-3 rounded-xl bg-purple-900/30 border border-purple-500/40 text-purple-700 dark:text-purple-400">
              <FaCertificate className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">
              Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CERTIFICATIONS_DATA.map((cert, idx) => (
              <div
                key={`${cert.title}-${idx}`}
                className="p-5 rounded-2xl border border-gray-300 dark:border-[#2A0E61] bg-white/70 dark:bg-[#03001477] backdrop-blur-md transition-all duration-300 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-900/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-semibold text-cyan-700 dark:text-cyan-400">
                      {cert.issuer}
                    </span>
                    {"date" in cert && cert.date && (
                      <span className="text-[11px] text-gray-500 dark:text-gray-400">
                        {cert.date}
                      </span>
                    )}
                  </div>
                  <h5 className="text-base font-bold text-slate-900 dark:text-white mb-3">
                    {cert.title}
                  </h5>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-[#7042f815] border border-[#7042f833] text-purple-700 dark:text-purple-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {"link" in cert && Boolean((cert as { link?: string }).link) ? (
                  <Link
                    href={(cert as { link: string }).link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-700 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors duration-150 pt-3 border-t border-gray-200 dark:border-gray-800/80"
                  >
                    <span>View Certificate</span>
                    <FaExternalLinkAlt className="w-3 h-3" />
                  </Link>
                ) : (
                  <div className="pt-3 border-t border-gray-200 dark:border-gray-800/80 text-[11px] text-gray-500 dark:text-gray-400 flex items-center justify-between">
                    <span>Certificate on record</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Soft Skills Showcase */}
          <div className="p-5 rounded-2xl border border-gray-300 dark:border-[#2A0E61] bg-white/70 dark:bg-[#03001477] backdrop-blur-md mt-2">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-3">
              Core Strengths & Soft Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {PERSONAL_INFO.softSkills.map((trait) => (
                <span
                  key={trait}
                  className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-purple-900/40 to-cyan-900/40 border border-purple-500/30 text-gray-800 dark:text-gray-200 font-medium"
                >
                  ✦ {trait}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
