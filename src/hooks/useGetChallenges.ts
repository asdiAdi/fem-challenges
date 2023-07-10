import { getChallenges } from "@/api/challenges.ts";
import { useState, useEffect } from "react";

export default function useGetChallenges() {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    void reload();
    //   must have return cleanup here when axios is integrated
  }, []);

  async function reload() {
    setIsFetching(true);
    try {
      const res = await getChallenges();
      setData(res);
    } catch (e) {
      console.log(e);
      throw e;
    } finally {
      setIsFetching(false);
    }
  }

  return {
    data,
    isFetching,
    reload,
  };
}
