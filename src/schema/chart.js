import Highcharts from "highcharts";
const chartColor = {
  floatOptimization: {
    xAxis: "#ccc",
    yAxis: "#ccc",
    barColor: "blue",
    lineColor: "green"
  },
  floatServiceLevel: {
    xAxis: "#ccc",
    yAxis: "#ccc",
    barColor: "#ffc021",
    lineColor: "#3ece88"
  }
};
export const floatOptimizationOptions = {
  credits: {
    enabled: false
  },
  chart: {
    zoomType: "xy",
    height: "252px"
  },
  title: {
    text: ""
  },
  xAxis: [
    {
      labels: {
        format: "{value}",
        style: {
          color: chartColor.floatOptimization.xAxis
        }
      },
      title: {
        text: "Service Level",
        style: {
          color: chartColor.floatOptimization.yAxis
        }
      },
      categories: [
        0.46,
        0.56,
        0.66,
        0.76,
        0.86,
        0.96,
        1.46,
        1.56,
        1.66,
        1.76,
        1.86,
        1.97
      ],
      crosshair: true
    }
  ],
  yAxis: [
    {
      // Primary yAxis
      labels: {
        format: "{value}",
        style: {
          color: chartColor.floatOptimization.xAxis
        }
      },
      title: {
        text: "Cost",
        style: {
          color: chartColor.floatOptimization.yAxis
        }
      }
    },
    {
      // Secondary yAxis
      title: {
        text: "Float Quantity",
        style: {
          color: chartColor.floatOptimization.xAxis
        }
      },
      labels: {
        format: "{value}",
        style: {
          color: chartColor.floatOptimization.yAxis
        }
      },
      opposite: true
    }
  ],
  tooltip: {
    shared: true
  },
  legend: {
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || // theme
      "rgba(255,255,255,0.25)"
  },
  series: [
    {
      name: "Float Quantity",
      type: "column",
      color: "#73b1f1",
      yAxis: 1,
      data: [
        49.9,
        71.5,
        106.4,
        129.2,
        144.0,
        176.0,
        135.6,
        148.5,
        216.4,
        194.1,
        95.6,
        54.4
      ],
      tooltip: {
        valueSuffix: ""
      }
    },
    {
      name: "Cost",
      type: "spline",
      color: "#3ece88",
      data: [
        7.0,
        6.9,
        9.5,
        14.5,
        18.2,
        21.5,
        25.2,
        26.5,
        23.3,
        18.3,
        13.9,
        9.6
      ],
      tooltip: {
        valueSuffix: ""
      }
    }
  ]
};

export const floatServiceLevelOptions = {
  credits: {
    enabled: false
  },
  chart: {
    zoomType: "xy",
    height: "290px"
  },
  title: {
    text: ""
  },
  xAxis: [
    {
      labels: {
        format: "{value}",
        style: {
          color: chartColor.floatOptimization.xAxis
        }
      },
      title: {
        text: "Service Level",
        style: {
          color: chartColor.floatOptimization.yAxis
        }
      },
      categories: [
        0.46,
        0.56,
        0.66,
        0.76,
        0.86,
        0.96,
        1.46,
        1.56,
        1.66,
        1.76,
        1.86,
        1.97
      ],
      crosshair: true
    }
  ],
  yAxis: [
    {
      // Primary yAxis
      labels: {
        format: "{value}",
        style: {
          color: chartColor.floatOptimization.xAxis
        }
      },
      title: {
        text: "Cost",
        style: {
          color: chartColor.floatOptimization.yAxis
        }
      }
    },
    {
      // Secondary yAxis
      title: {
        text: "Float Quantity",
        style: {
          color: chartColor.floatOptimization.xAxis
        }
      },
      labels: {
        format: "{value}",
        style: {
          color: chartColor.floatOptimization.yAxis
        }
      },
      opposite: true
    }
  ],
  tooltip: {
    shared: true
  },
  legend: {
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || // theme
      "rgba(255,255,255,0.25)"
  },
  series: [
    {
      name: "Float Quantity",
      type: "column",
      color: chartColor.floatServiceLevel.barColor,
      yAxis: 1,
      data: [
        49.9,
        71.5,
        106.4,
        129.2,
        144.0,
        176.0,
        135.6,
        148.5,
        216.4,
        194.1,
        95.6,
        54.4
      ],
      tooltip: {
        valueSuffix: ""
      }
    },
    {
      name: "Cost",
      type: "spline",
      color: chartColor.floatServiceLevel.lineColor,
      data: [
        7.0,
        6.9,
        9.5,
        14.5,
        18.2,
        21.5,
        25.2,
        26.5,
        23.3,
        18.3,
        13.9,
        9.6
      ],
      tooltip: {
        valueSuffix: ""
      }
    }
  ]
};

