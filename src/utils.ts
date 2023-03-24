import { ChartSeries, VelocityResource, Workload } from "./types";

const DASHED_LINE_ELEMENTS = ["Defined Limit", "Defined Request"];

const units = { cpu: "mCPU", memory: "MiB" };

export const seriesSortHendler = (seriesA: Workload, seriesB: Workload) =>
  seriesB.issuesCount - seriesA.issuesCount;

export const findWorkloadHandler = (
  workload: Workload,
  selectedWorkloadId: string | null
) => workload.entityId === selectedWorkloadId;

export const transformToSeries = (
  key: string,
  elements: VelocityResource[]
): ChartSeries => {
  return {
    name: key,
    options: {
      yaxis: {
        tickAmount: 1,
        min: 0,
        labels: {
          formatter: (value: string) => {
            return `${value} ${(units as any)[key]}`;
          },
        },
      },
      stroke: {
        width: 2,
        dashArray: elements.map((s) =>
          DASHED_LINE_ELEMENTS.includes(s.resource) ? 3 : 0
        ),
      },
    },
    series: elements.map((s) => ({
      type: "area",
      name: s.resource,
      data: s.velocity,
    })),
  };
};
