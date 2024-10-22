import React from "react";
import styles from "./index.module.css";
import Button from "../../widgets/Button";

const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.Btn}>
          <Button />
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Mobile No.</th>
              <th>Email Id</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Username</td>
              <td>Mobile No.</td>
              <td>Email Id</td>
              <td>Password</td>
              <td>Action</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
