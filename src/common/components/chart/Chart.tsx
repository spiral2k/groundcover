import { ApexOptions } from "apexcharts";
import ApexChart from "react-apexcharts";
import Img from "src/common/components/Img";
import CPUIcon from "src/assets/cpu.png";
import format from "date-fns/format";

import css from "./Chart.module.scss";

const Chart = ({
  series = [],
  options = {},
  title,
}: {
  series: any;
  options?: Partial<ApexOptions>;
  title: string;
}) => {
  return (
    <div className={css.chart_container}>
      <div className={css.header}>
        <div className={css.icon_button}>
          <Img src={CPUIcon} />
        </div>

        <span className={css.title}>{title}</span>
      </div>
      <ApexChart
        options={{ ...defaultOptions, ...options }}
        series={series}
        width="100%"
        height="200"
      />
    </div>
  );
};

export default Chart;

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
      formatter: function (value, timestamp) {
        if (!timestamp || timestamp < 0) return "";
        return format(new Date(timestamp), "HH:mm");
      },
    },
  },
  tooltip: {
    shared: false,
    intersect: true,
  },
};
