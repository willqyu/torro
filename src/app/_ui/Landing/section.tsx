import { useRevealOnView } from "@/app/_lib/animConstants";
import { serifBody, sanSerif, serifLogo } from "@/app/_lib/font";
import { motion } from "framer-motion";



export function InfoTag({id, tag, className=""} : {id: number, tag: string, className?: string}) {
    return (
        <motion.div className={`
            flex items-center ` + className}
        >
            <div className="
                flex justify-center items-center
                border-r-2 border-b-2 border-primary rounded-full w-16 h-16 my-6
                text-center 
            ">
                <h1 className={"align-middle leading-none text-1xl " + sanSerif.className}>{String(id).padStart(2, '0')}</h1>
            </div>
            <h1
                className={"mx-6 " + sanSerif.className}
            >{tag}</h1>
        </motion.div>
    )
}

export function SectionHeading({
    children,
    className=""
  }: Readonly<{
    children: React.ReactNode;
    className?: string
  }>) {
    

    return (
        <motion.h1
            className={"text-6xl mt-4 mb-10 "+ className}
        >{children}</motion.h1>
    )
  }

export function SectionParagraph({
    children,
    className
  }: Readonly<{
    children: React.ReactNode;
    className?: string
  }>) {
    return (
        <p className={className + " text-left text-1xl " + sanSerif.className}>
            {children}
        </p>
    )
}

export default function Section({
    children,
    className=""
  }: Readonly<{
    children: React.ReactNode;
    className?: string
  }>) {

    const scope = useRevealOnView();
    return (
        <div
            className={`
                px-40 min-w-full mt-10 py-20
                box-border z-10
                flex flex-col justify-center ` + className}
        >
            <motion.div 
                className="z-10 relative"
                ref={scope}>
                {children}
            </motion.div>
        </div>
    )
}