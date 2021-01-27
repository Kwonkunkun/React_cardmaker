import React, { memo } from "react";
import styles from "./view_detail.module.css";

const ViewDetail = memo(({ data }) => {
    return (
        <div
            className={styles.container}
            style={{ background: data.bgColor, color: data.fontColor }}
        >
            <img className={styles.img} src={data.imgUrl} alt="img" />
            <section className={styles.info}>
                <span className={styles.name}>name:&nbsp;{data.name}</span>
                <span className={styles.job}>job:&nbsp;{data.job}</span>
                <span className={styles.email}>email:&nbsp;{data.email}</span>
                <span className={styles.phoneNumber}>
                    phone:&nbsp;{data.phoneNumber}
                </span>
            </section>
        </div>
    );
});

export default ViewDetail;
