import { twMerge } from 'tailwind-merge'

interface ButtonProps {
    onClick?: () => void;
    customClasses?: string;
    children?: React.ReactNode;
    disabled?: boolean;
    bg?: boolean;
    type?: "button" | "submit" | "reset";
}

const Button = ({ onClick, children, customClasses = "", disabled = false, type = "button", bg = false }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={
                twMerge(
                    "w-fit text-base-white bg-primary hover:bg-dark-primary cursor-pointer font-semibold px-6 py-3 rounded-full transition-all duration-200 scale-[99%] hover:scale-100 shadow-lg hover:shadow-xl",
                    disabled && "opacity-80 cursor-not-allowed",
                    bg && `relative font-bold overflow-hidden
                    before:content-['']
                    before:absolute
                    before:-inset-full
                    before:bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-base-white)_0%,var(--color-secondary)_50%,var(--color-base-white)_50%,var(--color-primary)_100%)]
                    before:animate-[spin_4s_linear_infinite]
                    before:blur-3xl`,
                    customClasses
                )
            }
            disabled={disabled}
            type={type}
        >
            <div className="relative flex items-center justify-center gap-2 z-10">
                {children || "Button"}
            </div>
        </button>
    )
}

export default Button


