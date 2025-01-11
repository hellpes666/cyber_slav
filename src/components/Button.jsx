const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
    return (
        <div
            id={id}
            className={`${containerClass} select-none group relative w-fit z-10 cursor-pointer overflow-hidden rounded-full bg-white-100 px-7 py-3 text-black hover:bg-red-100 hover:text-white-100 transition-all duration-200 ease-in`}
        >
            {leftIcon}

            <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
                <div className="">{title}</div>
            </span>

            {rightIcon}
        </div>
    );
};

export default Button;
