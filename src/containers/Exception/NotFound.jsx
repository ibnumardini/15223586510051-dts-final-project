import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <>
      <div className={styles.not_found__base}>
        <h1>404 Not Found</h1>
        <p>
          Back to <Link to="/">Home</Link>.
        </p>
      </div>
    </>
  );
};
