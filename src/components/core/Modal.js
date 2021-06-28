import React, { useEffect } from "react";
import PropTypes from "prop-types";

import ButtonIcon from "./ButtonIcon";

const Modal = ({
  title,
  className,
  childran,
  callBack,
  renderBody,
  ...restProps
}) => {
  useEffect(() => {
    document.body.classList.add("no-sroll");
    return () => {
      document.body.classList.remove("no-sroll");
    };
  });
  const classNames = `rc-modal ${className}`;
  return (
    <div className={classNames}>
      <div className="rc-background"></div>
      <div className="rc-modal-container">
        <div className="header px-3">
          <p className="m-0">{title}</p>
          <ButtonIcon
            className="mx-1 border-0 bg-color-transparent"
            onClick={() => {
              callBack();
            }}
          >
            <span
              className="icon-cross"
              style={{ fontSize: "13px", color: "#FFFFFF" }}
            ></span>
          </ButtonIcon>
        </div>
        <div className="body">
          {renderBody({})}
          {childran}
        </div>
      </div>
    </div>
  );
};
Modal.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  callBack: PropTypes.func,
  renderBody: PropTypes.func,
  children: PropTypes.any
};
Modal.defaultProps = {
  className: "",
  title: "Title",
  callBack: () => {}
};
export default Modal;
