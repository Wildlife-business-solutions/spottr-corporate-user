import { Div, Img, SpottrP } from "GlobalStyles/spotrrStyles/style";
import React from "react";
import { DpBox, ProfileFormContainer } from "./style";
import userDp from "assets/maskdp1.png";
import alertCircle from "assets/svg/alertCircle.svg";
import { Input } from "GlobalStyles/spotrrStyles/style";
import AlertCircle from "assets/svg/alertCircle.svg";

function UserProfileForm({ userInfo, uploadPhoto, handleChange }) {
  const imagePrev = {
    position: "absolute",
    height: "100px",
    width: "100px",
    top: "30px",
    cursor: "pointer",
    background: "red",
    borderRadius: "50%",
    opacity: 0,
  };
  return (
    <Div
      pos="relative"
      display="flex"
      backgroundColor="#fff"
      flexDirection="column"
      justify="space-around"
      alignI="center"
      padding="25px"
      width="auto"
      height="650px"
      br="8px">
      <img
        src={userInfo?.avatar}
        alt="icon"
        width="100px"
        height="100px"
        style={{ borderRadius: "50%", objectFit: "cover" }}
      />
      <small style={{ color: "#274B89", padding: "15px 0 15px 0" }}>
        Upload new photo
      </small>
      <input type="file" style={imagePrev} onChange={uploadPhoto} />
      <Div align="flex-start" padding="15px 0 12px 0">
        Contact Details
      </Div>
      <Input bg="#F8F8F8" dis="none" pcol="#C4C4C4" mar="6px 0" p="0 0 0 20px">
        <input
          name="firstName"
          type="text"
          defaultValue={userInfo?.firstName}
          placeholder="Abdul"
          onChange={handleChange}
        />
      </Input>
      <Input bg="#F8F8F8" dis="none" pcol="#C4C4C4" mar="6px 0" p="0 0 0 20px">
        <input
          name="lastName"
          type="text"
          defaultValue={userInfo.lastName}
          onChange={handleChange}
          placeholder="Mashir"
        />
      </Input>
      <Input bg="#F8F8F8" dis="none" pcol="#C4C4C4" mar="6px 0" p="0 0 0 20px">
        <input
          name="email"
          type="email"
          defaultValue={userInfo.email}
          placeholder="abul@gmail.com"
          readOnly={true}
        />
        <p
          style={{
            position: "absolute",
            top: "6px",
            right: "25px",
            color: userInfo.verified ? "#5FC146" : "#FF4B3E",
            fontSize: "9px",
          }}>
          {userInfo.verified ? "verified" : "unverified"}
        </p>
      </Input>
      <Input bg="#F8F8F8" dis="none" pcol="#C4C4C4" mar="6px 0" p="0 0 0 20px">
        <input
          type="text"
          defaultValue={userInfo.phoneNumber}
          placeholder="0903678291"
          readOnly={true}
        />
      </Input>
      <Div display="flex" margin="10px 10px 0 10px">
        <Img src={AlertCircle} alt="alert-circle" height={18} />
        <Div
          color="#274b89"
          fs="13px"
          width="100%"
          padding="0 0 0 0"
          margin="0 0 0 10px">
          Type in your correct name and use a good photo, make sure it is clear
          so that it will increases your chance of getting good gigs :)
        </Div>
      </Div>
    </Div>
  );
}

export default UserProfileForm;
