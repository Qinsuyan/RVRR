import styles from "./index.module.less";
import React from "react";
const Welcome: React.FC = () => {
  return (
    <div className={styles.welcome}>
      <h1>Welcome to React</h1>
    </div>
  );
};
export default Welcome;
