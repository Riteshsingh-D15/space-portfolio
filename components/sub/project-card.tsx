import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { getAssetPath } from "@/lib/utils";

type ProjectCardProps = {
  src: string;
  title: string;
  subtitle?: string;
  date?: string;
  description: string;
  tags?: readonly string[];
  link: string;
  deployLink?: string;
};

export const ProjectCard = ({
  src,
  title,
  subtitle,
  date,
  description,
  tags,
  link,
  deployLink,
}: ProjectCardProps) => {
  return (
    <div className="relative flex flex-col justify-between overflow-hidden rounded-xl shadow-xl border border-gray-300 dark:border-[#2A0E61] bg-white/50 dark:bg-[#0300145c] backdrop-blur-md transition-all duration-300 hover:border-[#7042f8] hover:shadow-[#7042f8]/20 flex-1">
      <div>
        <div className="relative w-full h-[220px] overflow-hidden">
          <Image
            src={getAssetPath(src)}
            alt={title}
            fill
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          {date && (
            <span className="absolute top-3 right-3 bg-[#f2f3f3] dark:bg-[#030014]/80 backdrop-blur-md border border-[#7042f888] text-cyan-700 dark:text-cyan-300 text-xs px-3 py-1 rounded-full font-medium">
              {date}
            </span>
          )}
        </div>

        <div className="p-5">
          <h1 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{title}</h1>
          {subtitle && (
            <p className="text-xs text-purple-800 dark:text-purple-300 font-medium mb-3">
              {subtitle}
            </p>
          )}

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2 py-0.5 rounded-full bg-[#7042f81a] border border-[#7042f840] text-purple-700 dark:text-purple-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            {description}
          </p>
        </div>
      </div>

      <div className="p-5 pt-0 flex flex-wrap gap-4">
        {link && (
          <Link
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-700 dark:text-cyan-400 hover:text-cyan-700 dark:hover:hover:text-cyan-300 transition duration-150"
          >
            <FaGithub className="w-4 h-4" />
            <span>View on GitHub</span>
            <FaExternalLinkAlt className="w-3 h-3 ml-1" />
          </Link>
        )}
        {deployLink && (
          <Link
            href={deployLink}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-xs font-semibold text-purple-700 dark:text-purple-400 hover:text-purple-800 dark:hover:hover:text-purple-300 transition duration-150"
          >
            <FaExternalLinkAlt className="w-4 h-4" />
            <span>Live Demo</span>
          </Link>
        )}
      </div>
    </div>
  );
};

