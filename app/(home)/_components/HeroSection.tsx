import { MovingBorderButton } from "@/components/ui/moving-border";
import Link from "next/link";
import { Title } from "@/app/(home)/_components/Title";

export default function HeroSection() {
  return (
    <div className="min-h-[60vh] flex items-center justify-between lg:gap-0 gap-14 lg:flex-row flex-col-reverse animate-move-up">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Nice to meet you! 👋
          <br />{" "}
          <span className="underline underline-offset-8 decoration-green-500">
            I&apos;m Khurram.
          </span>
        </h1>

        <p className="md:w-96 text-lg text-gray-300">
          Based in New York, I&apos;m a Fullstack developer passionate about
          building a modern web application that users love.
        </p>
        <div id="contact" />
        <Link
          href="mailto:khurramcali@gmail.com"
          className="inline-block group"
        >
          <Title text="Contact Me 📭" />
        </Link>
      </div>

      <div className="relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500" />
            <div className="w-32 h-32 rounded-full bg-indigo-500" />
          </div>

          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500" />
            <div className="w-32 h-32 rounded-full bg-green-500" />
          </div>

          <div className="glow absolute top-[40%] right-[50%] -z-10" />
        </div>
        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
          <MovingBorderButton
            borderRadius="0.5rem"
            className="p-3 font-semibold"
          >
            <p>📢 Available for Work</p>
          </MovingBorderButton>
        </div>
      </div>
    </div>
  );
}
