import Image from "next/image";
import Intro_Button from "./ui/Landing/intro_button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center from-zinc-200 pb-6 pt-8 backdrop-blur-2xl ">
          <Image
            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/torro_clear.png"
            alt="Next.js Logo"
            width={180}
            height={40}
            priority
          />
        </p>
        
      </div>
      <div className="fixed -z-10 w-full ">
        <video autoPlay muted loop className="bg-cover bg-center w-full">
          <source src="/city.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="flex justify-between">
        <Intro_Button url="investors" />
        <Intro_Button url="families" />
        <Intro_Button url="visitors" />
      </div>
    </main>
  );
}
