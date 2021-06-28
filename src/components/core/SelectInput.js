import React from "react";

const SelectInput = ({
  errorMessage,
  hasError,
  className,
  name,
  label,
  value,
  multiple,
  options,
  onChange
}) => {
  const renderError = () => {
    if (hasError) {
      return <p className="err-msg">{errorMessage}</p>;
    }
  };
  let inputClasses = `select-wrapper ${className}`;
  if (hasError) {
    inputClasses = inputClasses + " has-error";
  }
  return (
    <div className={inputClasses}>
      {label && <label className="label mb-0 mw-10">{label}</label>}
      <select
        className={`select`}
        name={name}
        value={value}
        multiple={multiple}
        onChange={e => {
          onChange(e.target.value);
        }}
      >
        {options.map(item => {
          return (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
      {renderError()}
    </div>
  );
};

export default SelectInput;
