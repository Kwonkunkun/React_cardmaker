import ViewDetail from "components/view_detail/view_detail";
import React from "react";
import styles from "./view_container.module.css";

const ViewContainer = (props) => {
    return (
        <div className={styles.container}>
            <ViewDetail />
            <ViewDetail />
            <ViewDetail />
            <ViewDetail />
            <ViewDetail />
            <ViewDetail />
            <ViewDetail />
            <ViewDetail />
            <ViewDetail />
            <ViewDetail />
            <ViewDetail />
            <ViewDetail />
            <ViewDetail />
            <ViewDetail />
        </div>
    );
};

export default ViewContainer;
