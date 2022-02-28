import { ReactNode } from "react";
import css from "utils/css";

interface IconTitleProps {
    title: string;
    variant?: string;
    children: ReactNode;
}

const IconTitle = ({ title, variant = "left-8", children }: IconTitleProps) => {
    return (
        <div className="group relative flex cursor-pointer items-center">
            {children}
            <span
                className={css(
                    "pointer-events-none absolute z-10 block whitespace-nowrap rounded-sm bg-black py-1 px-2 text-white opacity-0 transition-opacity group-hover:opacity-100",
                    variant
                )}
            >
                {title}
            </span>
        </div>
    );
};

export default IconTitle;
