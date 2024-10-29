"use client";

import Hero from "@/components/hero";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function Home() {
    return (
        <>
            <div className=" relative">
                <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]">
                    <BackgroundGradientAnimation />
                </div>
                <div className="">
                    <Hero />
                </div>
            </div>
        </>
    );
}
