import React from "react";
import { UploadImagesDiv } from "./style";
import ImageIcon from "assets/svg/addProductImageIcon.svg";

export default function UploadImages({ handleFile, setIsDisabled, myUploads }) {
  React.useEffect(() => {
    setIsDisabled(false);
  }, []);

  return (
    <UploadImagesDiv>
      <p>
        Click on the camera icon to add an image for your new service. You can
        add a maximum of 3 images.
      </p>
      <img src={ImageIcon} alt="icon" />
      <small>
        {myUploads.length === 0
          ? `Upload Images`
          : myUploads.length > 3
          ? `Maximum uploads allowed(3)`
          : `${myUploads.length}/3 Images Uploaded`}
      </small>
      <input
        disabled={myUploads.length === 3}
        multiple
        onChange={handleFile}
        type="file"
        accept="image/png, image/jpeg, image/gif, image/jpg"
      />
    </UploadImagesDiv>
  );
}
