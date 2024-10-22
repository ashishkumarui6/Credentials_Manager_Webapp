import React from "react";
import styles from "./index.module.css";
import Item from "./Item";
import { Nav_Data } from "../../data/Navbar";
import img from "../../assets/logo.png";
import InputField from "../../widgets/InputField";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
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
            <InputField />
            <CiSearch />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
