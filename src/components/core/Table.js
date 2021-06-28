/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const TableContext = createContext();

const Table = ({ children, className, onChange, ...restProps }) => {
  const classNames = `rc-table ${className || ""}`;
  return (
    <TableContext.Provider>
      <div className={classNames} {...restProps}>
        {children}
      </div>
    </TableContext.Provider>
  );
};

Table.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Table.defaultProps = {
  className: ""
};

const TableHead = ({ children, className, ...restProps }) => {
  const classNames = `rc-tb-head ${className || ""}`;
  return (
    <div className={classNames} {...restProps}>
      {children}
    </div>
  );
};

TableHead.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

const TableBody = ({ children, className, ...restProps }) => {
  const classNames = `rc-tb-body ${className || ""}`;
  return (
    <div className={classNames} {...restProps}>
      {children}
    </div>
  );
};

TableBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

const TableRow = ({ children, className, ...restProps }) => {
  const classNames = `rc-tb-row ${className || ""}`;
  return (
    <div className={classNames} {...restProps}>
      {children}
    </div>
  );
};

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

const TableData = ({
  children,
  className,
  onChange,
  key,
  name,
  editable,
  ...restProps
}) => {
  const classNames = `rc-tb-data ${className || ""}`;
  return (
    <div className={classNames} {...restProps}>
      {children}
    </div>
  );
};

TableData.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string
};
TableData.defaultProps = {
  children: "",
  className: "",
  editable: false
};
export { Table, TableHead, TableBody, TableRow, TableData };
