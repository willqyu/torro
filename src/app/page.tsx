"use client"
import Intro_Button from "./_ui/Landing/intro_button";
import Intro_Anim from "./_ui/Landing/intro_anim";
import Section, { SectionHeading, InfoTag, SectionParagraph } from "./_ui/Landing/section";
import Intro_Video from "./_ui/Landing/intro_video";
import { motion } from "framer-motion";
import Navbar from "./_ui/navbar";
import Link from "next/link";
import { sanSerif, serifBody, serifLogo } from "./_lib/font";
import { easing1 } from "./_lib/animConstants";
import TickerTag, {Ticker} from "./_ui/Landing/ticker";
import ValueTag from "./_ui/Landing/values_card";



export default function Home() {
  const introDelay1 = 1.5;
  const introDelay2 = 2;
  return (
    <main className="relative min-h-screen min-w-full overflow-y-hidden">
      
      <Navbar delay={introDelay2}></Navbar>
      <Intro_Anim delay={introDelay1}></Intro_Anim>
      <Intro_Video></Intro_Video>

      <div className="
        min-h-screen 
        flex flex-col gap-y-4 content-center items-center justify-center
        ">
        <motion.div 
          className="absolute min-h-[60%] border-white border-t-2 border-b-2 -z-10"
          initial = {{ opacity: 0, width: 0 }}
          animate = {{ opacity: 1, minWidth: "50%" }}
          transition= {{ duration: 0.7, delay: introDelay2+.3, ease: easing1 }}
        ></motion.div>
        <motion.h1
          className= {"text-6xl text-white text-center " + serifBody.className}
          initial = {{ opacity: 0, translateY: -70 }}
          animate = {{ opacity: 1, translateY: 0 }}
          transition= {{ duration: 0.7, delay: introDelay2, ease: easing1 }}
        >
          Asset & <span></span>Crypto<br></br> Excellence
        </motion.h1>
        
        <motion.div
          className="flex flex-col justify-between mt-10 w-min-40"
          initial = {{ opacity: 0, translateY: 50 }}
          animate = {{ opacity: 1, translateY: 0 }}
          transition= {{ duration: 0.7, delay: introDelay2, ease: easing1 }}
        >
          <Intro_Button url="explore" />
          <Link 
            href="investors"
            className={
              "py-2 w-max-full rounded-full text-center text-white border-primary border-2 border-opacity-0 hover:border-opacity-100 transition "
              + serifBody.className
            }
          >
            Investors
          </Link>
        </motion.div>
      </div>
      <Section>
        <InfoTag id={1} tag="ABOUT US"></InfoTag>
        <SectionHeading>Overview</SectionHeading>
        <SectionParagraph className="mb-10">
          We believe the cryptocurrency derivatives market is
          experiencing rapid growth and presenting ample
          opportunities for savvy investors. 
          <br></br><span className={serifLogo.className}>Torro Assets</span> is strategically positioned to capitalise on this
          growth, leveraging its expertise in order flow analysis and
          volume profiling to generate superior returns for our
          investors.
        </SectionParagraph>
        
        <div className="divide-y-2 divide-primary">

          <TickerTag suffix="%" tag="Forecast 3 Year Return" target={135}/> 

          <div className={"py-10 flex items-center justify-between " + serifLogo.className}>
            <h1 className={"flex items-center gap-3 whitespace-nowrap text-5xl text-gray-700 "}>
            $ <Ticker target={40} className="text-8xl text-gray-700 inline "/> Million +
            </h1>
            <h1 className={"text-3xl " + sanSerif.className}>Trading Volume</h1>
          </div>   

          <TickerTag  suffix="%" tag="Year to Date Return" target={65}/>

        </div>
      </Section>

      <Section>
        <InfoTag id={2} tag="CORE VALUES"></InfoTag>
        <SectionHeading>Our Guiding Principles</SectionHeading>
        <div className="my-20 grid grid-cols-2 gap-5">
          <ValueTag
              value="Transformation" 
              tagline="Our belief in cryptocurrency's transformative power"
              className="bg-gradient-to-r from-teal-500 to-green-600"
          />
          <ValueTag
              value="Ownership" 
              tagline="Trust forms our bedrock"
              className="bg-gradient-to-r from-teal-700 to-green-300"
          />
          <ValueTag
              value="Resourcefulness" 
              tagline="Innovating through use of advanced strategiees"
              className="bg-gradient-to-r from-sky-700 to-teal-500"
          />
          <ValueTag
              value="Reliablity" 
              tagline="Delivering consistent risk-adjusted results"
              className="bg-gradient-to-r from-teal-500 to-green-500"
          />
          <ValueTag
              value="Opportunity" 
              tagline="Data-driven approach to capitalise market moves & volatility"
              className="bg-gradient-to-r from-teal-500 to-emerald-600"
          />
          
          {/* <h1 className={"text-6xl tracking-wider w-min-full mt-16 text-center align-middle " + serifLogo.className}>TORRO</h1> */}
        </div>
          
      </Section>
      
      
      
    </main>
  );
}
