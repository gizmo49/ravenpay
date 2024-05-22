export const Checkbox = ({
    name,
    id,
    label,
    labelClass,
    grpClass,
    inputClass,
    isErr,
    isValid,
    errMssg,
    checked,
    onChange,
    type = "checkbox",
    disabled,
    children
}) => {
    return (
        <div className={`form-check ${grpClass || ""}`}>
            <input
                type={type}
                className={`form-check-input ${isErr ? "is-invalid" : isValid ? "is-valid" : ""
                    } ${inputClass || ""}`}
                id={id}
                name={name}
                onChange={onChange}
                checked={checked}
                disabled={disabled}
            />
            {children}

            <div className='invalid-feedback'>{errMssg}</div>
            {!children && <label
                htmlFor={id}
                className={`form-check-label ${labelClass || ""}`}>
                {label}
            </label>}
        </div>
    );
};
