import { Row, Col, Button } from "antd";
import {
  LinkOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import { Link, useParams } from "react-router-dom";

import styles from "./DetailNews.module.css";
import placeholder from "../../assets/hero.jpg";

export const DetailNews = () => {
  const { provider, newsId } = useParams();

  console.log(provider, newsId);

  return (
    <>
      <Row className={styles.detail_news__base}>
        <Col md={1} lg={4} xxl={5}></Col>
        <Col md={22} lg={16} xxl={14}>
          <div className={styles.detail_news}>
            <div className={styles.detail_news__category}>
              <span>Politic</span>
            </div>
            <div className={styles.detail_news__head}>
              <div className={styles.detail_news__title}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                optio omnis magnam repudiandae explicabo earum unde quos
                obcaecati consectetur laborum?
              </div>
              <div className={styles.detail_news__subtitle}>
                <div className={styles.detail_news__subtitle__author}>
                  Muhammad Fatkurozi
                </div>
                <div>-</div>
                <div className={styles.detail_news__subtitle__date}>
                  Senin, 25 Jul 2022 16:09 WIB
                </div>
              </div>
            </div>
            <div className={styles.detail_news__social}>
              <span>
                <FacebookOutlined style={{ color: "dodgerblue" }} />
              </span>
              <span>
                <TwitterOutlined style={{ color: "turquoise" }} />
              </span>
              <span>
                <InstagramOutlined style={{ color: "fuchsia" }} />
              </span>
              <span>
                <LinkOutlined />
              </span>
            </div>
            <div className={styles.detail_news__feature}>
              <span className={styles.detail_news__feature__image}>
                <img src={placeholder} alt="image" />
              </span>
              <span>Konferensi pers di Komnas HAM (Rakha/detikcom)</span>
            </div>
            <div className={styles.detail_news__body}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Itaque, nobis. Pariatur optio autem sint dolorum, cupiditate
                doloremque amet repellat, quam fugit ipsa ipsum dolore
                accusantium, porro sequi repellendus necessitatibus labore.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Itaque, nobis. Pariatur optio autem sint dolorum, cupiditate
                doloremque amet repellat, quam fugit ipsa ipsum dolore
                accusantium, porro sequi repellendus necessitatibus labore.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Itaque, nobis. Pariatur optio autem sint dolorum, cupiditate
                doloremque amet repellat, quam fugit ipsa ipsum dolore
                accusantium, porro sequi repellendus necessitatibus labore.
              </p>
              <Link to="#">Read more...</Link>
            </div>
          </div>
        </Col>
        <Col md={1} lg={4} xxl={5}></Col>
      </Row>
    </>
  );
};
