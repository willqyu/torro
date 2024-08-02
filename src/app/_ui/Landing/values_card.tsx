import { useRevealOnView } from "@/app/_lib/animConstants";
import { sanSerif, serifBody } from "@/app/_lib/font"
import { motion } from "framer-motion";

export default function ValueTag({
    value, tagline, className
} : {
    value: string, tagline: string, className?: string
}) {
    return (
        <motion.div 
            className={className + " flex flex-col justify-between p-7 " + serifBody.className}
            layout
        >
            <h1 className={"inline mt-[8em] mb-[2em] text-4xl text-secondary font-medium " + serifBody.className}>
                {value}
            </h1>
            <p className={" text-2xl " + sanSerif.className}>{tagline}</p>
        </motion.div>
    )
}