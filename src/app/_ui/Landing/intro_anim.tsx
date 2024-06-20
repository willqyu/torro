"use client"
import { frame, motion } from "framer-motion"
import { useState } from "react";

import { serifLogo } from "@/app/_lib/font"

export default function Intro_Anim({delay} : {delay : number}) {
    const [isVisible, setIsVisible] = useState(true);

    const endAnimation = () => {
        setIsVisible(false);
    };

    return (
        isVisible && <div className="fixed z-100 min-h-screen min-w-full">  
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 1,  delay: delay }}
                onAnimationComplete={endAnimation}
                className="fixed z-100 min-h-screen min-w-full bg-primary_dark">
            </motion.div>

            <div className="flex flex-wrap min-h-screen justify-around items-center">
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: .2,  delay: delay }}
                >
                    <h1 
                        className={`
                        text-8xl text-white text-center border-white
                        ` + serifLogo.className}
                    >
                    TORRO
                    </h1>
                    <motion.div
                        className="overflow-hidden inline-block border-b-4"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: delay, ease: [.11,.37,0,1] }}
                    >
                    </motion.div>
                </motion.div>
            </div>
        </div>                  
    )

}