export const DemandForecastYearWise = {
  credits: {
    enabled: false
  },
  chart: {
    type: "column",
    height: "272px"
  },

  title: {
    text: ""
  },

  xAxis: {
    categories: ["Apples", "Oranges"]
  },

  yAxis: {
    allowDecimals: false,
    min: 0,
    title: {
      text: "Number of fruits"
    }
  },

  tooltip: {
    formatter: function() {
      return (
        "<b>" +
        this.x +
        "</b><br/>" +
        this.series.name +
        ": " +
        this.y +
        "<br/>" +
        "Total: " +
        this.point.stackTotal
      );
    }
  },

  plotOptions: {
    column: {
      stacking: "normal"
    }
  },

  series: [
    {
      name: "John",
      data: [5, 3],
      stack: "male"
    },
    {
      name: "Jane",
      data: [2, 5],
      stack: "female"
    }
  ]
};
export const DemandForecast = {
  chart: {
    height: "272px"
  },
  credits: {
    enabled: false
  },
  title: {
    text: ""
  },
  yAxis: {
    title: {
      text: "Number of Employees"
    }
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle"
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 2010
    }
  },

  series: [
    {
      color: "#3ece88",
      name: "Installation",
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom"
          }
        }
      }
    ]
  }
};

export const removelHistoryStackedBarOptions = {
  credits: {
    enabled: false
  },
  chart: {
    type: "column",
    height: "281px"
  },
  title: {
    text: ""
  },
  xAxis: {
    categories: [
      "Jan 19",
      "Feb 19",
      "Mar 19",
      "Apr 19",
      "May 19",
      "Jun 19",
      "Jul 19",
      "Aug 19",
      "Sep 19",
      "Oct 19",
      "Nov 19",
      "Dec 19"
    ]
  },
  yAxis: {
    min: 0,
    title: {
      text: "Total fruit consumption"
    },
    stackLabels: {
      //   enabled: true,
      style: {
        fontWeight: "bold",
        color:
          // theme
          (Highcharts.defaultOptions.title.style &&
            Highcharts.defaultOptions.title.style.color) ||
          "gray"
      }
    }
  },
  legend: {},
  tooltip: {
    headerFormat: "<b>{point.x}</b><br/>",
    pointFormat: "{series.name}: {point.y}<br/>Total: {point.stackTotal}"
  },
  plotOptions: {
    column: {
      stacking: "normal"
      //   dataLabels: {
      //     enabled: true
      //   }
    }
  },
  series: [
    {
      color: "rgb(254, 206, 91)",
      name: "Sheduled",
      data: [5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 4, 7]
    },
    {
      color: "rgb(40, 185, 228)",
      name: "Unsheduled",
      data: [2, 2, 3, 2, 1, 5, 3, 4, 7, 2, 2, 1]
    }
  ]
};

export const removelHistorylineOptions = {
  chart: {
    height: "281px"
  },
  credits: {
    enabled: false
  },
  title: {
    text: ""
  },
  yAxis: {
    title: {
      text: "Number of Employees"
    }
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle"
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 2010
    }
  },

  series: [
    {
      color: "#3ece88",
      name: "Installation",
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom"
          }
        }
      }
    ]
  }
};

export const utilization = {
  credits: {
    enabled: false
  },
  chart: {
    type: "column",
    height: "274px"
  },

  title: {
    text: ""
  },

  xAxis: {
    categories: ["B777ER", "B777"]
  },

  yAxis: {
    allowDecimals: false,
    min: 0,
    title: {
      text: "Utilization (FH)"
    }
  },

  tooltip: {
    formatter: function() {
      return (
        "<b>" +
        this.x +
        "</b><br/>" +
        this.series.name +
        ": " +
        this.y +
        "<br/>" +
        "Total: " +
        this.point.stackTotal
      );
    }
  },

  plotOptions: {
    column: {
      stacking: "normal"
    }
  },

  series: [
    {
      name: "John",
      data: [5, 3],
      stack: "male",
      color: "#6c7589"
    },
    {
      name: "Jane",
      data: [2, 5],
      stack: "female"
    }
  ]
};
export const mtbur = {
  chart: {
    height: "274px"
  },
  credits: {
    enabled: false
  },
  title: {
    text: ""
  },
  yAxis: {
    title: {
      text: "MTBUR"
    }
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle"
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 2010
    }
  },

  series: [
    {
      color: "#3ece88",
      name: "MTBUR Demand plan",
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom"
          }
        }
      }
    ]
  }
};

