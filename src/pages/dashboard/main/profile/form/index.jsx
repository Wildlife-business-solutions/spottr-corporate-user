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
      height="auto"
      br="8px">
      <img
        src={userInfo?.avatar}
        alt="icon"
        width="100px"
        height="100px"
        style={{ borderRadius: "50%", objectFit: "cover" }}
      />
      <small style={{ color: "#274B89", padding: "15px 0 15px 0" }}>
        Upload new brand image
      </small>
      <input type="file" style={imagePrev} onChange={uploadPhoto} />
      <Div align="flex-start" padding="15px 0 12px 0">
        Company Details
      </Div>
      <Input bg="#F8F8F8" dis="none" pcol="#C4C4C4" mar="6px 0" p="0 0 0 20px">
        <input
          name="firstName"
          type="text"
          defaultValue={userInfo?.firstName}
          placeholder="Brand Name"
          onChange={handleChange}
        />
      </Input>
      <Input bg="#F8F8F8" dis="none" pcol="#C4C4C4" mar="6px 0" p="0 0 0 20px">
        <input
          name="lastName"
          type="text"
          defaultValue={userInfo.lastName}
          onChange={handleChange}
          placeholder="Contact email"
        />
      </Input>
      <Input bg="#F8F8F8" dis="none" pcol="#C4C4C4" mar="6px 0" p="0 0 0 20px">
        <input
          name="email"
          type="email"
          defaultValue={userInfo.email}
          placeholder="Contact phone"
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
      <Div margin="20px 0 20px 0" width="100%" backgroundColor="#F8F8F8">
              <Div
                color="#000"
                display="flex"
                justify="space-between"
                padding="10px 8px 8px 8px">
                <h5 style={{ color: "rgba(0, 0, 0, 0.7)", fontWeight: 800 }}>
                  Brief Info:
                </h5>
                <p
                  style={{
                    fontSize: "10px",
                    fontWeight: 800,
                    color: "#274889",
                  }}>
                  {userInfo.bio ? userInfo.bio.length : 0}/200
                </p>
              </Div>
              <Input
                mar="0"
                col="#929AA7"
                wd="100%"
                hg="100px"
                pcol="hsla(218, 11%, 61%, 1)">
                <textarea
                  maxLength="200"
                  type="text"
                  onChange={handleChange}
                  name="bio"
                  value={userInfo.bio}
                  style={{ fontSize: "12px", padding: "8px", resize: "none" }}
                />
              </Input>
            </Div>

            <Input bg="#F8F8F8" dis="none" pcol="#C4C4C4" mar="6px 0" p="0 0 0 20px">
        <input
          name=""
          type="text"
          
          placeholder="Food Items"
          
        />
        <p
          style={{
            position: "absolute",
            top: "6px",
            right: "25px",
            color: "#5FC146",
            fontSize: "9px",
          }}>
          Change Category
        </p>
      </Input>
            <Input bg="#F8F8F8" dis="none" pcol="#C4C4C4" mar="6px 0" p="0 0 0 20px">
        <input
          name=""
          type="text"
          
          placeholder="Food stuffs, Food Items"
          
        />
      </Input>
            <Input bg="#F8F8F8" dis="none" pcol="#C4C4C4" mar="6px 0" p="0 0 0 20px">
        <input
          name=""
          type="text"
          
          placeholder="Change location"
          
        />
      </Input>
      
    </Div>
  );
}

export default UserProfileForm;
