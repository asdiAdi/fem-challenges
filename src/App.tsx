import styles from "./styles.module.scss";
import { getChallenges, tempData } from "@/api/challenges.ts";
import { useFetch } from "@/hooks/useFetch.ts";
import { Card } from "@/components";

export default function App() {
  const { data } = useFetch(getChallenges, tempData);

  return (
    <main className={styles["grid"]}>
      {data?.map((challenge) => {
        const { id, title, thumbnail, badges } = challenge;
        return (
          <Card key={id} title={title} imgName={thumbnail} badges={badges} />
        );
      })}
    </main>
  );
}
