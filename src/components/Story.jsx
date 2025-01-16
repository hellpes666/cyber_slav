import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "center center",
                end: "+=800 center",
                opacity: 100,
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            },
        });

        clipAnimation.to(".mask-clip-path", {
            width: "100vw",
            height: "100vh",
            borderRadius: 0,
        });
    }, []);

    return (
        <div id="about" className="min-h-screen w-screen">
            <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
                <div className="px-5 py-16 text-center">
                    <AnimatedTitle
                        containerClass="mt-5 !text-black text-center"
                        title={
                            <>
                                Откройте для себя новую историю <br />{" "}
                                уникального мира
                            </>
                        }
                        subtitle={
                            <>
                                В Древней Руси, где есть современные технологии
                                — от кибернетических имплантатов и плазменного
                                оружия до экзоскелетов и гигантских роботов —
                                богатырь-полукровка по имени Киберслав пытается
                                распутать жестокое преступление, чтобы узнать,
                                кому помешала княжеская семья — озлобленному
                                люду или нечисти, заполонившей местные леса.
                            </>
                        }
                    />
                </div>
            </div>
            <div className="h-dvh w-screen" id="clip">
                <div className="mask-clip-path about-image">
                    <img
                        src="/img/meet.png"
                        alt="Background"
                        className="absolute left-0 top-0 size-full object-cover"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
};

export default Story;
