import styles from "./styles.module.scss";

export type CardProps = {
  title: string;
  imgName: string;
  badges: string[];
};
export function Card(props: CardProps) {
  const { title, imgName, badges } = props;
  const imageUrl = new URL(`../../thumbnails/${imgName}`, import.meta.url).href;
  return (
    <div className={styles["card"]}>
      <img src={imageUrl} alt={`${title} Image`} className={styles["img"]} />
      <div className={styles["body"]}>
        <h2 className={styles["title"]}>{title}</h2>
        <div className={styles["flex"]}>
          <div className={styles["badge"]}>
            {badges.map((badge, idx) => {
              return (
                <div key={idx} className={styles["badge"]}>
                  {badge}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
