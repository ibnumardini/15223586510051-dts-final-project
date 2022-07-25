import { Row, Col } from "antd";
import { Item } from "../Item";
import { ucWords } from "../../../utils/Typography";

import styles from "./List.module.css";

export const List = ({ type }) => {
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
              <Item />
              <Item />
              <Item />
            </div>
          </div>
        </Col>
        <Col md={1} lg={2} xxl={4}></Col>
      </Row>
    </>
  );
};
