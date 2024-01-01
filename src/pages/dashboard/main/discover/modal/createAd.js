import React, { useState } from "react";
import AdminBackdrop from "components/UI/AdminModal";
import ModalContent from "components/UI/ModalContent";
import { Input, Div, SpottrP } from "GlobalStyles/spotrrStyles/style";
import { LoginButton } from "pages/signin/Login/style";
import Filters from "../../search/Filters";

const CreateAd = ({ show, close, olddesc = "" }) => {
  const bannerStyle = {
    height: "87px",
    borderStyle: "dotted",
    borderColor: "#274b89",
    color: "#274b89",
    borderRadius: "6px",
    margin: "15px 0",
    textalign: "center",
    // lineHeight: '87px',
    fontSize: "13px",
    padding: "20px 25px",
    cursor: "pointer",
    position: "relative",
  };

  const imagePrev = {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0",
    cursor: "pointer",
    left: "0",
    opacity: 0,
    objectFit: "cover",
  };

  const opacityStyl = {
    opacity: 1,
  };

  const [imagePreview, setImagePreview] = useState("");
  const [showBannerImage, setBannerImage] = useState(false);
  const [desc, setdesc] = useState(olddesc);

  const handledescchange = (e) => {
    setdesc(e.target.value);
  };

  const uploadPhoto = (evt) => {
    const reader = new FileReader();
    const file = evt.target.files[0];
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
    setBannerImage(true);
  };

  return (
    <AdminBackdrop handleClickAdminModal={close} showAdminModal={show}>
      <ModalContent
        close={close}
        isClosing={true}
        wd=""
        hg="730px"
        mwd="377px"
        br="23px"
        modalHeader="">
        <Div padding="10% 25px 35px 25px">
          <SpottrP color="#274B89" fs="14px" tAlign="left">
            Create an App Banner
          </SpottrP>
          <Input p="0 0 0 15px" hg="50px" mar="15px 0 10px 0">
            <input
              type="text"
              placeholder="Duration by number of hours or days"
            />
          </Input>
          <Input p="0 0 0 15px" hg="50px" mar="0 0 10px 0">
            <input type="text" placeholder="Amount(text field)" />
          </Input>
          <Filters
            wd="100%"
            title=""
            hg="50px"
            col="transparent"
            pl="20px"
            bg="#F8F8F8"
            swd="100%"
            scol="#000"
            // action={handleChangeForAdminRole}
            options={[
              "Ad type",
              "All - All pages where banner can appear",
              "Half: half of all",
              "Quarter: quarter of all",
              "Single: single",
            ]}
          />
          <Input bg="#F8F8F8" wd="100%" hg="100px" mar="10px 0">
            <textarea
              type="text"
              placeholder="Ad text"
              value={desc}
              style={{ fontSize: "12px", padding: "10px 20px", resize: "none" }}
              onChange={handledescchange}
              maxLength="300"></textarea>
          </Input>
          <SpottrP tAlign="right" color="#274b89" m="-10px 0 10px 0" fs="12px">
            {desc.length}/300
          </SpottrP>
          <Div style={bannerStyle}>
            {showBannerImage && (
              <img
                src={imagePreview}
                style={Object.assign({}, imagePrev, opacityStyl)}
                width="100%"
                height="87px"
                alt="preview"
              />
            )}
            <input type="file" style={imagePrev} onChange={uploadPhoto} />
            <p>Click here to upload a picture(Dimension : 200 x 300 px)</p>
          </Div>
          <Filters
            wd="100%"
            title=""
            hg="50px"
            col="transparent"
            pl="20px"
            bg="#F8F8F8"
            swd="100%"
            scol="#c4c4c4"
            // action={handleChangeForAdminRole}
            options={["Choose store location", "Lagos", "Nigeria", "Oyo"]}
          />
          <Div
            display="flex"
            wrap="wrap"
            justify="space-between"
            width="325px"
            margin="15px 0 0 0">
            <Input
              p="0 0 0 15px"
              mar="0 0 15px 0"
              pfs="10px"
              hg="31px"
              wd="150px"
              br="5px"
              bg="#ECF7FF">
              <input type="text" placeholder="Instagram username" />
            </Input>
            <Input
              p="0 0 0 15px"
              mar="0 0 15px 0"
              pfs="10px"
              hg="31px"
              wd="150px"
              br="5px"
              bg="#ECF7FF">
              <input type="text" placeholder="Facebook username" />
            </Input>
            <Input
              p="0 0 0 15px"
              mar="0 0 15px 0"
              pfs="10px"
              hg="31px"
              wd="150px"
              br="5px"
              bg="#ECF7FF">
              <input type="text" placeholder="Twitter username" />
            </Input>
            <Input
              p="0 0 0 15px"
              mar="0 0 15px 0"
              pfs="10px"
              hg="31px"
              wd="150px"
              br="5px"
              bg="#ECF7FF">
              <input type="text" placeholder="Linkedin username" />
            </Input>
          </Div>
          <LoginButton bg="#274B89" wbtn="100%" mg="0 0 0 0">
            Submit
          </LoginButton>
        </Div>
      </ModalContent>
    </AdminBackdrop>
  );
};

export default CreateAd;
