import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ containerClass }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const titleAnimation = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "100 bottom",
                    end: "center bottom",
                    toggleActions: "play none none reverse",
                },
            });

            titleAnimation.to(
                ".animated-word",
                {
                    opacity: 1,
                    transform:
                        "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
                    ease: "power2.inOut",
                    stagger: 0.02,
                },
                0
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className={`animated-title ${containerClass}`}>
            <div className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3">
                <p
                    id="animated-text-1"
                    className="animated-word font-text-unique text-4xl text-red-100 tracking-wide opacity-0 select-none"
                >
                    Откройте для себя новую историю <br /> уникального мира
                </p>
                <p
                    id="animated-text-2"
                    className="animated-word mt-5 mx-auto text-balance font-default-regular text-xl text-blue-50 opacity-0 max-w-2xl select-none"
                >
                    В Древней Руси, где есть современные технологии — от
                    кибернетических имплантатов и плазменного оружия до
                    экзоскелетов и гигантских роботов — богатырь-полукровка по
                    имени Киберслав пытается распутать жестокое преступление,
                    чтобы узнать, кому помешала княжеская семья — озлобленному
                    люду или нечисти, заполонившей местные леса.
                </p>
            </div>
        </div>
    );
};

export default AnimatedTitle;
