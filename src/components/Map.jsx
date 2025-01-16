import { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";

const MapCard = ({ children, className, avaible, ref }) => {
    return (
        <div
            className={`rounded-lg bg-zinc-800 size-24 p-8 flex items-center justify-center ${!avaible ? "blur-[2px]" : ""}`}
            ref={ref}
        >
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
                <div className="flex justify-between">
                    {MapCards &&
                        MapCards.map((item, index) => (
                            <MapCard key={index} {...item} />
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Map;
