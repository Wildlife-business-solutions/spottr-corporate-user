import styled from "styled-components/macro";
import background from "../../assets/urban_city_-_background_for_video_conferencing.svg";
import background_young_girl from "../../assets/young-girl-background.svg";

export const BottomFooter = styled.div`
  display: flex;
  position: absolute;
  display: flex;
  width: 90%;
  z-index: 100;
  justify-content: flex-end;
  bottom: 20px;
  padding: 0px 30px;
  .ready-sub {
    font-weight: 700;
    font-size: 20px;
    line-height: 158.8%;
    margin-left: 20px;
    text-decoration: none;

    color: #ffffff;
  }
`;

export const HomeWrapper = styled.div`
  &.home1 {
    background: #102954;
  }
  &.home2 {
    background: rgb(249, 209, 66);
  }
  &.home3 {
    background: url(${background});
    background-size: cover !important;
  }
  &.home4 {
    background: url(${background_young_girl});
    background-size: cover !important;
  }
  padding: 0px 60px;
  overflow: hidden !important;
  height: 100vh;

  .Home {
    padding: 0px 100px;
  }
  @media screen and (max-width: 748px) {
    .Home {
      padding: 0px 10px !important;
    }
  }
`;

export const NavbarContainer = styled.div`
  padding: 40px 100px;
  .sptr-navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (max-width: 748px) {
    &.navbar {
      padding: 40px !important;
    }
  }

  @media screen and (max-width: 620px) {
    .sptr-navbar {
      display: block !important;
    }
    .grid {
      display: grid !important;
    }
  }

  .link {
    padding: 15px 20px;
  }

  .sign-up {
    background-color: white;
    padding: 15px;
    border-radius: 40px;
    color: black;
    text-decoration: none;

    font-weight: bold;
  }

  .sign-up .link {
    color: var(--dark-blue) !important;
  }

  .login {
    padding: 15px;
    text-decoration: none;
    color: #cccccc;
    font-size: 18px;
  }

  .login:hover {
    padding: 15px;
    color: #274b89;
    text-decoration: none !important;
  }

  .nav-links {
    line-height: 53px;
    /* display: none; */
  }
`;

