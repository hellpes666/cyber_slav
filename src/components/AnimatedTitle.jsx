import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ containerClass, title, subtitle }) => {
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
                    {title}
                </p>
                <p
                    id="animated-text-2"
                    className="animated-word mt-5 mx-auto text-balance font-text-unique lowercase tracking-wider text-xl text-gray-200 opacity-0 max-w-2xl select-none"
                >
                    {subtitle}
                </p>
            </div>
        </div>
    );
};

export default AnimatedTitle;
