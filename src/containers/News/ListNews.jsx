import { Row, Col } from "antd";
import { useParams } from "react-router-dom";

import { ListNewsItem } from "../../components/News/ListNewsItem";
import {
  useGetLatestNewsQuery,
  useGetTechNewsQuery,
  useGetLifestyleNewsQuery,
} from "../../services/news/cnbc";
import Loading from "../../utils/Loading";

import styles from "./ListNews.module.css";
import { Slugify, ucWords } from "../../utils/Typography";

export const ListNews = () => {
  const { category } = useParams();

  const newsPicked = { data: {}, isLoading: true };

  const latestNews = useGetLatestNewsQuery();
  const techNews = useGetTechNewsQuery();
  const lifestyleNews = useGetLifestyleNewsQuery();

  switch (category) {
    case "latest-news":
      if (!latestNews.isLoading) {
        newsPicked.data = latestNews?.data?.data?.posts;
        newsPicked.isLoading = false;
      }
      break;
    case "tech-news":
      if (!techNews.isLoading) {
        newsPicked.data = techNews?.data?.data?.posts;
        newsPicked.isLoading = false;
      }
      break;
    case "lifestyle-news":
      if (!lifestyleNews.isLoading) {
        newsPicked.data = lifestyleNews?.data?.data?.posts;
        newsPicked.isLoading = false;
      }
      break;
  }

  const listNewsTitle = ucWords(category.replace("-", " "));

  return (
    <>
      {newsPicked.isLoading ? (
        <Loading />
      ) : (
        <Row className={styles.list_news__base}>
          <Col md={1} lg={4} xxl={5}></Col>
          <Col md={22} lg={16} xxl={14}>
            <div className={styles.list_news}>
              <div className={styles.list_news__title}>All {listNewsTitle}</div>
              {newsPicked.data.map((val, idx) => {
                const slug = Slugify(val.title);

                return <ListNewsItem key={idx} slug={slug} post={val} />;
              })}
            </div>
          </Col>
          <Col md={1} lg={4} xxl={5}></Col>
        </Row>
      )}
    </>
  );
};
