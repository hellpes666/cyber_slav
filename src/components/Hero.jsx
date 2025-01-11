import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { Button } from "../components";
import { TiLocationArrow } from "react-icons/ti";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const animateElement = "#img-frame";

    useGSAP(() => {
        gsap.set(animateElement, {
            clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
            borderRadius: "0% 0% 40% 10%",
        });
        gsap.from(animateElement, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            borderRadius: "0% 0% 0% 0%",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: animateElement,
                start: "center center",
                end: "bottom center",
                scrub: true,
            },
        });
    });

    return (
        <div className="relative h-dvh w-screen overflow-x-hidden" id="hero">
            {/* loading */}

            {/* content */}

            <div
                className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg mask-clip-path"
                id="img-frame"
            >
                <img
                    src="/img/hero.jpg"
                    alt=""
                    className="object-fit object-cover size-full"
                />

                <h1 className="font-title hero-heading absolute bottom-5 right-5 z-40 text-white-100">
                    начнем
                </h1>
            </div>
            <h1 className="font-title hero-heading absolute bottom-5 right-5 text-red-100">
                начнем
            </h1>

            <div className="absolute left-0 top-12 z-40 size-full">
                <div className="mt-24 px-5 sm:px-10">
                    <h1 className="font-title hero-heading text-white-100">
                        Узрите
                    </h1>

                    <p className="mt-5 mb-5 max-w-64 font-text-unique text-white-100 text-xl">
                        Новую и по истине красивую картину
                    </p>

                    <Button
                        id="watch-trailer"
                        title="взглянуть"
                        rightIcon={<TiLocationArrow />}
                        containerClass="bg-red-100 flex-center gap-1"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
