import { HeroContent } from "@/components/sub/hero-content";
import { getAssetPath } from "@/lib/utils";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover -z-20 hidden dark:block"
      >
        <source src={getAssetPath("/videos/blackhole.webm")} type="video/webm" />
      </video>
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover -z-20 dark:hidden block mix-blend-darken [mask-image:linear-gradient(to_top,white_60%,transparent_100%)]"
      >
        <source src={getAssetPath("/videos/ezgif-1b8352cf196aa760.webm")} type="video/webm" />
      </video>

      <HeroContent />
    </div>
  );
};
