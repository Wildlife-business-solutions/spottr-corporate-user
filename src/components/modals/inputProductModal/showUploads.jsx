import React from "react";
import { RestartDiv, ShowUploadsDiv, UploadDiv } from "./style";
import { Div } from "GlobalStyles/spotrrStyles/style";

export default function ShowUploads({
  images,
  setIsDisabled,
  handleFile,
  myUploads,
}) {
  React.useEffect(() => {
    setIsDisabled(false);
  }, []);

  return (
    <ShowUploadsDiv>
      <RestartDiv>
        <p>{myUploads.length}/3</p>
      </RestartDiv>
      <UploadDiv>
        {images.map((image, i) => (
          <img key={i} src={image} alt="upload" />
        ))}
        {(images.length === 1 || images.length === 2) && (
          <Div className="position-relative" fs="32px">
            <label style={{ position: "absolute", top: "40%", left: "45%" }}>
              +
            </label>
            <input
              multiple
              className="fileUpload"
              onChange={handleFile}
              type="file"
              accept="image/png, image/jpeg, image/gif, image/jpg"
            />
          </Div>
        )}

        {images.length === 1 && (
          <Div className="position-relative" fs="32px">
            <label style={{ position: "absolute", top: "40%", left: "45%" }}>
              +
            </label>
            <input
              multiple
              onChange={handleFile}
              className="fileUpload"
              type="file"
              accept="image/png, image/jpeg, image/gif, image/jpg"
            />
          </Div>
        )}
      </UploadDiv>
    </ShowUploadsDiv>
  );
}
