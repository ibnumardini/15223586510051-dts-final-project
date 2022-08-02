import { Row, Col } from "antd";

import { Now } from "../../utils/Moment";

import styles from "./Welcome.module.css";

const { REACT_APP_NAME } = process.env;

export const Welcome = () => {
  return (
    <Row className={styles.welcome__base}>
      <Col md={1} lg={2} xxl={4}></Col>
      <Col md={22} lg={20} xxl={16}>
        <div className={styles.base}>
          <span>Welcome to. {REACT_APP_NAME}</span>
          <span>{Now()}</span>
        </div>
      </Col>
      <Col md={1} lg={2} xxl={4}></Col>
    </Row>
  );
};
