import { Card } from "antd";
import moment from "moment";

import styles from "./Item.module.css";

export const Item = ({ post }) => {
  return (
    <>
      <Card
        className={styles.item__card}
        cover={<img src={post.thumbnail} alt={post.title} />}
        style={{ width: "100%" }}
      >
        <div className={styles.item}>
          <span className={styles.item__title}>
            <a href={post.link} target="_blank" rel="noreferrer">
              {post.title}
            </a>
          </span>
          <span className={styles.item__subtitle}>{post.description}</span>
          <span className={styles.item__source}>
            {moment(post.pubDate).format("DD MMMM YYYY HH:mm")}
          </span>
        </div>
      </Card>
    </>
  );
};
