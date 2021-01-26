import styles from "./app.module.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "pages/homePage";
import MainPage from "pages/mainPage";
import Header from "components/header/header";
import {
    auth,
    signInWithGoogle,
    writeData,
    readData,
    readOff,
} from "firebase/firebase.utils.js";

//firebase 관련 가지고 있기
//로그인 로그아웃 기록을 가지고 있는게 좋을거 같음. header에 가지고 있는것도 나쁘지는 않을거 같은데
//route 기능
function App() {
    const [user, setUser] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        //listener들 등록, read는 여기다 등록해야할듯
        auth.onAuthStateChanged((result) => {
            if (result) {
                console.log("user exist");
                setUser(result);

                //read 등록
                readData(result.uid, setData);
            } else {
                console.log("user null");
                setUser(null);

                //로그아웃시 readoff
                if (user !== null) readOff(user.uid);
            }
        });
    }, []);

    //sign
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

    //edit
    //이건 edit버튼을 누를때마다 새로 data들을 update되게 해보자
    const handleEdit = (data) => {
        writeData(user.uid, data);
        setData(data);
    };

    const plusOne = () => {
        const newData = [...data];
        newData.push({});
        setData(newData);
        writeData(user.uid, newData);
    };

    return (
        <>
            <Router>
                <Header
                    user={user}
                    signOut={signOut}
                    signInGoogle={signInGoogle}
                    signInGithub={signInGithub}
                    plusOne={plusOne}
                />
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
                            <MainPage data={data} handleEdit={handleEdit} />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    );
}

export default App;
