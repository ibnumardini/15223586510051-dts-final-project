import { Card } from "antd";
import { useNavigate } from "react-router-dom";

import { PublishDate } from "../../../utils/Moment";

import styles from "./Item.module.css";

export const Item = ({ slug, post }) => {
  const navigate = useNavigate();

  const onCardClickHandler = (slug) => {
    navigate(`/detail-news/cnbc/${slug}`);
  };

  return (
    <>
      <Card
        className={styles.item__card}
        cover={<img src={post.thumbnail} alt={post.title} />}
        style={{ width: "100%" }}
        onClick={() => {
          onCardClickHandler(slug);
        }}
        hoverable
      >
        <div className={styles.item}>
          <span className={styles.item__title}>{post.title}</span>
          <span className={styles.item__subtitle}>{post.description}</span>
          <span className={styles.item__source}>
            {PublishDate(post.pubDate)}
          </span>
        </div>
      </Card>
    </>
  );
};
