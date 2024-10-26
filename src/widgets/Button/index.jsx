import React from "react";
import styles from "./index.module.css";

const Button = () => {
  return (
    <>
      <div className={styles.button}>
        <button className={styles.mainBtn}>Add</button>
      </div>
    </>
  );
};

export default Button;
