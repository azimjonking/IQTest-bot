import React from "react";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}>
        <div className={styles.spinnerInner}></div>
      </div>
      <p className={styles.text}>Loading...</p>
    </div>
  );
};

export default Loading;
