import ViewDetail from "components/view_detail/view_detail";
import React, { memo } from "react";
import styles from "./view_container.module.css";

const ViewContainer = memo(({ data }) => {
    return (
        <div className={styles.container}>
            {data.map((item) => (
                <ViewDetail
                    key={Date.now() + Math.random() * 1000}
                    data={item}
                />
            ))}
        </div>
    );
});

export default ViewContainer;
