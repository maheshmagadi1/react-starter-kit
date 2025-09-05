import React from "react";
import './InputField.scss';

interface InputFieldParams {
    type?: string;
    label?: string;
    onChange?: () => void;
    placeholder?: string;
    error?: string;
}

const InputField: React.FC<InputFieldParams> = ({ type = "text", label, placeholder, onChange, error }) => {
    return (
        <>
        <label>{label}</label>
        <input type={type} placeholder={placeholder} onChange={onChange}/>
        {error && <span className="input-field-error"></span>}
        </>
    )
}

export default InputField;