import React from "react";
import styles from "./spinner.module.css";

const Spinner = (props) => {
    return (
        <div className={styles.spinner}>
            <div className={`${styles.inner} ${styles.one}`}></div>
            <div className={`${styles.inner} ${styles.two}`}></div>
            <div className={`${styles.inner} ${styles.three}`}></div>
        </div>
    );
};

export default Spinner;
