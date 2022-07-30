import { Row, Col } from "antd";
import { Welcome, Hero, ListNews, ListReel } from "../../components";

import styles from "./News.module.css";

export const News = () => {
  return (
    <>
      <Row className={styles.news__base}>
        <Col md={24}>
          <div className={styles.news}>
            <Welcome />
            <Hero />
            <ListNews type="Latest News" amout="4" />
            <ListNews type="sport" amout="3" />
            <ListReel />
            <ListNews type="news portal" amout="4" />
          </div>
        </Col>
      </Row>
    </>
  );
};
