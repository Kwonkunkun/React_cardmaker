import React, { memo, useState } from "react";
import styles from "./editor_detail.module.css";
import Axios from "axios";

const EditorDetail = memo(({ idx, data, edit, onDelete }) => {
    const [selectedFile, setSelectedFile] = useState(null);

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

    const uploadImg = () => {
        if (selectedFile === null) {
            window.alert("이미지를 추가해주세요!");
            return;
        }
        const formData = new FormData();
        formData.append("file", selectedFile);
        formData.append("upload_preset", "r1gvkplt");

        Axios.post(
            "https://api.cloudinary.com/v1_1/drkeoyuzw/upload",
            formData
        ).then((response) => {
            console.log(response.data.secure_url);
            edit(idx, { ...data, imgUrl: response.data.secure_url });
        });
    };

    return (
        <div className={styles.container}>
            <img className={styles.img} src={data.imgUrl} alt="img" />
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
                <input
                    className={styles.fileUploader}
                    type="file"
                    name="file"
                    onChange={(event) => setSelectedFile(event.target.files[0])}
                />
                <button className={styles.imgUploadBtn} onClick={uploadImg}>
                    upload img
                </button>
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
