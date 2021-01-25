import React, { useState } from "react";
import styles from "./header.module.css";
import SignContainer from "components/sign-contanier/sign-container";
//여기서 login 여부 알려주기 그리고 누르면 로그아웃되게 하는것도 괜춘할듯
//log out 되면 home으로 redirection
const Header = ({ user, signOut, signInGoogle, signInGithub }) => {
    const [signContainerDisplay, setSignContainerDisplay] = useState(false);
    const onDisplaySignContainer = () => {
        setSignContainerDisplay(true);
    };

    const offDisplaySignContaniner = () => {
        setSignContainerDisplay(false);
    };
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Card Maker</h1>
            <button
                className={styles.logState}
                onClick={user !== null ? signOut : onDisplaySignContainer}
            >
                {user !== null ? (
                    <i className="fas fa-sign-out-alt"></i>
                ) : (
                    <i className="fas fa-sign-in-alt"></i>
                )}
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

export default Header;
