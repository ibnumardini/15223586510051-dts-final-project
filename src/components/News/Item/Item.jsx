import { Card } from "antd";
import { Link } from "react-router-dom";

import { PublishDate } from "../../../utils/Moment";

import styles from "./Item.module.css";

export const Item = ({ slug, post }) => {
  return (
    <>
      <Card
        className={styles.item__card}
        cover={<img src={post.thumbnail} alt={post.title} />}
        style={{ width: "100%" }}
      >
        <Link to={`/detail-news/cnbc/${slug}`}>
          <div className={styles.item}>
            <span className={styles.item__title}>{post.title}</span>
            <span className={styles.item__subtitle}>{post.description}</span>
            <span className={styles.item__source}>
              {PublishDate(post.pubDate)}
            </span>
          </div>
        </Link>
      </Card>
    </>
  );
};
