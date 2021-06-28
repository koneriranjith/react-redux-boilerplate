/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";

const ActionGroup = ({ className, action, buttons }) => {
  className = `${className || ""} btn-action-group`;
  return (
    <div className={className}>
      {buttons.map(button => (
        <button
          className={`btn-${button}`}
          onClick={e => {
            action(button);
          }}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default ActionGroup;

ActionGroup.propTypes = {
  className: PropTypes.string,
  buttons: PropTypes.array,
  action: PropTypes.func
};
ActionGroup.defaultProps = {
  className: "",
  buttons: ["recompute", "reset", "update"],
  onClick: () => {}
};
