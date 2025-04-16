import {motion} from "motion/react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import LocomotiveScroll from "locomotive-scroll";

gsap.registerPlugin(ScrollTrigger);

const Car = ({data} : {data : { id : number ,car : string , shadow : string , tyre : string}}) => {
    const car = useRef(null);
    const par = useRef(null);
    const tyreA = useRef(null);
    const tyreB = useRef(null);
    console.log(data.id , data.id === 1);
    const left = data.id === 1 ? "11%" : "14%";
    const right = data.id === 1 ? "15.5%" : "19%";

    useEffect(() => {
        const locomotiveScroll = new LocomotiveScroll();
        return () => locomotiveScroll.destroy();
    }, []);

    useGSAP(() => {
        const gtl = gsap.timeline({
            scrollTrigger: {
                trigger: par.current,   
                scroller :"body",
                start: "top 0%",
                end : "top -120%",
                scrub: 2,           
                pin : true,
            }
        })
        gtl.to(car.current, {
            x : "0%",
        }, "abc")
        .to(tyreA.current, {
            rotate : -360
        },"abc")
        .to(tyreB.current, {
            rotate : -360
        },"abc")
        ;
    })
    return (
        <motion.div
            ref={par}
            className="relative h-screen w-screen overflow-hidden bg-gradient-to-t from-gray-700/60 via-black/40 to-white">
            <div className="text absolute left-1/2 -translate-x-1/2 max-md:top-[8%] max-sm:top-[12%] md:-top-[12%] text-[26vw] font-bold">
                R{data.id}T
            </div>
            <motion.div 
                style={{x : "100%"}} 
                ref={car} 
                className="relative top-40"
            >
                <img src={data.car} className="relative w-full" alt="" /> 
                <img src={data.shadow} className="absolute bottom-0" alt="" /> 
                <motion.img
                    style={{left}}
                    src={"/tyre1.PNG"} ref={tyreB} className={`absolute bottom-[6%] origin-center h-[42%]`} alt="" 
                />
                <motion.img
                    style={{right}}
                    src={"/tyre1.PNG"} ref={tyreA} className={`absolute bottom-[6%] origin-center h-[42%]`} alt="" 
                />
            </motion.div>
        </motion.div>
    )
}

export default Car