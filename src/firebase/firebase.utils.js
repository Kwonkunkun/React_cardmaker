import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC8ilKxrdL-XqwYu_rEh-aXk3iBh_Y2eDs",
    authDomain: "card-maker-e6496.firebaseapp.com",
    projectId: "card-maker-e6496",
    databasseURL: "https://card-maker-e6496-default-rtdb.firebaseio.com",
    storageBucket: "card-maker-e6496.appspot.com",
    messagingSenderId: "193865961720",
    appId: "1:193865961720:web:7a58eecc1db3fa88802b0d",
    measurementId: "G-2D34N9X30C",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//auth 관련
export const auth = firebase.auth();
const providerOfGoogle = new firebase.auth.GoogleAuthProvider();
// GoogleAuthProvider 클래스를 authentication 라이브러리에서 사용할 수 있도록 불러오는 코드.
providerOfGoogle.setCustomParameters({ prompt: "select_account" });
// signIn이랑 authentication을 위해서 GoogleAuthProvider를 사용할 때마다 구글 팝업을 항상 띄우기를 원한다는 의미이다.
export const signInWithGoogle = () => auth.signInWithPopup(providerOfGoogle);
// signInWithPopup 메소드는 여러 파라미터를 받을 수 있다. 트위터, 페이스북, 깃허브 등으로도 로그인이 필요할 수도 있으므로.
// 여기에서는 google로 signIn할 것이기 때문에, 파라미터로 위에서 정의한 provider를 넣어준다.

//데이터 베이스 관련 함수들
const database = firebase.database();

export function writeUserData(userId, name, email, imageUrl) {
    database.ref("users/" + userId).set({
        username: name,
        email: email,
        profile_picture: imageUrl,
    });
}

export function writeNewPost(uid, username, picture, title, body) {
    // A post entry.
    const postData = {
        author: username,
        uid: uid,
        body: body,
        title: title,
        starCount: 0,
        authorPic: picture,
    };

    // Get a key for a new Post.
    const newPostKey = firebase.database().ref().child("posts").push().key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
    updates["/posts/" + newPostKey] = postData;
    updates["/user-posts/" + uid + "/" + newPostKey] = postData;

    return firebase.database().ref().update(updates);
}
