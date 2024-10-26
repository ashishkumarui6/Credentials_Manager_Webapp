import React, { useState } from "react";
import styles from "./index.module.css";
import Button from "../../widgets/Button";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import From from "../From";

const Home = () => {
  const [hide, setHide] = useState(false);
  return (
    <>
      <div className={styles.home}>
        <div className={styles.Btn} onClick={() => setHide(!hide)}>
          <Button />
        </div>
        {hide && <From />}
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
              <td>
                <div className="iconCont">
                  <span>
                    <FaRegEdit size={25} />
                  </span>
                  <span>
                    <MdDelete size={25} />
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
