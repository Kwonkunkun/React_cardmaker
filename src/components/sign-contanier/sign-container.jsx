import React, { memo } from "react";
import styles from "./sign-contanie.module.css";
// 필요한것 : google, github login button
//
const SignContainer = memo(
    ({ display, onClickX, onClickGoogle, onClickGithub }) => {
        const onClickGoogleBtn = () => {
            onClickX && onClickX();
            onClickGoogle && onClickGoogle();
        };

        const onClickGithubBtn = () => {
            onClickX && onClickX();
            onClickGithub && onClickGithub();
        };

        return (
            <div className={display === true ? styles.screen : styles.hide}>
                <section className={styles.container}>
                    <button className={styles.outBtn} onClick={onClickX}>
                        <i className="fas fa-times"></i>
                    </button>
                    <header className={styles.header}>LOG IN</header>
                    <button
                        className={styles.googleBtn}
                        onClick={onClickGoogleBtn}
                    >
                        <i className="fab fa-google"></i>
                        <span>Google</span>
                    </button>
                    <button
                        className={styles.githubBtn}
                        onClick={onClickGithubBtn}
                    >
                        <i className="fab fa-github"></i>
                        <span>Github</span>
                    </button>
                </section>
            </div>
        );
    }
);

export default SignContainer;
