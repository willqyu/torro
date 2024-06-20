import { useRevealOnView } from "@/app/_lib/animConstants";
import { serifBody, sanSerif, serifLogo } from "@/app/_lib/font";
import { motion } from "framer-motion";



export function InfoTag({id, tag} : {id: number, tag: string}) {
    return (
        <motion.div className="
            flex items-center
        "
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
    children
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    

    return (
        <motion.h1
            className="text-6xl mt-4 mb-10"
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
    children
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const scope = useRevealOnView();
    return (
        <div
            className="
                px-40 min-w-full my-10
                box-border z-10
                flex flex-col justify-center
            "
        >
            <motion.div ref={scope}>
                {children}
            </motion.div>
        </div>
    )
}