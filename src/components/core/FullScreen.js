import React, { useEffect } from "react";
import PropTypes from "prop-types";

const divStyle = {
  position: "fixed",
  display: "block",
  zIndex: "800",
  height: "100vh",
  width: "100vw",
  top: "0",
  left: "0",
  backgroundColor: "#ccc"
};
const MainContainer = props => {
  let { fullScreen, allowScrollbar, children } = props;
  let modalStyle = fullScreen ? divStyle : {};
  let overflow = allowScrollbar ? { overflow: "auto" } : { overflow: "hidden" };
  return (
    <div
      className={`${fullScreen ? "full-screen" : ""}`}
      style={{ ...modalStyle, ...overflow }}
    >
      {children}
    </div>
  );
};

MainContainer.propTypes = {
  children: PropTypes.any,
  fullScreen: PropTypes.bool,
  allowScrollbar: PropTypes.bool
};

const FullScreenElement = props => {
  useEffect(() => {
    if (props.fullScreen) {
      document.body.classList.add("no-sroll");
    } else {
      document.body.classList.remove("no-sroll");
    }
  }, [props.fullScreen]);
  return (
    <MainContainer
      fullScreen={props.fullScreen}
      allowScrollbar={props.allowScrollbar}
    >
      {props.children}
    </MainContainer>
  );
};

FullScreenElement.propTypes = {
  children: PropTypes.any,
  fullScreen: PropTypes.bool,
  allowScrollbar: PropTypes.bool
};

export default FullScreenElement;
