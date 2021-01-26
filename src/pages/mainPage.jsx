import EditorContainer from "components/editor_container/editor_container";
import ViewContainer from "components/view_container/view_container";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./mainPage.module.css";

const MainPage = ({ data, handleEdit }) => {
    return (
        <div className={styles.container}>
            <EditorContainer data={data} handleEdit={handleEdit} />
            <ViewContainer data={data} />
        </div>
    );
};
export default MainPage;
