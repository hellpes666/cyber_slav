import { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
const MapCard = ({ children, className, avaible, ref, id }) => {
    return (
        <div
            className={`rounded-lg bg-zinc-800 size-24 p-8 flex items-center justify-center relative transition-all duration-300 ${!avaible ? "blur-[2px]  hover:rotate-[5deg] cursor-not-allowed" : "hover:translate-y-1 cursor-pointer"}`}
            ref={ref}
            id={id}
        >
            {avaible && (
                <div className="absolute font-special text-xl text-nowrap bottom-24 text-red-100 tracking-widest">
                    WATCH NOW
                </div>
            )}
            <div className={`flex items-center justify-center`}>
                <div className={`z-10 rounded-full ${className}`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

const Map = () => {
    const MapCard_1_Ref = useRef("");
    const MapCard_2_Ref = useRef("");
    const MapCard_3_Ref = useRef("");
    const MapCard_4_Ref = useRef("");
    const MapCard_5_Ref = useRef("");
    const MapCard_6_Ref = useRef("");
    const MapCard_7_Ref = useRef("");
    const MapCard_8_Ref = useRef("");

    const MapCards = [
        {
            children: <>1 серия</>,
            className: "font-text-unique uppercase text-center",
            ref: MapCard_1_Ref,
            avaible: true,
        },
        {
            children: <>2 серия</>,
            className: "font-text-unique uppercase text-center",
            ref: MapCard_2_Ref,
            avaible: false,
        },
        {
            children: <>3 серия</>,
            className: "font-text-unique uppercase text-center",
            ref: MapCard_3_Ref,
            avaible: false,
        },
        {
            children: <>4 серия</>,
            className: "font-text-unique uppercase text-center",
            ref: MapCard_4_Ref,
            avaible: false,
        },
        {
            children: <>5 серия</>,
            className: "font-text-unique uppercase text-center",
            ref: MapCard_5_Ref,
            avaible: false,
        },
        {
            children: <>6 серия</>,
            className: "font-text-unique uppercase text-center",
            ref: MapCard_6_Ref,
            avaible: false,
        },
        {
            children: <>7 серия</>,
            className: "font-text-unique uppercase text-center",
            ref: MapCard_7_Ref,
            avaible: false,
        },
        {
            children: <>8 серия</>,
            className: "font-text-unique uppercase text-center",
            ref: MapCard_8_Ref,
            avaible: false,
        },
    ];

    return (
        <section id="unique" className="bg-black pb-52 text-white-100">
            <div className="container mx-auto px-3 md:px-10">
                <div className="px-5 py-16 text-center">
                    <AnimatedTitle
                        containerClass="mt-5 !text-black text-center"
                        title={<>Что же у нас происходит?</>}
                        subtitle={
                            <>
                                Работа команды не стоит на месте и мы делаем
                                реально годный аниме-сериал!
                            </>
                        }
                    />
                </div>

                <div className="flex gap-x-16 gap-y-8 max-w-xl flex-wrap mx-auto">
                    {MapCards &&
                        MapCards.map((item, index) => (
                            <MapCard
                                key={index}
                                {...item}
                                id={"end-" + index}
                            />
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Map;
