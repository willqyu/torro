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
            className={className + " p-7 rounded-2xl " + serifBody.className}
            ref={ref}
            layout
        >
            <h1 className="inline text-3xl text-secondary">
                <span className="font-extrabold text-white">{value.slice(0, 1)}</span>{value.slice(1)}
            </h1>
            <p className={"text-white mt-10 text-l " + sanSerif.className}>{tagline}</p>
        </motion.div>
    )
}