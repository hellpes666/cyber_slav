const Hero = () => {
    return (
        <div className="relative h-dvh w-screen overflow-x-hidden">
            {/* loading */}

            {/* content */}

            <div
                className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg"
                id="img-frame"
            >
                <img
                    src="/img/hero.jpg"
                    alt=""
                    className="object-fit object-cover "
                />
            </div>
        </div>
    );
};

export default Hero;
