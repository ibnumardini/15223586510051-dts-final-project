import { Card } from "antd";

import styles from "./Item.module.css";
import placeholder from "../../../assets/hero.jpg";

export const Item = () => {
  return (
    <>
      <Card
        className={styles.item__card}
        cover={<img src={placeholder} />}
        style={{ width: "100%" }}
      >
        <div className={styles.item}>
          <span className={styles.item__title}>
            Vingegaard wins Tour as Philipsen takes sprint
          </span>
          <span className={styles.item__subtitle}>
            Denmark's Jonas Vingegaard secures his first Tour de France victory
            as Jasper Philipsen of Belgium sprints to victory on the final stage
            in Paris
          </span>
          <span className={styles.item__source}>Kumparan.com</span>
        </div>
      </Card>
    </>
  );
};
