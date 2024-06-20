import Link from "next/link";
import { motion, useAnimate } from "framer-motion"
import { useEffect, useState } from "react";
import { serifLogo } from "@/app/_lib/font"
import { easing1 } from "../_lib/animConstants";

function NavbarItem({url, text, delay} : { url : string, text: string, delay: number}) {
    
    const item = {
        initial: { opacity: 0, translateY: -70 },
        animate: { opacity: 1, translateY: 0 }
    }

    return (
        <motion.div
            initial= "initial"
            animate= "animate"
            variants={item}
            transition= {{ duration: 0.7, ease: [.11,.37,0,1], delay: delay}}
            className="p-5 group"
        >
            <Link 
            href={"/"}
            className="
                text-white text-center
                "
            >
                {text}
            </Link>
            <div className="h-[5px] bg-primary w-0 group-hover:w-[100%] transition"></div>
        </motion.div>
        
    )
}

export default function Navbar({delay} : {delay : number}) {

    const [isVisible, setIsVisible] = useState(true);
    const [isGreen, setIsGreen] = useState(false);
    const [scope, animate] = useAnimate();
    const [lastScroll, setLastScroll] = useState(0);

    const hide = async () => {
        await animate(scope.current, 
            { "y" : "-110%" },
            { ease: easing1, duration: 0.5 }
        )
    }

    const reveal = async () => {
        await animate(scope.current,
            { "y" : 0  },
            { ease: easing1, duration: 0.5 }
        )
    }

    const handleScroll = () => {
        const scroll = window.scrollY;
         
        const shouldBeVisible = scroll < lastScroll;
        setLastScroll(scroll);

        const shouldBeGreen = scroll >= screen.height * 0.1;
        setIsGreen(shouldBeGreen);

        // console.log(scroll, shouldBeGreen);

        if (shouldBeVisible === isVisible) return;
        setIsVisible(shouldBeVisible);
        if (shouldBeVisible) {
            reveal()
        } else {
            hide()
        } 
      };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isVisible, handleScroll])
    
    useEffect(() => {
        const scroll = window.scrollY;
        const shouldBeGreen = scroll >= screen.height * 0.1;
        setIsGreen(shouldBeGreen);
    }, [])

    const stagger = 0.3

    // useEffect(() => {
    //     handleScroll()
    // }, []);

    return (
        <motion.div 
            className={`
                fixed min-w-full flex justify-center transition-colors duration-500 ${isGreen ? "bg-primary" : ""}
            `}
            ref={scope}
        >
            <div className="flex min-h-[5em] w-[90%] items-center justify-between
            ">
                <motion.h1 
                    className={`
                    text-4xl tracking-wider text-white text-center
                    ` + serifLogo.className}
                    initial={{ opacity: 0, translateY: -70 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition = {{
                        delay: delay
                    }}
                >
                TORRO
                </motion.h1>
                <motion.div className="flex "
                    transition = {{
                        delay: delay
                    }}
                >
                    <NavbarItem url="/" text="About Us" delay={delay}></NavbarItem>
                    <NavbarItem url="/" text="Contact" delay={delay+stagger}></NavbarItem>
                </motion.div>
            </div>
        </motion.div>
    )
}