import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Typing from "components/typing/typing";
import SignContainer from "components/sign-contanier/sign-container";
import styles from "./homePage.module.css";

const HomePage = ({ user, signInGoogle, signInGithub }) => {
    const [signContainerDisplay, setSignContainerDisplay] = useState(false);

    let history = useHistory();

    const redirctionMainPage = () => {
        history.push("/main");
    };

    const onDisplaySignContainer = () => {
        setSignContainerDisplay(true);
    };

    const offDisplaySignContaniner = () => {
        setSignContainerDisplay(false);
    };

    return (
        <div className={styles.container}>
            <Typing
                textArray={
                    user === null
                        ? ["Please log in."]
                        : ["You already logged in!"]
                }
            />
            <button
                className={styles.logIn}
                onClick={
                    user === null ? onDisplaySignContainer : redirctionMainPage
                }
            >
                get start
            </button>
            <SignContainer
                display={signContainerDisplay}
                onClickX={offDisplaySignContaniner}
                onClickGoogle={signInGoogle}
                onClickGithub={signInGithub}
            />
        </div>
    );
};
export default HomePage;
