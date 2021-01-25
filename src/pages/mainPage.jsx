import EditorContainer from "components/editor_container/editor_container";
import ViewContainer from "components/view_container/view_container";
import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./mainPage.module.css";

const MainPage = (props) => {
    let history = useHistory();

    const handleClick = () => {
        history.push("/");
    };

    return (
        <div className={styles.container}>
            <EditorContainer />
            <ViewContainer />
        </div>
    );
};
export default MainPage;
