import axios from "axios";
import { useCallback, useState } from "react";

type Props = {
  url: string;
};

type ReturnType = [
  callAPI: (params?: Record<string, any>) => Promise<any>,
  state: {
    data: any;
    error: Error | null;
    loading: boolean;
  }
];
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const useAxios = ({ url }: Props): ReturnType => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const callAPI = useCallback(async (params?: Record<string, any>) => {
    try {
      setLoading(true);
      await delay(2000);
      const response = await axios(url, { params });
      setData(response.data);
      return response.data;
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }

    return null;
  }, []);

  return [callAPI, { data, error, loading }];
};

export default useAxios;
