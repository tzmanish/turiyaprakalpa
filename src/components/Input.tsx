import { twMerge } from 'tailwind-merge'

interface InputProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    customClasses?: string;
    disabled?: boolean;
    placeholder?: string;
    value?: string | number;
    name?: string;
    id?: string;
    type?: "text" | "email" | "password" | "number" | "search" | "tel" | "url";
}

const Input = ({ onChange, customClasses = "", disabled = false, type = "text", placeholder = "", value = "", name = "", id = "" }: InputProps) => {
    return (
        <input
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
            name={name}
            id={id}
            className={
                twMerge(
                    "rounded-lg px-4 py-2 outline-2 outline-gray-300 bg-gray-200 focus:outline-2 focus:outline-secondary hover:outline-2 hover:outline-secondary",
                    disabled && "opacity-80 cursor-not-allowed",
                    customClasses
                )
            }
            disabled={disabled}
        />
    )
}

export default Input
