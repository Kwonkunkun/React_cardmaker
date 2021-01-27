<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->

# Card maker

-   명함을 만드는 웹페이지

---

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li><a href="#reason">프로젝트 목적</a></li>
    <li><a href="#use-tech">Use tech</a></li>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li><a href="#structure">구조 및 구현내용</a></li>
    <li><a href="#new">알게된 것</a></li>
    <li><a href="#reference">Reference</a></li>
  </ol>
</details>

---

<div id="reason"/>

## 프로젝트 목적

-   React hook의 숙련도를 늘리기 위한 프로젝트
-   firebase api, cloudinary api 학습

<!--USE TECH-->

## Use tech

<span id="use-tech">
  <img src="https://img.shields.io/badge/Javascript-orange?style=flat-square&logo=JavaScript&logoColor=white"/>
  <img src="https://img.shields.io/badge/css-blue?style=flat-square&logo=CSS3&logoColor=white"/>
  <img src="https://img.shields.io/badge/HTML-red?style=flat-square&logo=HTML5&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-blue?style=flat-square&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/ReactRouter-critical?style=flat-square&logo=React Router&logoColor=white"/>
  <img src="https://img.shields.io/badge/firebase-yellow?style=flat-square&logo=firebase&logoColor=white"/>
  <img src="https://img.shields.io/badge/Cloudinary-orange?style=flat-square&logoColor=white"/>

</span>

---

<!-- ABOUT THE PROJECT -->

## About The Project

[Demo link]()

### 초기화면

---

<div>
<img width="45%" alt="img" src="https://user-images.githubusercontent.com/59603575/105945507-c02ed900-60a8-11eb-96ee-6bb7a82a391b.png">

<img width="45%" alt="img" src="https://user-images.githubusercontent.com/59603575/105945524-c755e700-60a8-11eb-9853-fe0d2ab439e8.png">
</div>

<div>
<img width="46%" alt="img" src="https://user-images.githubusercontent.com/59603575/105945519-c58c2380-60a8-11eb-871d-4dfc189d4198.png">
<img width="45%" alt="gif" src="https://user-images.githubusercontent.com/59603575/105945799-4e0ac400-60a9-11eb-987c-ef00cf142905.gif">
</div>

-   초기화면
-   타이핑 효과, firebase auth를 이용한 로그인 효과 구현

### 카드 만드는 페이지

---

<div>
<img width="45%" alt="스크린샷 2021-01-16 오후 4 09 47" src="https://user-images.githubusercontent.com/59603575/105945952-9f1ab800-60a9-11eb-80e2-4324282ea38b.png">
<img width="46%" alt="gif" src="https://user-images.githubusercontent.com/59603575/105945809-5400a500-60a9-11eb-96f3-7c2363c35aad.gif">
</div>

-   font color, background color, name 등등 여러 input을 입력받아 firebase realtime에 올리는 파트.
-   edit (왼쪽 컨테이너): 변경되는 사항이 있을때마다 firebase에 데이터를 씀
-   view (오른쪽 컨테이너): firebase.read.on을 이용해서 firebase에서 변경되는 사항이 있을때마다 업데이트

### Play Page (view video clicked)

---

### Mobile!!

-   아직 구현 사항 없음.

## Structure

<!--
### 전체 구조

<img width="1680" alt="스크린샷 2021-01-16 오후 4 10 08" src="https://user-images.githubusercontent.com/59603575/104806018-b8a14180-5817-11eb-87f3-ebcf11d7e917.png">

---

### Search 기능

<img width="60%" style="margin:0; padding:0;" alt="스크린샷 2021-01-16 오후 4 10 08" src="https://user-images.githubusercontent.com/59603575/104806022-bc34c880-5817-11eb-8ce1-bc1dbb7dfd07.png">

1. Search form (검색창) 입력</br>
2. App에서 PAGE state 변경 </br>
3. Search video list에서 config에 getApiData요청 </br>
4. 그 데이터를 이용해서 thumnail render

---

### Thumbnail click시 video page로 가는 기능

<img width="60%" style="margin:0; padding:0;" alt="스크린샷 2021-01-16 오후 4 10 08" src="https://user-images.githubusercontent.com/59603575/104806020-ba6b0500-5817-11eb-910c-28f2f785ac98.png">
<span style="font-size: 1.1em; margin-left:1em;">

1. Thumbnail img or container click</br>
2. App에서 PAGE state 변경 </br>
3. config에 받은 video id를 이용해서 getApiData요청 </br>
4. 그 데이터를 이용해서 video title, like 등의 데이터들을 받아와서 video contanier에서 render -->

---

<div id="new"/>

## 알게된 것

-   useEffect 학습
-   React router 학습
-   firebase auth, realtimeDataBase 사용법 학습

---

## Reference

Reference Link : </br>
[firebase](https://firebase.google.com/docs/database/web/read-and-write) </br>
[cloudinary doc](https://cloudinary.com/documentation/react_image_and_video_upload) </br>
[create react](https://create-react-app.dev)</br>
[dream coding ellie](https://academy.dream-coding.com)</br>
[typing effect](https://www.youtube.com/watch?v=T4VE_6v9hFs&t=450s)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
