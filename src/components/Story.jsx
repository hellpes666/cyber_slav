import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
    useGSAP(() => {
        const animateText = (selector, opacity, end, stagger) => {
            gsap.to(selector, {
                opacity: opacity,
                scrollTrigger: {
                    start: "center center",
                    end: end,
                    scrub: 0.5,
                },
                stagger: stagger,
            });
        };

        animateText("#animated-text-1", 1, "+=100 center", 1);
        animateText("#animated-text-2", 0.5, "+=150 center", 1);
    }, []);

    useGSAP(() => {
        gsap.to("#clip", {
            opacity: 1,
            scrollTrigger: {
                start: "center center",
                end: "+=1000 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            },
        });
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "center center",
                end: "+=800 center",
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
                    <p
                        id="animated-text-1"
                        className="font-text-unique text-2xl text-blue-50 tracking-wide opacity-0"
                    >
                        Откройте для себя новую историю уникального мира
                    </p>
                    <p
                        id="animated-text-2"
                        className="text-center font-default-regular text-lg text-blue-50 opacity-0 max-w-2xl"
                    >
                        В Древней Руси, где есть современные технологии — от
                        кибернетических имплантатов и плазменного оружия до
                        экзоскелетов и гигантских роботов — богатырь-полукровка
                        по имени Киберслав пытается распутать жестокое
                        преступление, чтобы узнать, кому помешала княжеская
                        семья — озлобленному люду или нечисти, заполонившей
                        местные леса.
                    </p>
                </div>
            </div>
            <div className="h-dvh w-screen opacity-0" id="clip">
                <div className="mask-clip-path about-image">
                    <img
                        src="/img/meet.png"
                        alt="Background"
                        className="absolute left-0 top-0 size-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Story;
