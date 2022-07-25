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
        <div className={styles.item__desc}>
          Vingegaard wins Tour as Philipsen takes sprint
        </div>
      </Card>
    </>
  );
};
