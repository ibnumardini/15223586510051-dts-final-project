import { useEffect } from "react";
import { Link } from "react-router-dom";

import { PublishDate } from "../../../utils/Moment";
import { ScrollToTop } from "../../../utils/Screen";

import styles from "./ListNewsItem.module.css";

export const ListNewsItem = ({ slug, post }) => {
  useEffect(() => {
    ScrollToTop();
  }, []);

  return (
    <>
      <Link to={`/detail-news/cnbc/${slug}`}>
        <div className={styles.list_news__box}>
          <div className={styles.list_news__box__image}>
            <img src={post.thumbnail} alt={slug}></img>
          </div>
          <div className={styles.list_news__box__content}>
            <div className={styles.list_news__box__content__title}>
              {post.title}
            </div>
            <div className={styles.list_news__box__content__pub_date}>
              {PublishDate(post.pubDate)}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
