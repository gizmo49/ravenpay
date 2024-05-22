import { ReactComponent as InfoIcon } from "assets/images/info.svg";

export const Input = ({
    name,
    id,
    label,
    labelClass,
    grpClass,
    inputClass,
    type = "text",
    placeholder,
    isErr,
    isValid,
    errMssg,
    extraMssg,
    isLoading,
    value,
    disabled,
  
    onChange,
    fieldType,
    onBlur,
    onKeyDown,
    onKeyUp,
    hideLabel,
    hideError,
    autoFocus,
    min,
    max,
    minLength,
    maxLength,
    required
}) => {
   
    return (
        <div className={`form-group ${grpClass || ""}`}>
            {label && (
                <label
                    htmlFor={id}
                    className={`form-label ${labelClass || ""} ${disabled ? "text-muted" : ""
                        } ${hideLabel ? "d-none" : ""}`}>
                    {label}
                </label>
            )}
            <>
                <div className='input__group'>
                    <div className="input__group--label">
                        <span>{label}</span>
                        <InfoIcon />
                    </div>
                    <input
                        type={type}
                        name={name}
                        id={id}
                        data-label={label}
                        className={`form-control ${isLoading
                            ? "is-loading"
                            : isErr
                                ? "is-invalid"
                                : isValid
                                    ? "is-valid"
                                    : ""
                            } ${inputClass || ""}`}
                        placeholder={placeholder}
                        disabled={disabled}
                        data-field={fieldType}
                        onKeyUp={onKeyUp}
                        onKeyDown={onKeyDown}
                        onBlur={onBlur}
                        onChange={onChange}
                        value={value}
                        autoComplete='off'
                        autoFocus={autoFocus}
                        min={min}
                        max={max}
                        minLength={minLength}
                        maxLength={maxLength}
                        required={required}
                    />
                    {extraMssg ? (
                        <div className='text-muted extra-input-mssg'>
                            {extraMssg}
                        </div>
                    ) : null}
                    {!hideError && <div className='invalid-feedback'>{errMssg}</div>}
                </div>
            </>

        </div>
    );
};
