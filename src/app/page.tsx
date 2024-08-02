"use client"
import Intro_Button from "./_ui/Landing/intro_button";
import Intro_Anim from "./_ui/Landing/intro_anim";
import Section, { SectionHeading, InfoTag, SectionParagraph } from "./_ui/Landing/section";
import Intro_Video from "./_ui/Landing/intro_video";
import { motion } from "framer-motion";
import Navbar from "./_ui/navbar";
import Link from "next/link";
import Image from 'next/image';

import { sanSerif, serifBody, serifLogo } from "./_lib/font";

import { easing1 } from "./_lib/animConstants";
import TickerTag, {Ticker} from "./_ui/Landing/ticker";
import ValueTag from "./_ui/Landing/values_card";
import BitcoinPrice from "./_ui/Landing/bitcoin";



export default function Home() {
  const introDelay1 = 2;
  const introDelay2 = 2.5;
  return (
    <main className="relative min-h-screen min-w-full overflow-y-hidden">
      
      <Navbar delay={introDelay2}></Navbar>
      <Intro_Video></Intro_Video>
      <div className="
        min-h-screen 
        flex flex-col gap-y-4 content-center items-center justify-center
        ">
        <motion.div 
          className="absolute min-h-[60%] -z-10"
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
      <motion.div 
        className="relative flex justify-center"
        initial={{ translateY: -70 }}
        animate={{ translateY: -90 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
          easings: "easeOut"
        }}
      >
        <a href="#intro-anchor">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
          </svg>
        </a>
      </motion.div>
      
      <Section>
        <div id="intro-anchor"></div>        
        <InfoTag id={1} tag="OVERVIEW"></InfoTag>
        <SectionHeading>About Us</SectionHeading>
        
        <SectionParagraph className="mb-10">
          Torro Assets is a liquid directional cryptocurrency trading fund. 
          <br></br><br></br>
          We are structured to offer access to both foundational and emerging digital assets. Recognising the proliferation of blockchain use-cases and heightened institutional and retail adoption, Torro Assets is purposefully positioned to capitalise on this growth. 
Contact us to find out about our strategies and how you can join the Torro community.

        </SectionParagraph>

        {/* <div className="container mt-10">
          <BitcoinPrice />
        </div> */}
        
        <div className="divide-y-2 divide-primary">

          <TickerTag suffix="%" tag="Annualised Return" target={91}/> 

          <div className={"py-10 flex items-center justify-between " + serifLogo.className}>
            <h1 className={"flex items-center gap-3 whitespace-nowrap text-5xl text-gray-700 "}>
            $ <Ticker target={40} className="text-8xl text-gray-700 inline "/> Million +
            </h1>
            <h1 className={"text-3xl " + sanSerif.className}>Trading Volume</h1>
          </div>   

          <TickerTag suffix="%" tag="Annualised Volatility" target={8.95}/>

        </div>
      </Section>

      <Section className="bg-primary">
        <InfoTag id={2} tag="CORE VALUES" className="text-white"></InfoTag>
        <SectionHeading className="text-white">Our Guiding Principles</SectionHeading>
        <div className="mb-20 mt-36 grid grid-cols-2 divide-x divide-y divide-gray-200 border">
          <ValueTag
              value="Transformation" 
              tagline="Our belief in cryptocurrency's transformative power"
              className="bg-white text-secondary"
          />
          <ValueTag
              value="Ownership" 
              tagline="Trust forms our bedrock"
              className="bg-white text-secondary"
          />
          <ValueTag
              value="Resourcefulness" 
              tagline="Innovating through use of advanced strategies"
              className="bg-white text-secondary"
          />
          <ValueTag
              value="Reliablity" 
              tagline="Delivering consistent risk-adjusted results"
              className="bg-white text-secondary"
          />
          
          {/* <h1 className={"text-6xl tracking-wider w-min-full mt-16 text-center align-middle " + serifLogo.className}>TORRO</h1> */}
        </div>
          
      </Section>
      
      <Section>
        <InfoTag id={3} tag="REPORTING"></InfoTag>
        <SectionHeading>Market Updates</SectionHeading>
        <SectionParagraph className="mb-10">
          Find our latest monthly market report here. Stay tuned for insight into our fund and the crypto landscape at large.
        </SectionParagraph>
        <iframe src="https://drive.google.com/embeddedfolderview?id=1_L_r8jgN-hxC_3ekClD1Z-rNp_5J2Cxf#grid" 
          className="w-full h-[400px]"></iframe>
      </Section>
      
      <Section>
        <InfoTag id={3} tag="JOIN THE MOVEMENT"></InfoTag>
        <SectionHeading>Contact Us</SectionHeading>
        <h1 className={"text-2xl " + sanSerif.className}>Investor Relations</h1>
        <a href="mailto:contact@torroassets.com">contact@torroassets.com</a>
        
        <h1 className={"text-2xl mt-8 " + sanSerif.className}>Follow us on</h1>
        <div className="flex gap-x-4 mt-4">
          <a href="https://x.com/TorroAssets" target="_blank">
            <Image
              priority
              src="x.svg"
              alt="Follow us on Twitter"
              width="30" height="30"
            /> 
          </a>
          <a href="https://www.linkedin.com/company/torro-assets/" target="_blank">
            <Image
              priority
              src="linkedin.svg"
              alt="Follow us on Linkedin"
              width="30" height="30"
            /> 
          </a>
        </div>
        
      </Section>

      <Intro_Anim delay={introDelay1}></Intro_Anim>
      
    </main>
  );
}
