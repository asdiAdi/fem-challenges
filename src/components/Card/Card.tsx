import styles from "./styles.module.scss";

export type CardProps = {
  title: string;
  img: string;
  badges: string[];
};
export function Card(props: CardProps) {
  const { title, img, badges } = props;
  return (
    <div className={styles["card"]}>
      <img src={`thumbnails/${img}`} alt={`${title} Image`} />
      <h2>{title}</h2>
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
  );
}
