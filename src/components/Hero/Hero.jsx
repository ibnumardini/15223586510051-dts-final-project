import { Row, Col } from "antd";

import styles from "./Hero.module.css";
import placeholder from "../../assets/hero.jpg";

export const Hero = () => {
  return (
    <>
      <Row className={styles.hero__base}>
        <Col md={1} lg={2} xxl={4}></Col>
        <Col md={22} lg={20} xxl={16}>
          <div
            className={styles.hero}
            style={{ backgroundImage: `url(${placeholder})` }}
          >
            <div className={styles.hero__box}>
              <div className={styles.hero__content}>
                <span className={styles.hero__title} level={2}>
                  Russia denies causing global food crisis
                </span>
                <span className={styles.hero__subtitle} level={4}>
                  Russia's Foreign Minister, Sergei Lavrov, on a diplomatic
                  offensive in Egypt, has dismissed claims that Moscow caused
                  the global food crisis.
                </span>
                <span className={styles.hero__source}>Kompas.com</span>
              </div>
            </div>
          </div>
        </Col>
        <Col md={1} lg={2} xxl={4}></Col>
      </Row>
    </>
  );
};
