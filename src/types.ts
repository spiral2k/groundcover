export type Workload = {
  issuesCount: number;
  entityId: string;
  namespace: string;
  workload: string;
  protocols: string[];
  status: number;
};

export type ChartSeries = {
  name: string;
  options: Record<string, any>;
  series: any[];
};

export type WorkloadsStore = {
  workloads: Workload[];
  setWorkloads: (workloads: Workload[]) => void;
  reset: () => void;
};

export type VelocityResource = {
  resource: string;
  velocity: [number, string][];
};

export type VelocityResponse = {
  cpu: VelocityResource[];
  memory: VelocityResource[];
};
