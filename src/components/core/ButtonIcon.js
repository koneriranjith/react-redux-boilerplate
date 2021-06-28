/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";

const ButtonIcon = ({
  className,
  icon,
  iconClass,
  children,
  onClick,
  disabled,
  ...restProps
}) => {
  const classNames = `d-flex p-1 core-icon-button ${className || ""}`;
  const iconClases = `${iconClass || ""} ${icon || ""}`;
  return (
    <button className={classNames} onClick={onClick} disabled={disabled}>
      {icon && <i className={iconClases}></i>}
      {children && children}
    </button>
  );
};

ButtonIcon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  iconClass: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.any
};
ButtonIcon.defaultProps = {
  children: "",
  className: "",
  disabled: false,
  onClick: () => {}
};

export default ButtonIcon;
