import {motion} from "motion/react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import LocomotiveScroll from "locomotive-scroll";

gsap.registerPlugin(ScrollTrigger);

type data = {
    id : number ,car : string , shadow : string , tyre : string
}

const Car = ({data, data2} : {data : data , data2 : data}) => {
    const car = useRef(null);
    const par = useRef(null);
    const tyreA = useRef(null);
    const tyreB = useRef(null);
    const tyreA2 = useRef(null);
    const tyreB2 = useRef(null);
    const left = ["11%" , "14%"];
    const right = ["15.5%" , "19%"];

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
            x : "-50%",
        }, "abc")
        .to([tyreA.current, tyreA2.current, tyreB2.current , tyreB.current], {
            rotate : -630
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
                className="relative flex flex-row top-40 w-[200vw] "
            >
                <div className="relative w-1/2">
                    <img src={data.car} className="relative w-full" alt="" /> 
                    <img src={data.shadow} className="absolute bottom-0" alt="" /> 
                    <motion.img
                        style={{left : left[0]}}
                        src={"/tyre1.PNG"} ref={tyreB} className={`absolute bottom-[6%] origin-center h-[42%]`} alt="" 
                    />
                    <motion.img
                        style={{right : right[0]}}
                        src={"/tyre1.PNG"} ref={tyreA} className={`absolute bottom-[6%] origin-center h-[42%]`} alt="" 
                    />
                </div>
                <div className="relative w-1/2">
                    <img src={data2.car} className="relative w-full" alt="" /> 
                    <img src={data2.shadow} className="absolute bottom-0" alt="" /> 
                    <motion.img
                        style={{left : left[1]}}
                        src={"/tyre1.PNG"} ref={tyreB2} className={`absolute bottom-[6%] origin-center h-[42%]`} alt="" 
                    />
                    <motion.img
                        style={{right : right[1]}}
                        src={"/tyre1.PNG"} ref={tyreA2} className={`absolute bottom-[6%] origin-center h-[42%]`} alt="" 
                    />
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Car