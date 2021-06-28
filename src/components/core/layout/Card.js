import React, { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";
import FullScreen from "../FullScreen";
import ButtonIcon from "../ButtonIcon";

const CardContext = createContext();
const Card = ({ className, children, ...restProps }) => {
  const [zoom, setZoom] = useState(false);
  const cardProviderValue = { zoom, setZoom };
  const classNames = `rc-card ${className || ""}`;
  return (
    <CardContext.Provider value={cardProviderValue}>
      <FullScreen fullScreen={zoom}>
        <div className={classNames}>{children}</div>
      </FullScreen>
    </CardContext.Provider>
  );
};

Card.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

const ComputationCard = ({ className, children, ...restProps }) => {
  const cardContext = useContext(CardContext);
  const classNames = `rc-cc-card ${className || ""} ${
    cardContext.zoom ? "ml-3 mr-3" : ""
  }`;
  return <div className={classNames}>{children}</div>;
};

ComputationCard.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

const ComputationCardHeader = ({
  className,
  name,
  zoom,
  children,
  onClick,
  ...restProps
}) => {
  const cardContext = useContext(CardContext);
  const classNames = `rc-cc-card-header ${className || ""}`;
  const handleClick = event => {
    onClick(!cardContext.zoom);
    cardContext.setZoom(!cardContext.zoom);
  };
  return (
    <div className={classNames}>
      <p className="header-title">{name}</p>
      {children}
      {zoom ? (
        <ButtonIcon
          onClick={handleClick}
          icon={`icon-${cardContext.zoom ? "shrink" : "enlarge"}`}
        />
      ) : null}
    </div>
  );
};

ComputationCardHeader.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  name: PropTypes.string,
  zoom: PropTypes.bool,
  onClick: PropTypes.func
};

ComputationCardHeader.defaultProps = {
  name: "",
  zoom: false,
  onClick: () => {}
};
export { Card, ComputationCard, ComputationCardHeader };
