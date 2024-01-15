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
import Google from "assets/svg/google.svg";
import backArrow from "assets/svg/backArrow.svg";
import greenArrowUp from "assets/greenArrowUp.png"
import redArrowDown from "assets/redArrowDown.png"
import BarCode from "assets/svg/barcode.svg";
import TagImage from "assets/tag.png";
import BarChart from "assets/mem/barchart.png";
import NigImage from "assets/nig.png";
import { useSelector } from "react-redux";
import Divider from "GlobalStyles/dividerLine";
import { useLocation } from "react-router-dom";

const Profile3 = () => {
  const profileImage = {
    
    height: "105px",
    width: "105px",
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
        
      </Div>

      <Div gap="20px" display="flex" width="100%" justify="space-between">

      <Div backgroundColor="#fff" padding="0 0 25px 0" width="50%">
      <img
              // src={userInfo?.avatar}
              src={search === "?profile" ? profile?.image : userInfo?.avatar}
              style={profileImage}
              alt="spottr user dp"
            />
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
                
                fs="12px"
                style={{ cursor: "pointer", padding:"5px 20px" }}>
                Call
              </Button>
              <Button
                fw="bold"
                color="#275b89"
                bc="#ecf7ff"
                
                fs="12px"
                style={{ cursor: "pointer", padding:"5px 20px" }}>
                Message
              </Button>
              <Button
                fw="bold"
                color="#275b89"
                bc="#ecf7ff"
                
                fs="12px"
                style={{ cursor: "pointer", padding:"5px 20px" }}>
                My Barcode
              </Button>
            </Div>
            <Divider />
              
            <Div margin="15px 0px 15px 0px" justify="space-between" alignI="center">
                <Div fs="12px" color="#929AA7" margin="0 0 10px 0">
                  Email Address
                </Div>
                <Div fs="20px" color="#274B89" fw="bold">
                    adedamolamoses@gmail.com
                </Div>
            </Div>
            <Divider />
              
            <Div margin="15px 0px 15px 0px" justify="space-between" alignI="center">
                <Div fs="12px" color="#929AA7" margin="0 0 20px 0">
                  Country
                </Div>
                <Div fs="20px" alignI="left" color="#274B89" fw="bold">

                    <Div fs="20px" color="#274B89" fw="bold">
                    <Img src={NigImage}  />
                        &nbsp;&nbsp;
                        Lagos
                    </Div>
                </Div>
            </Div>
            <Divider />
              
            <Div margin="15px 0px 15px 0px" justify="space-between" alignI="center">
                <Div fs="12px" color="#929AA7" margin="0 0 20px 0">
                  Login Type
                </Div>
                <Div fs="20px" display="flex" justify="space-between" alignI="left" color="#274B89" fw="bold">
                    <Img src={Google}  />

                    
                </Div>
            </Div>
              
            </Div>
         
          </Div>
        </Div>
      <Div backgroundColor="#fff" padding="0 0 25px 0" width="50%">
          <Div padding="25px 35px">
            <Div display="flex" justify="space-between" alignI="flex-start">
              <Div>
                <Div fs="20px" color="#274B89" >
                Performance
                </Div>
                <Div fs="11px" color="#929AA7">
                Abdul sold 450 products in the month of March, compare to February
                </Div>
                  <br/>
                <img src={BarChart} alt="icon" />

                <Div display="flex" justify="space-between">
                    <Div fs="13px" color="#929AA7" >Jan 1-2</Div>
                    <Div fs="13px" color="#929AA7" >Jan 2-5</Div>
                    <Div fs="13px" color="#929AA7" >Jan 6-7</Div>
                    <Div fs="13px" color="#929AA7" >Jan 9-11</Div>
                </Div>
                
                <Div display="flex" justify="space-between">
                    <Div fs="11px" color="#929AA7" >This Month</Div>
                    <Div fs="11px" color="#929AA7" >Last Month</Div>
                    
                </Div>
              </Div>
              
            </Div>
            <Div display="flex" margin="20px 0" justify="space-between" alignI="flex-start">
              <Div>
                <Div fs="25px" color="#274B89" >
                Performance metrics
                </Div>
                <Div fs="13px" color="#929AA7">
                Stats compare to previous month                
                </Div>
                  <br/>
                
                <Div display="flex" margin="" justify="space-between" width="100%">
                    <Div alignI="">
                        <Div fs="13px" fw="bold" color="#929AA7">Sales</Div>
                        <Div fs="35px" fw="bold" color="#274B89" >495</Div>
                        <Div fs="10px" color="#929AA7"><img src={greenArrowUp} width={15} alt="icon" /> 14%</Div>
                    </Div>
                    <Div alignI="">
                        <Div fs="13px" fw="bold" color="#929AA7">Products</Div>
                        <Div fs="35px" fw="bold" color="#274B89" >38</Div>
                        <Div fs="10px" color="#929AA7"><img src={greenArrowUp} width={15} alt="icon" /> 78%</Div>
                    </Div>
                </Div>

                <Div display="flex" margin="30px 0" justify="space-between" width="100%">
                    <Div alignI="">
                        <Div fs="13px" fw="bold" color="#929AA7">Lists</Div>
                        <Div fs="35px" fw="bold" color="#274B89" >2</Div>
                        <Div fs="10px" color="#929AA7"><img src={redArrowDown} width={15} alt="icon" /> 87%</Div>
                    </Div>
                    <Div alignI="">
                        <Div fs="13px" fw="bold" color="#929AA7">Rating</Div>
                        <Div fs="35px" fw="bold" color="#274B89" >4.5</Div>
                        <Div fs="10px" color="#929AA7"><img src={greenArrowUp} width={15} alt="icon" /> 78%</Div>
                    </Div>
                </Div>

                
              </Div>
              
            </Div>
            
         
          </Div>
        </Div>
      <Div backgroundColor="#fff" padding="0 0 25px 0" width="50%">
          <Div padding="25px 35px">
            <Div fs="20px" color="#274B89" >
            Sales Highlights
            </Div>
                <Div display="flex" margin="20px 0" justify="space-between">
                    <Div>
                        <Div fs="15px" fw="bold" color="#3B3B3BB2">5769</Div>
                        <Div fs="10px" fw="bold" color="#929AA7">Coca-cola</Div>
                    </Div>
                    <Div>
                        <Div fs="10px" fw="bold" color="#FF0000B2">-63.8%</Div>
                    </Div>
                </Div>
                <Div display="flex" margin="20px 0" justify="space-between">
                    <Div>
                        <Div fs="15px" fw="bold" color="#3B3B3BB2">30</Div>
                        <Div fs="10px" fw="bold" color="#929AA7">Fanta</Div>
                    </Div>
                    <Div>
                        <Div fs="10px" fw="bold" color="#39B54A">+8%</Div>
                    </Div>
                </Div>
                <Div display="flex" margin="20px 0" justify="space-between">
                    <Div>
                        <Div fs="15px" fw="bold" color="#3B3B3BB2">5769</Div>
                        <Div fs="10px" fw="bold" color="#929AA7">Coca-cola</Div>
                    </Div>
                    <Div>
                        <Div fs="10px" fw="bold" color="#FF0000B2">-63.8%</Div>
                    </Div>
                </Div>
                <Div display="flex" margin="20px 0" justify="space-between">
                    <Div>
                        <Div fs="15px" fw="bold" color="#3B3B3BB2">30</Div>
                        <Div fs="10px" fw="bold" color="#929AA7">Fanta</Div>
                    </Div>
                    <Div>
                        <Div fs="10px" fw="bold" color="#39B54A">+8%</Div>
                    </Div>
                </Div>
            
            
            <Div margin="15px 0">
            
            <Divider />
            <Div margin="15px 0px 15px 0px" justify="space-between" alignI="center">
                <Div fs="20px" color="#fff" fw="bold">
                    adedamolamoses@gmail.com
                </Div>
                <Div fs="20px" color="#274B89" fw="bold">
                Share Adbul’s profile
                </Div>
                
            </Div>
            <Divider />
            <Div margin="15px 0px 15px 0px" justify="space-between" alignI="center">
                <Div fs="20px" color="#fff" fw="bold">
                    adedamolamoses@gmail.com
                </Div>
                <Div fs="16px" color="#FF4B3E" fw="bold">
                Blacklist this user
                </Div>
                
            </Div>
            <Divider />
              
              
            </Div>
         
          </Div>
        </Div>

        
        
      </Div>
    </ProfileBody>
  );
};

export default Profile3;