export const Home1Container = styled.div`
  .container {
    max-width: 1140px;
    margin: 0 auto;
  }

  .container-bg {
    background-color: #102954;
  }

  .img {
    position: absolute;
    top: 0;
    right: 0;
  }
  .flexRight {
    flex: 0 0 70%;
    padding-top: 200px;
    max-width: 50%;
  }
  .a-banner-heroImg {
    flex: 0 0 50%;

    max-width: 50%;
  }
  .captionText {
    font-size: 100px;
    font-weight: 700;
    color: #fff;
    line-height: 65px;
    font-family: "Montserrat" !important;
  }
  .poiret {
    font-family: "Montserrat" !important;
  }
  .textEffect {
    color: #e97a35 !important;
  }
  .subText {
    font-weight: 400;
    font-size: 30px;
    font-family: "Montserrat";
    line-height: 36px;
    /* font-size: 24px; */
    color: #fff;
  }

  .globeBoy {
    position: absolute;
    top: 50px;
    right: -40px;
    animation: scale 5s infinite alternate;
  }

  .globeGirl {
    position: absolute;
    left: 130px;
    bottom: 260px;
    animation: scale 5s infinite alternate;
  }
  .card1 {
    position: absolute;
    top: 0;
    left: -70px;
    animation: slideX 5s infinite alternate;
  }

  .d-flex {
    display: flex;
  }

  .card2 {
    position: absolute;
    bottom: 70px;
    left: 10px;
    animation: slideX 5s infinite alternate;
  }
  @keyframes slideX {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(50px);
    }
  }
  @keyframes scale {
    0% {
      transform: scaleX(0.8);
    }
    70% {
      transform: scaleX(-1);
    }
    100% {
      transform: scaleX(-1.2);
    }
  }
  .heroImg {
    position: absolute;
    top: 0;
    right: 0;
    height: 800px;
    z-index: -1;
  }

  .link {
    padding: 20px 25px;
  }

  .checkout:hover {
    color: var(--dark-blue) !important;
  }
  .appBox {
    justify-content: between;
    align-items: center;
    margin-top: 40px;
  }
  .s-globe {
    // display: none;
  }
  .l-app {
    color: #ffffff;
    text-decoration: none;
  }
  @media screen and (max-width: 1300px) {
    #earth {
      width: 600px;
      height: 600px;
    }
    .p-50 {
      padding-bottom: 50px;
    }
  }

  @media screen and (max-width: 1200px) {
    .p-50 {
      padding-bottom: 0px;
    }
    #earth {
      width: 550px;
      height: 550px;
    }
    .captionText {
      font-size: 70px;
    }
    .globeGirl {
      position: absolute;
      left: 70px;
      bottom: 170px;
    }
    .card2 {
      bottom: 0;
      left: 10px;
    }
    .appBox {
      width: 70%;
      margin: 50px 0;
    }
    .a-100 {
      height: 100%;
    }
    .p-50 {
      padding-top: 0px !important;
    }
    .globeHomeImg {
      height: 100%;
      width: 100%;
    }
    .globeBoy {
      top: 70px;
      right: 0px;
    }
    .globeHome {
      position: absolute;
      /* height: 100%; */
      right: -15px;
    }
  }

  @media screen and (max-width: 1000px) {
    #earth {
      width: 500px;
      height: 500px;
    }
    .flexRight {
      padding-top: 30px;
    }
    .captionText {
      padding-top: 50px;
    }
    .heroImg {
      height: 700px;
    }

    .card1 {
      position: absolute;
      top: 0;
      left: -100px;
    }
    .card2 {
      left: 0;
    }
    .appBox {
      width: 70%;
      margin-top: 50px;
    }
    .globeHome {
      right: -10px;
    }
  }

  @media screen and (max-width: 900px) {
    #earth {
      width: 500px;
      height: 500px;
    }
    .appBox {
      width: 50%;
    }
    .s-globe {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
    }

    .heroImg {
      display: none;
    }
    .captionText {
      font-size: 58px;
      line-height: 40px;
    }

    .subText {
      margin-top: 40px;
      width: 100%;
      line-height: 27px !important;
      font-size: 18px !important;
    }

    .a-banner-heroImg {
      display: none;
    }
    .flexRight {
      z-index: 3;
      padding-top: 0;
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  @media screen and (max-width: 600px) {
    .appBox {
      width: 80%;
    }

    #earth {
      width: 400px;
      height: 400px;
    }
    .s-globe {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }
`;

export const Home2Container = styled.div`
  .dog_img{
    position: absolute;
  }

  .textEffect{
    color: #061E48!important;

  }
  .left_content{
    width: 45%;
    position: relative;
  }

  .flexRight {
    width:70%;
    // padding-top: 100px;
    margin-top: 100px;
}
  }
  
  .captionText {
    font-size: 10vw;
    font-weight: 700;
    color: #000000;
    line-height: 90px;
    font-family: "Sora";
  }
 
  .subText {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;
    color: #5E3023;
    
  }

  .globeBoy {
    position: absolute;
    top: 50px;
    right: -40px;
    animation: scale 5s infinite alternate;
  }

  .globeGirl {
    position: absolute;
    left: -150px;
    animation: scale 5s infinite alternate;
  }
  .card1 {
    position: absolute;
    top: 0;
    left: -70px;
    animation: slideX 5s infinite alternate;
  }


  .card2 {
    position: absolute;
    bottom: 70px;
    left: 10px;
    animation: slideX 5s infinite alternate;
  }
  @keyframes slideX {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(50px);
    }
  }
  @keyframes scale {
    0% {
      transform: scaleX(0.8);
    }
    70% {
      transform: scaleX(-1);
    }
    100% {
      transform: scaleX(-1.2);
    }
  }
 
  @media screen and (max-width: 748px) {
    .appBox {
      width: 80%;
    }
    .left_content{
      display:none!important  ;
    }
  }

  @media screen and (max-width: 920px) {
    .flexRight{
      width:82%
    }
  }
  @media screen and (max-width: 620px) {
    .flexRight{
      width:100%;
    }
  }

 
  .appBox {
    margin-top: 60px;
    justify-content: between;
    align-items: center;
  }
  .s-globe {
    // display: none;
  }
  .l-app {
    color: #ffffff;
    text-decoration: none;
  }
`;

