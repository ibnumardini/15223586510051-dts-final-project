import { Row, Col } from "antd";
import { Hero } from "../../components";

import styles from "./News.module.css";

export const News = () => {
  return (
    <>
      <Row className={styles.news__base}>
        <Col md={24}>
          <div className={styles.news}>
            <Hero />
          </div>
        </Col>
      </Row>
    </>
  );
};
