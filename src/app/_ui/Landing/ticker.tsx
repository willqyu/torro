import { motion } from "framer-motion";
import { useCountOnView } from "../../_lib/animConstants"
import { sanSerif, serifLogo } from "../../_lib/font";

export function Ticker(
    {target, className} : 
    {target: number, className: string}) {
    const ret = useCountOnView(target);
    return (
        <motion.p 
            ref={ret.scope}
            className={className}
        >{ret.value}</motion.p>
    )
}

export default function TickerTag(
    {prefix, suffix, tag, target} :
    {prefix?: string, suffix?: string, tag?: string, target: number}
) {
    return (
        <div className={"py-10 flex items-center justify-between " + serifLogo.className}>
            <h1 className={"text-3xl " + sanSerif.className}>{tag}</h1>
            <h1 className={"flex items-center gap-3 whitespace-nowrap text-5xl text-gray-700 "}>
            {prefix}<Ticker target={target} className={"text-8xl text-gray-700 inline "}/>{suffix}
            </h1>
        </div>
    )
}