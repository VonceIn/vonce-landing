import { cn } from "@/utils/cn";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type PillShapedButton = {
    text: string;
    width?: number | string;
    height?: number | string;
    textSize?: string;
    className?: string;
    textClassName?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const PillShapedButton = ({ 
    text, 
    width, 
    height, 
    textSize, 
    className, 
    textClassName, 
    style, 
    ...rest 
}: PillShapedButton) => {

    return (
        <button 
            className={cn(`bg-secondary rounded-full flex items-center justify-center border cursor-pointer active:bg-red-800 transition-[background]`, className)} 
            style={{
                width: typeof width === 'number' ? `${width}px` : width,
                height: typeof height === 'number' ? `${height}px` : height,
                ...style
            }}
            {...rest}
        >
            <span className={cn("font-ubuntu font-[700] text-white text-[18px] max-sm:text-[16px]", textClassName)}>
                {text}
            </span>
        </button>
    );
}

export default PillShapedButton;