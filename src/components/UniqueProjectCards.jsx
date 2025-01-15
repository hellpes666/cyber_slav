import { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

const MouseTrackerContainer = ({ className = "", children }) => {
    const [transformStyle, setTransformStyle] = useState("");
    const itemRef = useRef();

    const handleOnMouseMove = (e) => {
        if (!itemRef.current) return;

        const { left, top, width, height } =
            itemRef.current.getBoundingClientRect();

        const relativeX = (event.clientX - left) / width;
        const relativeY = (event.clientY - top) / height;

        const degreeX = (relativeX - 0.5) * 25;
        const degreeY = (relativeY - 0.5) * -25;

        const newTransform = `perspective(700px) rotateX(${degreeX}deg) rotateY(${degreeY}deg) scale3d(0.90, 0.90, 0.90)`;

        setTransformStyle(newTransform);
    };

    const handleOnMouseLeave = () => {
        setTransformStyle("");
    };

    return (
        <div
            className={`${className}`}
            ref={itemRef}
            onMouseMove={handleOnMouseMove}
            onMouseLeave={handleOnMouseLeave}
            style={{ transform: transformStyle }}
        >
            {children}
        </div>
    );
};

const ProjectCard = ({ src, title, description }) => {
    return (
        <div className="relative size-full">
            <video
                src={src}
                loop
                muted
                autoPlay
                className="absolute left-0 top-0 size-full object-cover object-center"
            />
            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
                <div className="">
                    <h1 className="font-title text-6xl tracking-wider">
                        {title}
                    </h1>
                    {description && (
                        <p className="mt-3 max-w-64 text-xs md:text-base">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

const UniqueProjectCards = () => {
    return (
        <section id="unique" className="bg-black pb-52">
            <div className="container mx-auto px-3 md:px-10">
                <div className="px-5 py-32">
                    <p className="font-text-unique text-2xl text-blue-50 tracking-wide select-none">
                        Это вам не шубу в трусы заправлять
                    </p>
                    <p className="max-w-md mt-5 text-balance font-default-regular text-xl text-blue-50 select-none0 opacity-50">
                        Это крутейший подростковый эпос с обилием экшена в самом
                        необычном сеттинге, что ты можешь вспомнить.
                    </p>
                </div>
                <MouseTrackerContainer className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
                    <ProjectCard
                        src="videos/footer.mp4"
                        title={<>Русы</>}
                        description="Весьма прилежный народ."
                    />
                </MouseTrackerContainer>

                <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
                    <MouseTrackerContainer className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
                        <ProjectCard
                            src="videos/footer.mp4"
                            title={<>Русы</>}
                            description="Весьма прилежный народ."
                        />
                    </MouseTrackerContainer>
                    <MouseTrackerContainer className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
                        <ProjectCard
                            src="videos/footer.mp4"
                            title={<>Русы</>}
                            description="Весьма прилежный народ."
                        />
                    </MouseTrackerContainer>
                    <MouseTrackerContainer className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
                        <ProjectCard
                            src="videos/footer.mp4"
                            title={<>Русы</>}
                            description="Весьма прилежный народ."
                        />
                    </MouseTrackerContainer>

                    <MouseTrackerContainer className="bento-tilt_2">
                        <div className="flex size-full flex-col justify-between bg-red-100 p-5">
                            <h1 className="bento-title max-w-64 text-white-100">
                                Больше новостей
                            </h1>

                            <TiLocationArrow className="m-5 scale-[5] self-end" />
                        </div>
                    </MouseTrackerContainer>
                    <MouseTrackerContainer className="bento-tilt_2">
                        <img
                            src="img/fighter.webp"
                            className="size-full object-cover object-center"
                        />
                    </MouseTrackerContainer>
                </div>
            </div>
        </section>
    );
};

export default UniqueProjectCards;
