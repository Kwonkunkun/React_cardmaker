import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import SignContainer from "components/sign-contanier/sign-container";
import { useHistory, useLocation } from "react-router-dom";

//여기서 login 여부 알려주기 그리고 누르면 로그아웃되게 하는것도 괜춘할듯
//log out 되면 home으로 redirection
const Header = ({ user, signOut, signInGoogle, signInGithub, plusOne }) => {
    const [signContainerDisplay, setSignContainerDisplay] = useState(false);

    let history = useHistory();
    let location = useLocation();

    const onDisplaySignContainer = () => {
        setSignContainerDisplay(true);
    };

    const offDisplaySignContaniner = () => {
        setSignContainerDisplay(false);
    };

    useEffect(() => {}, []);

    const handleSignOut = () => {
        if (getCurrentLocation() === "/main") {
            moveToHomePage();
        }
        signOut();
    };

    const getCurrentLocation = () => {
        console.log(location.pathname);
        return location.pathname;
    };

    // const moveToMainPage = () => {
    //     history.push("/main");
    // };

    const moveToHomePage = () => {
        history.push("/");
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Card Maker</h1>
            <div>
                <button className={styles.plus} onClick={plusOne}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button
                    className={styles.logState}
                    onClick={
                        user !== null ? handleSignOut : onDisplaySignContainer
                    }
                >
                    {user !== null ? (
                        <i className="fas fa-sign-out-alt"></i>
                    ) : (
                        <i className="fas fa-sign-in-alt"></i>
                    )}
                </button>
            </div>
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
