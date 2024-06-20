import { BezierDefinition, useAnimate, useInView } from "framer-motion";
import { useEffect, useState } from "react";

export const easing1: BezierDefinition = [.11,.37,0,1]

export function useRevealOnView() {
    const [scope, animate] = useAnimate()
    const [isHidden, setHidden] = useState(true);
    const isInView = useInView(scope);
    useEffect(() => {
        if (isInView === isHidden) return
        if (isInView) {
            animate(scope.current, { opacity: 1, y: 0 } , { delay: .2, duration: .8 })
        } else {
            animate(scope.current, { opacity: 0, y: -10}, )
        }
        setHidden(isInView);
    }, [isInView])

    return scope
}

export function useCountOnView(target: number) {
    const [value, setValue] = useState(0);
    const [isHidden, setHidden] = useState(true);
    const [scope, animate] = useAnimate()
    const isInView = useInView(scope);
    useEffect(() => {
        if (isInView === isHidden) return
        if (isInView) {
            animate(0, target, {
                onUpdate: latest => {
                    setValue(Math.round(latest));
                }, 
                delay: .2,
                duration: 1.5,
                ease: easing1
            })
        } else {
            setValue(0);
            // animate(scope.current, { opacity: 0, y: -10}, )
        }
        setHidden(isInView);
    }, [isInView])

    return {scope, value}
}
    