import React, {useRef} from 'react'
import {AvatarUploadDiv, ProfileUploadDiv, UploadTitle} from "./style";
import BrandColors from "../../../GlobalStyles/utils/colors";
import AddImage from "../../../assets/svg/addimage.svg"

export default function AvatarUpload({photoUrl, handleFile}) {

    console.log(photoUrl)

    const fileUpload = useRef(null)

    const handleInputChange = () => {
        console.log(fileUpload.current.click(), "fileUpload")
    }
    return (
        <AvatarUploadDiv>
            <ProfileUploadDiv width="83px" height="83px" display="flex" justify="center" alignI="center" br="50%" bgSize={photoUrl ? "100%" : "30%"} backgroundColor={BrandColors.frenchPass} image={photoUrl ? photoUrl : AddImage} onClick={handleInputChange}/>
            <UploadTitle>
                {
                    !photoUrl ? "Upload new photo" : null
                }
            </UploadTitle>
            <input
                id="uploadFile"
                ref={fileUpload}
                disabled={photoUrl}
                multiple
                onChange={handleFile}
                type='file'
                accept="image/png, image/jpeg, image/gif, image/jpg"
            />
        </AvatarUploadDiv>
    )
}