import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ButtonIcon from "./ButtonIcon";
const TableGroupPagination = ({ data, onGroupChange, column }) => {
  let [startDataIndex, setStartDataIndex] = useState(0);
  useEffect(() => {
    selectedGroupName(0);
  }, []);
  const selectedGroupName = index => {
    setStartDataIndex(index);
    onGroupChange(data[index]);
  };
  const handleClick = action => {
    switch (action) {
      case "left":
        selectedGroupName(startDataIndex - 1);
        break;
      case "right":
        selectedGroupName(startDataIndex + 1);
        break;
      default:
        selectedGroupName(0);
        break;
    }
  };
  const renderHeader = headerData => {
    if (headerData.length == 2) {
      headerData = headerData.concat([""]);
    } else if (headerData.length == 1) {
      headerData = headerData.concat(["", ""]);
    }
    return (
      <>
        {headerData.map((val, key) => (
          <div
            className="header-item"
            onClick={() => {
              selectedGroupName(key + startDataIndex);
            }}
            key={key}
          >
            {val}
          </div>
        ))}
      </>
    );
  };
  return (
    <div className="table-group-pagination">
      <ButtonIcon
        className="border-0 icon"
        disabled={startDataIndex ? false : true}
        onClick={() => {
          handleClick("left");
        }}
        icon={`icon-circle-left`}
      />
      {renderHeader(data.slice(startDataIndex, startDataIndex + column))}
      <ButtonIcon
        className="border-0 icon"
        disabled={data.length - 1 === startDataIndex ? true : false}
        onClick={() => {
          handleClick("right");
        }}
        icon={`icon-circle-right`}
      />
    </div>
  );
};

export default TableGroupPagination;

TableGroupPagination.propTypes = {
  data: PropTypes.array,
  onGroupChange: PropTypes.func,
  column: PropTypes.number
};
TableGroupPagination.defaultProps = {
  data: [],
  column: 3,
  onGroupChange: () => {}
};
