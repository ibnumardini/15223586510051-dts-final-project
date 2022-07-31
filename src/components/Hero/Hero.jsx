import { Row, Col, Carousel } from "antd";
import moment from "moment";

import { useGetNewsQuery } from "../../services/news/cnbc";
import { Toast, ToastError } from "../../utils/Notification";
import Loading from "../../utils/Loading";
import { PublishDate } from "../../utils/Date";

import styles from "./Hero.module.css";

export const Hero = () => {
  const { data, error, isLoading } = useGetNewsQuery();

  const news = data?.data?.posts?.slice(0, 5);

  return (
    <>
      {error ? (
        Toast(ToastError, { title: "Hero Content", desc: error })
      ) : isLoading ? (
        <Loading />
      ) : (
        <Row className={styles.hero__base}>
          <Col md={1} lg={2} xxl={4}></Col>
          <Col md={22} lg={20} xxl={16}>
            <Carousel autoplay>
              {news.map((val, idx) => {
                return <HeroElement key={idx} post={val} />;
              })}
            </Carousel>
          </Col>
          <Col md={1} lg={2} xxl={4}></Col>
        </Row>
      )}
    </>
  );
};

const HeroElement = ({ post }) => {
  return (
    <div
      className={styles.hero}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${post.thumbnail})`,
      }}
    >
      <div className={styles.hero__box}>
        <div className={styles.hero__content}>
          <span className={styles.hero__title} level={2}>
            <a href={post.link} target="_blank" rel="noreferrer">
              {post.title}
            </a>
          </span>
          <span className={styles.hero__subtitle} level={4}>
            {post.description}
          </span>
          <span className={styles.hero__source}>
            {PublishDate(post.pubDate)}
          </span>
        </div>
      </div>
    </div>
  );
};
