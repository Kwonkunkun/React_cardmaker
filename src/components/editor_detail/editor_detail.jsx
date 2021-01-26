import React, { memo } from "react";
import styles from "./editor_detail.module.css";
import tempImg from "img/temp.png";

const EditorDetail = memo(({ idx, data, edit, onDelete }) => {
    const onChangeBgColor = (event) => {
        edit(idx, { ...data, bgColor: event.target.value });
    };
    const onChangeFontColor = (event) => {
        edit(idx, { ...data, fontColor: event.target.value });
    };
    const onChangeName = (event) => {
        edit(idx, { ...data, name: event.target.value });
    };
    const onChangeJob = (event) => {
        edit(idx, { ...data, job: event.target.value });
    };
    const onChangeEmail = (event) => {
        edit(idx, { ...data, email: event.target.value });
    };
    const onChangePhoneNumber = (event) => {
        edit(idx, { ...data, phoneNumber: event.target.value });
    };

    const handleClickDelete = () => {
        onDelete(idx);
    };

    return (
        <div className={styles.container}>
            <img className={styles.img} src={tempImg} alt="img" />
            <section className={styles.info}>
                <div className={styles.colorPicker}>
                    <label>bg color : </label>
                    <input
                        type="color"
                        id="colorpicker"
                        onChange={onChangeBgColor}
                        value={data.bgColor || ""}
                    />
                    <br />
                    <label>font color : </label>
                    <input
                        type="color"
                        id="colorpicker"
                        onChange={onChangeFontColor}
                        value={data.fontColor || ""}
                    />
                </div>
                <input
                    type="text"
                    placeholder="name"
                    alt="name"
                    onChange={onChangeName}
                    value={data.name || ""}
                    maxLength="20"
                />
                <input
                    type="text"
                    placeholder="job"
                    alt="job"
                    onChange={onChangeJob}
                    value={data.job || ""}
                    maxLength="20"
                />
                <input
                    type="text"
                    placeholder="email@email.com"
                    alt="email"
                    onChange={onChangeEmail}
                    value={data.email || ""}
                    maxLength="20"
                />
                <input
                    type="tel"
                    placeholder="phoneNumber"
                    alt="phoneNumber"
                    onChange={onChangePhoneNumber}
                    value={data.phoneNumber || ""}
                    maxLength="20"
                />
            </section>
            <section className={styles.btns}>
                <button className={styles.imgUploadBtn}>upload img</button>
                <button
                    className={styles.deleteBtn || ""}
                    onClick={handleClickDelete}
                >
                    delete
                </button>
            </section>
        </div>
    );
});

export default EditorDetail;
