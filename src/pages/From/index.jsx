import React, { useReducer } from "react";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";

const reducerFn = (state, action) => {
  switch (action.type) {
    case "USER":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const From = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducerFn, {
    name: "",
    user_name: "",
    phone: "",
    email: "",
    password: "",
  });

  const OnGetSubmitData = (e) => {
    e.preventDefault();
  };

  const OnGetData = (e) => {
    let id = e.target.id;
    let val = e.target.value;

    let newData = { ...state, [id]: val };

    dispatch({ type: "USER", payload: newData });
  };

  return (
    <div className={styles.Container}>
      <div className={styles.form}>
        <form onSubmit={OnGetSubmitData}>
          <h2>Submit Form</h2>
          <div className={styles.inputCont}>
            <input
              type="text"
              onChange={OnGetData}
              id="name"
              placeholder="Name"
            />
            <input
              type="text"
              onChange={OnGetData}
              id="user_name"
              placeholder="User Name"
            />
            <input
              type="text"
              onChange={OnGetData}
              id="phone"
              placeholder="Mobile Number"
            />
            <input
              type="email"
              id="email"
              onChange={OnGetData}
              placeholder="Email Address"
            />
            <input
              type="password"
              id="password"
              onChange={OnGetData}
              placeholder="Password"
            />
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

export default From;
