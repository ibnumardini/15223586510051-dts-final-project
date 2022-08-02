import { Row, Col } from "antd";
import { useMediaQuery } from "react-responsive";
import { Welcome, Hero, ListNews } from "../../components";
import {
  useGetLatestNewsQuery,
  useGetTechNewsQuery,
  useGetLifestyleNewsQuery,
} from "../../services/news/cnbc";
import Loading from "../../utils/Loading";

import styles from "./News.module.css";

export const News = () => {
  const isXlScreen = useMediaQuery({ query: "(min-width: 1200px)" });

  const latestNews = useGetLatestNewsQuery();
  const techNews = useGetTechNewsQuery();
  const lifestyleNews = useGetLifestyleNewsQuery();

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
                amout={isXlScreen ? 4 : 3}
                dataApi={latestNews.data}
              />
            )}
            {techNews.error ? (
              console.log(techNews.error)
            ) : techNews.isLoading ? (
              <Loading />
            ) : (
              <ListNews
                type="Tech News"
                amout={isXlScreen ? 4 : 3}
                dataApi={techNews.data}
              />
            )}
            {lifestyleNews.error ? (
              console.log(lifestyleNews.error)
            ) : lifestyleNews.isLoading ? (
              <Loading />
            ) : (
              <ListNews
                type="Lifestyle News"
                amout={isXlScreen ? 4 : 3}
                dataApi={lifestyleNews.data}
              />
            )}
          </div>
        </Col>
      </Row>
    </>
  );
};
