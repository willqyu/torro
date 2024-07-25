import { useRevealOnView } from "@/app/_lib/animConstants";
import { sanSerif, serifBody } from "@/app/_lib/font"
import { motion } from "framer-motion";

export default function ValueTag({
    value, tagline, className
} : {
    value: string, tagline: string, className?: string
}) {
    const ref = useRevealOnView();
    return (
        <motion.div 
            className={className + " p-7 " + serifBody.className}
            ref={ref}
            layout
        >
            <h1 className={"inline text-3xl text-secondary " + sanSerif.className}>
                {value}
            </h1>
            <p className={"mt-[8em] text-2xl " + sanSerif.className}>{tagline}</p>
        </motion.div>
    )
}