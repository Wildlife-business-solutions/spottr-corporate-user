import React, { useState } from "react";
import axios from "axios";
import Toast from "components/UI/Toast";
import { DASHBOARDHOME } from "utilities/static/route-const";
import {
  PUTPROFILE,
  PUTPROFILEURL,
  PUTPROFILECONTACT,
} from "utilities/static/routes/backend";
import { Div, Input, Img, SpottrLink } from "GlobalStyles/spotrrStyles/style";
import { ProfileBody, MapArea, Tag } from "./style";
import { Button } from "GlobalStyles/spotrrStyles/style";
import Catalog from "assets/svg/catalog.svg";
import backArrow from "assets/svg/backArrow.svg";
import BarCode from "assets/svg/barcode.svg";
import TagImage from "assets/tag.png";
import { useSelector } from "react-redux";
import Divider from "GlobalStyles/dividerLine";
import { useLocation } from "react-router-dom";

const Profile2 = () => {
  const profileImage = {
    position: "absolute",
    height: "135px",
    width: "135px",
    borderRadius: "50%",
    border: "3px solid #C2E0FF",
    left: "25px",
    bottom: "-10px",
    objectFit: "cover",
  };

  const uploadButton = {
    position: "absolute",
    left: "0px",
    width: "100%",
    height: "100%",
    opacity: 0,
    cursor: "pointer",
  };
  const { search } = useLocation();
  const { profile } = useSelector((state) => state.corporatUserDetails);
  const { data } = useSelector((state) => state.authorize);
  const [userInfo, setUserInfo] = useState(data);

  const uploadPhoto = (evt) => {
    const reader = new FileReader();
    const file = evt.target.files[0];
    reader.onloadend = () => {
      let url = URL.createObjectURL(file);
      setUserInfo({ ...userInfo, profileUrl: url });
      axios
        .put(PUTPROFILEURL, {
          profileUrl: userInfo.profileUrl,
        })
        .then((res) => {
          const { data } = res.data;
        }, [])
        .catch((err) => console.log(err));
    };
    reader.readAsDataURL(file);
  };

  // upload multiple files
  const [selectedFiles, setSelectedFiles] = useState([]);
  let MAX_LENGTH = 3;

  const handleImageChange = (e) => {
    if (e.target.files.length > MAX_LENGTH) {
      e.preventDefault();
      return (
        <Toast
          icon="error"
          description={`Cannot upload files more than ${MAX_LENGTH}`}
          showModal={true}
        />
      );
    } else {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
  };

  const renderPhotos = (source) => {
    return source.map((photo) => {
      return (
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "5px",
            margin: "0 5px",
          }}
          src={photo}
          alt=""
          key={photo}
        />
      );
    });
  };

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleFinish = () => {
    axios
      .put(PUTPROFILE, {
        firstName: userInfo?.firstName,
        lastName: userInfo?.lastName,
        username: userInfo?.username,
      })
      .then((res) => {
        const { data } = res.data;
      }, [])
      .catch((err) => console.log(err));
  };

  const handleBioSave = () => {
    axios
      .put(PUTPROFILECONTACT, {
        bio: userInfo.bio,
      })
      .then((res) => {
        const { data } = res.data;
      }, [])
      .catch((err) => console.log(err));
  };

  return (
    <ProfileBody>
      <Div
        display="flex"
        justify="space-between"
        alignI="center"
        padding="30px 0">
        <SpottrLink to={DASHBOARDHOME}>
          <Div width="100px" display={"flex"}>
            <img src={backArrow} alt="icon" />
            <p
              style={{
                fontSize: "18px",
                color: "#274889",
                marginLeft: "15px",
              }}>
              Go back
            </p>
          </Div>
        </SpottrLink>
        {search !== "?profile" && (
          <Button
            fw="bold"
            fs="18px"
            color="#275b89"
            bc="#00000000"
            onClick={() => handleFinish()}>
            Finish
          </Button>
        )}
      </Div>

      <Div gap="20px" display="flex" width="100%" justify="space-between">

      <Div backgroundColor="#fff" padding="0 0 25px 0" width="50%">
          <MapArea>
            <iframe
              title="map"
              height="230"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=spottr&t=k&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            />
            <img
              // src={userInfo?.avatar}
              src={search === "?profile" ? profile?.image : userInfo?.avatar}
              style={profileImage}
              alt="spottr user dp"
            />
          </MapArea>
          <Div padding="25px 35px">
            <Div display="flex" justify="space-between" alignI="flex-start">
              <Div>
                <Div fs="25px" color="#274B89" fw="bold">
                Abdul, Mashir
                </Div>
                <Div fs="13px" color="#929AA7">
                  {search === "?profile"
                    ? profile.username
                    : "@" + userInfo?.username}
                </Div>
              </Div>
              <Div display="flex" flexDirection="column">
                <Tag color="#274B89" bgcolor="rgba(227, 232, 240, 0.51)">
                  <Img src={TagImage} width={16} height={16} />
                  5,786 items sold
                </Tag>
                <Tag
                  color="#E09B09"
                  bgcolor="rgba(255, 178, 17, 0.15)"
                  mg="10px 0 0 0">
                  4,567 people rated
                </Tag>
              </Div>
            </Div>
            <Div margin="35px 0 0 0" backgroundColor="#F8F8F8">
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
              I’ve worked directly, indirectly with these brands Either part time, full time, campaign, accelerator, branding or product design)
            </Div>
            
            <Div margin="15px 0">
            <Div margin="35px 0px 35px 0px" display="flex" justify="space-between" alignI="center">
              <Button
                fw="bold"
                color="#275b89"
                bc="#ecf7ff"
                
                fs="15px"
                style={{ cursor: "pointer", padding:"10px 30px" }}>
                Call
              </Button>
              <Button
                fw="bold"
                color="#275b89"
                bc="#ecf7ff"
                
                fs="15px"
                style={{ cursor: "pointer", padding:"10px 30px" }}>
                Message
              </Button>
              <Button
                fw="bold"
                color="#275b89"
                bc="#ecf7ff"
                
                fs="15px"
                style={{ cursor: "pointer", padding:"10px 30px" }}>
                My Barcode
              </Button>
            </Div>
              <Div ta="left" color="rgba(0, 0, 0, 0.7)" fw="bold" fs="14px">
                Catalog
              </Div>
              <Div
                pos="relative"
                display="flex"
                alignI="center"
                padding="8px 0 0 0"
                style={{ overflowX: selectedFiles.length > 3 && "hidden" }}>
                <Div
                  display="flex"
                  justify="space-between"
                  alignI="center"
                  height="209px"
                  width="105px"
                  br="5px">
                  {renderPhotos(selectedFiles)}
                </Div>
                <Div
                  style={{ left: "23%", cursor: "pointer" }}
                  pos="absolute"
                  backgroundColor="rgba(39, 75, 137, 0.1)"
                  color="#274B89"
                  width="172px"
                  height="53px"
                  br="5px"
                  border="1px solid rgba(110, 133, 174, 0.5)"
                  fs="14px"
                  fw="bold"
                  display="flex"
                  justify="space-around"
                  alignI="center">
                  <img src={Catalog} alt="Catalog" />
                  <input
                    type="file"
                    style={uploadButton}
                    multiple
                    onChange={handleImageChange}
                  />
                  <p>Upload Catalog</p>
                </Div>
              </Div>
            </Div>
         
          </Div>
        </Div>

        <Div backgroundColor="#fff" padding="0 0 20px 0" width="50%">
          
          <Div padding="25px 35px">
                <Img src={BarCode} alt="alert-circle" width={"100%"} />
            
            <Div fs="20px" padding="20px" color="#274B89" fw="bold">
            Share Adbul’s profile
            </Div>            

            <Divider />
            <Div fs="20px" color="#274B89" padding="20px" fw="bold">
            Block this user
            </Div>            
            <Divider />
          <Div gap="20px" padding="25px" display="flex" width="100%" justify="space-between">

                <Div  width="50%">
                <Tag color="#274B89" fontSize={14}>
                  <Img src={TagImage} width={16} height={16} />
                  Write Feeback
                </Tag>
                </Div>
                <Div  width="50%">
                <Tag color="#274B89">
                  <Img src={TagImage} width={16} height={16} />
                  Report
                </Tag>
                </Div>
            </Div>
          </Div>

        </Div>
        
      </Div>
    </ProfileBody>
  );
};

export default Profile2;
