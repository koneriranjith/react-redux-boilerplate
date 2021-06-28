/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const TabContext = createContext();

const Tabs = ({ defaultTab, children, className, alignment, ...restProps }) => {
  const [activeTab, changeTab] = useState(defaultTab);
  const tabProviderValue = { activeTab, changeTab };

  const classNames =
    alignment === "horizontal"
      ? `tabs ${className}`
      : `tabs vertical ${className}`;

  return (
    <TabContext.Provider value={tabProviderValue}>
      <div className={classNames} {...restProps}>
        {children}
      </div>
    </TabContext.Provider>
  );
};

Tabs.propTypes = {
  defaultTab: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  alignment: PropTypes.string
};

Tabs.defaultProps = {
  defaultTab: "",
  className: "",
  alignment: "horizontal"
};

const TabList = ({ className, children, ...restProps }) => {
  const classNames = `tab-list ${className}`;

  return (
    <div className={classNames} {...restProps}>
      {children}
    </div>
  );
};

TabList.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

TabList.defaultProps = {
  className: ""
};

const Tab = ({ name, className, onClick, iconClassName, ...restProps }) => {
  const tabContext = useContext(TabContext);

  const classNames = `
      tab
      ${tabContext.activeTab === name ? "active" : ""}
      ${className}
    `;

  const handleClick = event => {
    tabContext.changeTab(name);
    onClick(event);
  };

  return (
    <div className={classNames} onClick={handleClick} {...restProps}>
      {iconClassName && <><i className={`${iconClassName}`}></i> <div className="icon-right-strock "></div></>} <span>{name}</span>
    </div>
  );
};

Tab.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};

Tab.defaultProps = {
  name: "",
  className: "",
  onClick: () => {}
};

const TabPanel = ({ name, className = "", children, ...restProps }) => {
  const tabContext = useContext(TabContext);

  const classNames = `tab-panel ${className}`;

  return (
    tabContext.activeTab === name && (
      <div className={classNames} {...restProps}>
        {children}
      </div>
    )
  );
};

Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panel = TabPanel;

export { Tabs, TabList, Tab, TabPanel };
