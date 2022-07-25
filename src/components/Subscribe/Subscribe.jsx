import { Row, Col, Input, Button } from "antd";

import styles from "./Subscribe.module.css";

export const Subscribe = () => {
  return (
    <>
      <Row className={styles.subscribe__base}>
        <Col md={4} lg={5} xxl={6}></Col>
        <Col md={16} lg={14} xxl={12}>
          <div className={styles.subscribe}>
            <div className={styles.subscribe__title}>Subscribe</div>
            <div className={styles.subscribe__content}>
              Wanna get updated information from us every day? Join to
              subscriber now!
            </div>
            <div className={styles.subscribe__form}>
              <Input placeholder="Name"></Input>
              <Input placeholder="Email address"></Input>
              <Button type="primary">Subscribe</Button>
            </div>
          </div>
        </Col>
        <Col md={4} lg={5} xxl={6}></Col>
      </Row>
    </>
  );
};
