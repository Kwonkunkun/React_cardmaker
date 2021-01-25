import styles from "./app.module.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "pages/homePage";
import MainPage from "pages/mainPage";
import Header from "components/header/header";
import { auth, signInWithGoogle } from "firebase/firebase.utils.js";

//firebase 관련 가지고 있기
//로그인 로그아웃 기록을 가지고 있는게 좋을거 같음. header에 가지고 있는것도 나쁘지는 않을거 같은데
//route 기능
function App() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        auth.onAuthStateChanged(function (user) {
            if (user) {
                console.log("user exist");
                console.log(user);
                setUser(user);
            } else {
                console.log("user null");
                setUser(null);
            }
        });
    }, []);

    const signInGoogle = () => {
        signInWithGoogle()
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                console.log(result);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(
                    `errorCode : ${errorCode}, errorMessage : ${errorMessage}`
                );
            });
    };

    const signInGithub = () => {
        console.log("signInGithub");
    };

    const signOut = () => {
        auth.signOut();
        //그리고나서 초기화면으로 가도록 하자
        window.alert("log out");
    };

    return (
        <>
            <Header
                user={user}
                signOut={signOut}
                signInGoogle={signInGoogle}
                signInGithub={signInGithub}
            />
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <HomePage
                                user={user}
                                signInGoogle={signInGoogle}
                                signInGithub={signInGithub}
                            />
                        </Route>
                        <Route exact path="/main">
                            <MainPage />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    );
}

export default App;
