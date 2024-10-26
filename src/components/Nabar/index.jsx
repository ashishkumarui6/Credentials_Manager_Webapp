import React, { useState } from "react";
import styles from "./index.module.css";
import Item from "./Item";
import { Nav_Data } from "../../data/Navbar";
import img from "../../assets/logo.png";
import InputField from "../../widgets/InputField";
import { CiSearch } from "react-icons/ci";
import { IoMdCloseCircle } from "react-icons/io";

const Navbar = () => {
  const [show, setshow] = useState(false);
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img src={img} alt="logo" />
          </div>
          <ul className={styles.ul}>
            {Nav_Data.map((it) => (
              <Item key={it.id} name={it.item} />
            ))}
            {show && <InputField />}
            <div className={styles.SerchIcon} onClick={() => setshow(!show)}>
              {show ? (
                <IoMdCloseCircle size={25} color="#fff" />
              ) : (
                <CiSearch size={25} color="#fff" />
              )}
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
