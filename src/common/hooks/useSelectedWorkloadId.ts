import { useSearchParams } from "react-router-dom";

type ReturnType = [
  string | null,
  {
    clear: () => void;
    set: (workloadId: string) => void;
  }
];

function useSelectedWorkloadId(): ReturnType {
  const [queryParams, setQueryParams] = useSearchParams();

  const clear = () => {
    setQueryParams({});
  };

  const set = (workloadId: string) => {
    setQueryParams({ selectedWorkloadId: workloadId });
  };

  return [queryParams.get("selectedWorkloadId"), { clear, set }];
}

export default useSelectedWorkloadId;
