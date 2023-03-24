import { ApexOptions } from "apexcharts";
import format from "date-fns/format";

const defaultOptions: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    legend: {
      position: "right",
      markers: {
        radius: 0,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.2,
        opacityTo: 0,
      },
    },
    colors: ["#FF5DA0", "#0066FF", "#FFDE54"],
    grid: {
      show: false,
    },
    stroke: {
      width: 2,
      curve: "straight",
      dashArray: [0, 8, 0],
    },
    yaxis: {
      tickAmount: 1,
      min: 0,
      labels: {
        formatter: function (val: number) {
          return val + "";
        },
      },
    },
    xaxis: {
      tickAmount: 4,
      labels: {
        formatter: function (value: any) {
          if (!value) return "";
          return format(new Date(value * 1000), "HH:mm");
        },
      },
    },
  };
  

  export default defaultOptions