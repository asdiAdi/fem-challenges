import styles from "./styles.module.scss";
import { getChallenges, initDataType } from "@/api/challenges.ts";
import { useFetch } from "@/hooks/useFetch.ts";
import { Card } from "@/components";

export default function App() {
  const { data, isFetching } = useFetch(getChallenges, initDataType);
  console.log(data, isFetching);
  return (
    <main className={styles["grid"]}>
      <Card title={"a"} img={"a"} badges={["s"]} />
    </main>
  );
}
