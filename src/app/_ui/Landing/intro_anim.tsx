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
        isVisible && <motion.div 
            className="
                fixed top-0 left-0 z-[100] 
                min-h-screen min-w-full
                bg-gradient-to-bl from-gray-700 via-gray-900 to-black
            "
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1.5,  delay: delay }}
            onAnimationComplete={endAnimation}    
        >  
            <div className="flex z-100 flex-wrap min-h-screen justify-around items-center">
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: .2,  delay: delay }}
                >
                    <h1 
                        className={`
                        z-100 text-8xl text-white text-center border-white
                        ` + serifLogo.className}
                    >
                    TORRO
                    </h1>
                    <motion.div
                        className="z-100 overflow-hidden inline-block border-b-4"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: delay, ease: [.11,.37,0,1] }}
                    >
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>                  
    )

}