export const Tat = {
  credits: {
    enabled: false
  },
  chart: {
    type: "column",
    height: "249px"
  },
  title: {
    text: ""
  },
  xAxis: {
    type: "category",
    labels: {
      rotation: -45,
      style: {
        fontSize: "13px",
        fontFamily: "Verdana, sans-serif"
      }
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: "Turn Around Time (TAT)"
    }
  },
  legend: {
    enabled: false
  },
  tooltip: {
    pointFormat: "TAT: <b>{point.y:.1f} millions</b>"
  },
  series: [
    {
      color: "rgb(40, 185, 228)",
      name: "Population",
      data: [
        ["DUBD", 24.2],
        ["SDFSDF", 20.8],
        ["ERWFD", 14.9],
        ["SDFWER", 13.7],
        ["IWERI", 13.1],
        ["SFDFDZ", 12.7],
        ["KKJEWD", 12.4],
        ["IRDDDS", 12.2]
      ],
      dataLabels: {
        enabled: true,
        format: "{point.y:.1f}", // one decimal
      }
    }
  ]
};
export const Cost = {
  credits: {
    enabled: false
  },
  chart: {
    type: "column",
    height: "249px"
  },
  title: {
    text: ""
  },
  xAxis: {
    type: "category",
    labels: {
      rotation: -45,
      style: {
        fontSize: "13px",
        fontFamily: "Verdana, sans-serif"
      }
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: "Purcahse Costs"
    }
  },
  legend: {
    enabled: false
  },
  tooltip: {
    pointFormat: "Purcahse: <b>{point.y:.1f}</b>"
  },
  series: [
    {
      color: "rgb(254, 206, 91)",
      name: "Vendors",
      data:  [
        ["DUBD", 24.2],
        ["SDFSDF", 20.8],
        ["ERWFD", 14.9],
        ["SDFWER", 13.7],
        ["IWERI", 13.1],
        ["SFDFDZ", 12.7],
        ["KKJEWD", 12.4],
        ["IRDDDS", 12.2]
      ],
      dataLabels: {
        enabled: true,
        format: "{point.y:.1f}", // one decimal
      }
    }
  ]
};

export const ScrapRate = {
  credits: {
    enabled: false
  },
  chart: {
    type: "area",
    height: "252px"
  },
  accessibility: {
    description:
      "Image description: An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR’s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR’s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia’s 4,500."
  },
  title: {
    text: ""
  },
  xAxis: {
    title: {
      text: "Month"
    },
    allowDecimals: false,
    labels: {
      formatter: function() {
        return this.value; // clean, unformatted number for year
      }
    },
    accessibility: {
      rangeDescription: "Range: 1940 to 2017."
    }
  },
  yAxis: {
    title: {
      text: "Scrap rate"
    },
    labels: {
      formatter: function() {
        return this.value / 1000 + "k";
      }
    }
  },
  tooltip: {
    pointFormat:
      "{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}"
  },
  plotOptions: {
    area: {
      pointStart: 1940,
      marker: {
        enabled: false,
        symbol: "circle",
        radius: 2,
        states: {
          hover: {
            enabled: true
          }
        }
      }
    }
  },
  series: [
    {
      name: "Scrap Rate Level",
      color: "#73b1f1",
      data: [
        null,
        null,
        null,
        null,
        null,
        6,
        11,
        32,
        110,
        235,
        369,
        640,
        1005,
        1436,
        2063,
        3057,
        4618,
        6444,
        9822,
        15468,
        20434,
        24126,
        27387,
        29459,
        31056,
        31982,
        32040,
        31233,
        29224,
        27342,
        26662,
        26956,
        27912,
        28999,
        28965,
        27826,
        25579,
        25722,
        24826,
        24605,
        24304,
        23464,
        23708,
        24099,
        24357,
        24237,
        24401,
        24344,
        23586,
        22380,
        21004,
        17287,
        14747,
        13076,
        12555,
        12144,
        11009,
        10950,
        10871,
        10824,
        10577,
        10527,
        10475,
        10421,
        10358,
        10295,
        10104,
        9914,
        9620,
        9326,
        5113,
        5113,
        4954,
        4804,
        4761,
        4717,
        4368,
        4018
      ]
    }
  ]
};
