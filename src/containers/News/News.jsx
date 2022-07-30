import { Row, Col } from "antd";
import { Welcome, Hero, ListNews, ListReel } from "../../components";
import {
  useGetLatestNewsQuery,
  useGetTechNewsQuery,
} from "../../services/news/cnbc";
import Loading from "../../utils/Loading";

import styles from "./News.module.css";

export const News = () => {
  const latestNews = useGetLatestNewsQuery();
  const techNews = useGetTechNewsQuery();

  return (
    <>
      <Row className={styles.news__base}>
        <Col md={24}>
          <div className={styles.news}>
            <Welcome />
            <Hero />
            {latestNews.error ? (
              console.log(latestNews.error)
            ) : latestNews.isLoading ? (
              <Loading />
            ) : (
              <ListNews
                type="Latest News"
                amout="3"
                dataApi={latestNews.data}
              />
            )}
            {techNews.error ? (
              console.log(techNews.error)
            ) : techNews.isLoading ? (
              <Loading />
            ) : (
              <ListNews type="Tech News" amout="3" dataApi={techNews.data} />
            )}
            <ListReel />
            {/* <ListNews type="news portal" amout="4" /> */}
          </div>
        </Col>
      </Row>
    </>
  );
};
