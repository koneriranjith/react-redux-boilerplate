import React from "react";
import PropTypes from "prop-types";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Chart = ({ options }) => {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
export default Chart;

Chart.propTypes = {
  options: PropTypes.any
};
Chart.defaultProps = {
  options: {}
};
