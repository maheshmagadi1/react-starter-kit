import React from "react";

interface ButtonProps {
    value: string;
    onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ value, onClick}) => {
    return (
        <button className="btn-primary" onClick={onClick}>
            {value}
        </button>
    )
}

export default Button;