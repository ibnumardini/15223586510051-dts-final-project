import { Row, Col } from "antd";
import { Item } from "../Item";
import { ucWords, Slugify } from "../../../utils/Typography";

import styles from "./ListNews.module.css";

export const ListNews = ({ type, amout, dataApi }) => {
  const news = dataApi?.data?.posts?.slice(0, parseInt(amout));

  return (
    <>
      <Row className={styles.list__base}>
        <Col md={1} lg={2} xxl={4}></Col>
        <Col md={22} lg={20} xxl={16}>
          <div className={styles.list}>
            <div className={styles.list__title}>
              <h1>{ucWords(type)}</h1>
            </div>
            <div className={styles.list__content}>
              {news.map((val, idx) => {
                const slug = Slugify(val.title);

                return <Item key={idx} slug={slug} post={val} />;
              })}
            </div>
          </div>
        </Col>
        <Col md={1} lg={2} xxl={4}></Col>
      </Row>
    </>
  );
};
