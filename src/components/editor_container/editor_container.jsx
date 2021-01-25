import EditorDetail from "components/editor_detail/editor_detail";
import React from "react";
import styles from "./editor.container.module.css";

const EditorContainer = (props) => {
    return (
        <div className={styles.container}>
            <EditorDetail />
            <EditorDetail />
            <EditorDetail />
            <EditorDetail />
            <EditorDetail />
            <EditorDetail />
            <EditorDetail />
        </div>
    );
};
export default EditorContainer;
