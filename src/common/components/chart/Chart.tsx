import { ApexOptions } from "apexcharts";
import ApexChart from "react-apexcharts";
import Img from "src/common/components/Img";
import CPUIcon from "src/assets/cpu.png";
import defaultOptions from './defaultOptions';
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
