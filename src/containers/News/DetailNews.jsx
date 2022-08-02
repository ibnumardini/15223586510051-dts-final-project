import { useEffect } from "react";
import { Row, Col, Button } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  MailOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { FacebookShareButton, TwitterShareButton, EmailShareButton } from "react-share";

import {
  useGetNewsQuery,
  useGetLatestNewsQuery,
  useGetTechNewsQuery,
  useGetLifestyleNewsQuery,
} from "../../services/news/cnbc";
import { ScrollToTop, UrlScreenNow } from "../../utils/Screen";
import { Slugify } from "../../utils/Typography";
import { PublishDate } from "../../utils/Moment";

import styles from "./DetailNews.module.css";
import Loading from "../../utils/Loading";

export const DetailNews = () => {
  const { slug } = useParams();

  useEffect(() => {
    ScrollToTop();
  }, []);

  const newsPicked = { data: {}, isLoading: true };

  const news = useGetNewsQuery();
  const latestNews = useGetLatestNewsQuery();
  const techNews = useGetTechNewsQuery();
  const lifestyleNews = useGetLifestyleNewsQuery();

  if (
    !news.isLoading &&
    !latestNews.isLoading &&
    !techNews.isLoading &&
    !lifestyleNews.isLoading
  ) {
    const newses = [
      ...news.data.data.posts,
      ...latestNews.data.data.posts,
      ...techNews.data.data.posts,
      ...lifestyleNews.data.data.posts,
    ];

    const allNews = newses.map((val) => {
      return { ...val, slug: Slugify(val.title) };
    });

    newsPicked.data = allNews.find((val) => {
      return val.slug === slug;
    });

    newsPicked.isLoading = false;
  }

  return (
    <>
      <Row className={styles.detail_news__base}>
        <Col md={1} lg={4} xxl={5}></Col>
        <Col md={22} lg={16} xxl={14}>
          {newsPicked.isLoading ? (
            <Loading />
          ) : (
            <div className={styles.detail_news}>
              <div className={styles.detail_news__head}>
                <div className={styles.detail_news__title}>
                  {newsPicked.data.title}
                </div>
                <div className={styles.detail_news__subtitle}>
                  <div className={styles.detail_news__subtitle__author}>
                    News Author
                  </div>
                  <div>-</div>
                  <div className={styles.detail_news__subtitle__date}>
                    {PublishDate(newsPicked.data.pubDate)}
                  </div>
                </div>
              </div>
              <div className={styles.detail_news__social}>
                <span>
                  <FacebookShareButton
                    url={UrlScreenNow()}
                    quote={UrlScreenNow()}
                  >
                    <FacebookOutlined style={{ color: "dodgerblue" }} />
                  </FacebookShareButton>
                </span>
                <span>
                  <TwitterShareButton
                    url={UrlScreenNow()}
                    quote={UrlScreenNow()}
                  >
                    <TwitterOutlined style={{ color: "turquoise" }} />
                  </TwitterShareButton>
                </span>
                <span>
                  <EmailShareButton url={UrlScreenNow()} quote={UrlScreenNow()}>
                    <MailOutlined style={{ color: "fuchsia" }} />
                  </EmailShareButton>
                </span>
              </div>
              <div className={styles.detail_news__feature}>
                <span className={styles.detail_news__feature__image}>
                  <img
                    src={newsPicked.data.thumbnail}
                    alt={newsPicked.data.slug}
                  />
                </span>
                <span>{newsPicked.data.title}</span>
              </div>
              <div className={styles.detail_news__body}>
                <p>{newsPicked.data.description}</p>
                <a href={newsPicked.data.link} target="_blank" rel="noreferrer">
                  <Button>
                    Continue Reading <ArrowRightOutlined />
                  </Button>
                </a>
              </div>
            </div>
          )}
        </Col>
        <Col md={1} lg={4} xxl={5}></Col>
      </Row>
    </>
  );
};