export const Home3Container = styled.div`

  .img {
    position: absolute;
    top: 0;
    right: 0;
  }
  .flexRight {
    padding-top: 100px;
    width:60%;
}
  }
  .a-banner-heroImg {
    flex: 0 0 50%;

    max-width: 50%;
  }
  .captionText {
    // font-size: 100px;
    // font-weight: var(--black);
    // color: #000000;
    // line-height: 98%;
    // text-align: end;
    // color:#ffffff;
    // font-family: "Sora";
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 90px;
    line-height: 98%;
    /* display: flex; */
    align-items: center;
    text-align: right;
    letter-spacing: -5px;
    color: #FFFFFF;
}
  }
  .poiret {
    font-family: "Poiret One", cursive;
  }
  .discover_txt{
  //   font-weight: 400;
  // font-size: 30px;
  // margin-right:50px;
  // line-height: 36px;
  // /* identical to box height, or 120% */

  // text-align: right;

  // color: #FFFFFF;

  font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;
    text-align: right;
    color: #FFFFFF;
  }
  .subText {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 98%;
    /* display: flex; */
    align-items: center;
    text-align: right;
    letter-spacing: -3px;
    color: #167987;
  }

  .globeBoy {
    position: absolute;
    top: 0px;
    right:20rem
    animation: scale 5s infinite alternate;
  }

  .globeGirl {
    position: absolute;
    left: 130px;
    bottom: 260px;
    animation: scale 5s infinite alternate;
  }
  .card1 {
    position: absolute;
    top: 40px;
    left: -70px;
    animation: slideX 5s infinite alternate;
  }

  .d-flex {
    display: flex;
  }

  .card2 {
    position: absolute;
    bottom: 70px;
    left: 10px;
    animation: slideX 5s infinite alternate;
  }
  @keyframes slideX {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(50px);
    }
  }
  @keyframes scale {
    0% {
      transform: scaleX(0.8);
    }
    70% {
      transform: scaleX(-1);
    }
    100% {
      transform: scaleX(-1.2);
    }
  }
  .heroImg {
    position: absolute;
    top: 0;
    right: 0;
    height: 800px;
    z-index: -1;
  }

 
  .appBox {
    margin-top: 50px;
    justify-content: center;
    align-items: center;
    width: 148%;

  }
  .s-globe {
    // display: none;
  }
  .l-app {
    color: #ffffff;
    text-decoration: none;
  }
`;

export const Home4Container = styled.div`
  
  .flexRight {
    width:60%
    padding-top: 100px;
    margin-top:12rem
}
  }
  
  .captionText {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 90px;
    line-height: 98%;
    display: flex;
    align-items: center;
    letter-spacing: -5px;
    color: #FFFFFF;
  }
 
  .subText {
    font-size: 30px;
    line-height: 36px;
    margin-top:40px;
    color: #ffffff;
  }

  .globeBoy {
    position: absolute;
    top: 50px;
    right: -40px;
    animation: scale 5s infinite alternate;
  }

  .globeGirl {
    position: absolute;
    left: -150px;
    animation: scale 5s infinite alternate;
  }
  .card1 {
    position: absolute;
    top: 0;
    left: -70px;
    animation: slideX 5s infinite alternate;
  }


  .card2 {
    position: absolute;
    bottom: 70px;
    left: 10px;
    animation: slideX 5s infinite alternate;
  }
  @keyframes slideX {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(50px);
    }
  }
  @keyframes scale {
    0% {
      transform: scaleX(0.8);
    }
    70% {
      transform: scaleX(-1);
    }
    100% {
      transform: scaleX(-1.2);
    }
  }
 

 
  .appBox {
    margin-top: 60px;
    justify-content: between;
    align-items: center;
  }
  .s-globe {
    // display: none;
  }
  .l-app {
    color: #ffffff;
    text-decoration: none;
  }
`;
