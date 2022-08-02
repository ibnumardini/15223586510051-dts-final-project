import { Row, Col } from "antd";
import { useSearchParams } from "react-router-dom";

import { SearchBox, SearchBoxResult } from "../../components";

import styles from "./SearchNews.module.css";

export const SearchNews = () => {
  const [searchParams] = useSearchParams();

  const search = searchParams.get("query");

  return (
    <>
      <Row className={styles.search_news__base}>
        <Col md={1} lg={4} xxl={5}></Col>
        <Col md={22} lg={16} xxl={14}>
          <div className={styles.search_news}>
            <div className={styles.search_news__title}>Search</div>
            <SearchBox querySearch={search} />
            {search ? (
              <span>Result for: "{search}"</span>
            ) : (
              <div style={{ height: "50vh" }}>No news data found.</div>
            )}
            <SearchBoxResult query={search} />
          </div>
        </Col>
        <Col md={1} lg={4} xxl={5}></Col>
      </Row>
    </>
  );
};
