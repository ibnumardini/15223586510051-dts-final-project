import { Row, Col } from "antd";
import { Welcome, Hero, List as ListNews } from "../../components";

import styles from "./News.module.css";

export const News = () => {
  return (
    <>
      <Row className={styles.news__base}>
        <Col md={24}>
          <div className={styles.news}>
            <Welcome />
            <Hero />
            <ListNews type="news" />
            <ListNews type="sport" />
            <ListNews type="lifestyle" />
          </div>
        </Col>
      </Row>
    </>
  );
};
