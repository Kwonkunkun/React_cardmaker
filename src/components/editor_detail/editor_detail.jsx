import React from "react";
import styles from "./editor_detail.module.css";
import tempImg from "img/temp.png";

const EditorDetail = (props) => {
    const handleColorPickerChange = (event) => {
        console.log(event.target.value);
    };

    return (
        <div className={styles.container}>
            <img className={styles.img} src={tempImg} alt="img" />
            <section className={styles.info}>
                <div className={styles.colorPicker}>
                    <label>background color : </label>
                    <input
                        type="color"
                        id="colorpicker"
                        onChange={handleColorPickerChange}
                    />
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

export default EditorDetail;
