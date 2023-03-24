import { create } from "zustand";
import { Workload, WorkloadsStore } from "src/types";

const initialState: Pick<WorkloadsStore, "workloads"> = {
  workloads: [],
};

export const useWorkloadsStore = create<WorkloadsStore>((set) => ({
  ...initialState,
  setWorkloads: (workloads: Workload[]) => set({ workloads }),
  reset: () => set({ workloads: [] }),
}));

export const selectors = {
  reset: (state: WorkloadsStore) => state.reset,
  setWorkloads: (state: WorkloadsStore) => state.setWorkloads,
  getWorkloads: (state: WorkloadsStore) => state.workloads,
};
