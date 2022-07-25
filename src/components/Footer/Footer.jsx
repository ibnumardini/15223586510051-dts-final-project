import { Row, Col } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

const { REACT_APP_NAME } = process.env;

export const Footer = () => {
  return (
    <>
      <Row className={styles.footer__base}>
        <Col md={1} lg={2} xxl={4}></Col>
        <Col md={22} lg={20} xxl={16}>
          <div className={styles.footer}>
            <div className={styles.footer__detail}>
              <div className={styles.footer__detail__box}>
                <span className={styles.footer__detail__box__title}>News</span>
                <ul>
                  <li>
                    <Link to="#">CNN</Link>
                  </li>
                  <li>
                    <Link to="#">BBC</Link>
                  </li>
                  <li>
                    <Link to="#">Suara.com</Link>
                  </li>
                  <li>
                    <Link to="#">Detik.com</Link>
                  </li>
                </ul>
              </div>
              <div className={styles.footer__detail__box}>
                <span className={styles.footer__detail__box__title}>Sport</span>
                <ul>
                  <li>
                    <Link to="#">Football</Link>
                  </li>
                  <li>
                    <Link to="#">Volley Ball</Link>
                  </li>
                </ul>
              </div>
              <div className={styles.footer__detail__box}>
                <span className={styles.footer__detail__box__title}>
                  Lifetyle
                </span>
                <ul>
                  <li>
                    <Link to="#">Indonesia</Link>
                  </li>
                  <li>
                    <Link to="#">Saudi Arabia</Link>
                  </li>
                  <li>
                    <Link to="#">Europe</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.footer__social_media}>
              <span className={styles.footer__social_media_title}>
                Follow {REACT_APP_NAME}
              </span>
              <div className={styles.footer__social_media__content}>
                <Link to="#">
                  <FacebookOutlined style={{color: 'dodgerblue'}} />
                </Link>
                <Link to="#">
                  <TwitterOutlined style={{color: 'darkturqoise'}} />
                </Link>
                <Link to="#">
                  <InstagramOutlined style={{color: 'fuchsia'}} />
                </Link>
              </div>
            </div>
            <div className={styles.footer__privacy}>
              <span>
                <Link to="#">Terms of Use</Link>
              </span>
              <span>
                <Link to="#">Privacy Policy</Link>
              </span>
            </div>
            <div className={styles.footer__copyright}>
              Made with ❤️ by <Link to="#">15223586510051</Link> &copy; 2022
              Beritaku News Network. All Rights Reserved.
            </div>
          </div>
        </Col>
        <Col md={1} lg={2} xxl={4}></Col>
      </Row>
    </>
  );
};
