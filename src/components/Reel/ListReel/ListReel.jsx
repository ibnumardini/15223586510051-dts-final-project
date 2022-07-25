import { Row, Col, Button } from "antd";

import { Item } from "../Item";

import styles from "./ListReel.module.css";
import placeholder from "../../../assets/hero.jpg";

export const ListReel = () => {
  return (
    <>
      <Row
        className={styles.reel__base}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${placeholder})`,
        }}
      >
        <Col md={1} lg={2} xxl={4}></Col>
        <Col md={22} lg={20} xxl={16}>
          <div className={styles.reel}>
            <div className={styles.reel__head}>
              <div className={styles.reel__head__title}>
                <h1>Reel Videos</h1>
                <h2>Access our video gallery</h2>
              </div>
              <div className={styles.reel__head__title}>
                <Button type="primary">See More</Button>
              </div>
            </div>
            <div className={styles.reel__content}>
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
