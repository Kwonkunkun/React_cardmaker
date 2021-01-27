import EditorDetail from "components/editor_detail/editor_detail";
import React, { memo } from "react";
import styles from "./editor.container.module.css";

const EditorContainer = memo(({ data, handleEdit }) => {
    const onEidt = (idx, changeData) => {
        //idx의 데이터값을 바꾼 data값을 return
        const newData = [...data];
        newData[idx] = changeData;
        handleEdit(newData);
    };

    const onDelete = (idx) => {
        // //idx의 데이터값을 바꾼 data값을 return
        // const newData = [...data];
        // newData.splice(idx, 1);
        // handleEdit(newData);
        console.log("onDelete");
        const newData = [...data];
        newData.splice(idx, 1);
        handleEdit(newData);
        console.log(idx);
    };

    return (
        <div className={styles.container}>
            {data.map((item, idx) => (
                <EditorDetail
                    idx={idx}
                    key={idx}
                    data={item}
                    edit={onEidt}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
});
export default EditorContainer;
