"use client";
import { TypewriterEffectSmooth } from "../Components/uicomponents/GridBackgroundDemo";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { poppin } from "../constants";
import Button from "../Components/Button";
export function Hero() {
    const words = [
        {
            text: "I'm",
        },
        {
            text: "Currently working as",
        },
        {
            text: "Full Stack Developer.",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];
    return (
        <>
            <div className="flex flex-col items-center justify-center h-[40rem]  ">
                <p className={`${poppin.className} text-neutral-400 dark:text-neutral-200 text-base  font-normal sm:text-lg space letter mb-1`}>
                    Heyy! I{'\u0027'}m <span className={`text-white ${poppin.className} space text-lg  sm:text-xl`}>Rahul</span>
                </p>

                <TypewriterEffectSmooth words={words} />
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                   <Button/>
                </div>
            </div>
            <div className="w-full relative h-[40vh] flex-center animate-pulse">
                <ArrowDownwardIcon style={{ fontSize: '3rem' }} className="ani" />
            </div>
        </>
    );
}
