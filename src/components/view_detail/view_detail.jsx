import React from "react";
import styles from "./view_detail.module.css";
import tempImg from "img/temp.png";

const ViewDetail = (props) => {
    return (
        <div className={styles.container}>
            <img className={styles.img} src={tempImg} alt="img" />
            <section className={styles.info}>
                <div className={styles.colorPicker}>
                    <span>background color : </span>
                    <input type="color" id="colorpicker" value="#000000" />
                </div>
                <input type="text" placeholder="name" alt="name" />
                <input type="text" placeholder="email@email.com" alt="email" />
                <input type="tel" placeholder="phoneNumber" alt="phoneNumber" />
            </section>
            <section className={styles.btns}>
                <button className={styles.imgUploadBtn}>upload img</button>
                <button className={styles.editBtn}>edit</button>
            </section>
        </div>
    );
};

export default ViewDetail;
