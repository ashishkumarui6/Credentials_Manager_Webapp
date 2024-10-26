import React from "react";
import styles from "./index.module.css";

const index = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.form}>
        <form>
          <h2>Submit Form</h2>
          <div className={styles.inputCont}>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="email" />
            <input type="password" />
          </div>
          <div className={styles.fromBtn}>
            <input type="submit" value="submit" />
            <button>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default index;
