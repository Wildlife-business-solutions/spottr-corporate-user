import styled from 'styled-components/macro'

export const AvatarUploadDiv = styled.div`

    width:100%;
    height: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    input{
        display: none;
        position: absolute;
        bottom: -5px;
        cursor:pointer;
        padding:70px;
        padding-bottom:0;
        width:300px;
        opacity:0;
    }

    img{
        height: 50px;
        width: 50px;
        margin-top: 50px;
    }
`


export const ProfileUploadDiv = styled.div`
  width: ${({ width }) => (width ? width : null)};
  height: ${({ height }) => (height ? height : null)};
  display: ${({ display }) => display};
  flex-direction: ${({ flexDirection }) => flexDirection || null};
  flex-wrap: ${({ wrap }) => wrap};
  align-items: ${({ alignI }) => alignI};
  align-self: ${({ align }) => (align ? align : null)};
  justify-content: ${({ justify }) => (justify ? justify : null)};
  background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : null};
  background-image: ${({ image }) => (image ? `url(${image})` : null)};
  background-size: ${({ bgSize }) => (bgSize ? bgSize : null)};
  background-repeat: no-repeat;
  background-position: center;
  color: ${({ color }) => (color ? color : null)};
  border: ${({ border }) => (border ? border : null)};
  border-radius: ${({ br }) => (br ? br : null)};
  border-top:${({ bbt }) => (bbt ? bbt : null)};
  border-bottom: ${({ bbm }) => (bbm ? bbm : null)};
  transition: .4s;
`;

export const UploadTitle = styled.div`
        font-family: Nunito;
        font-weight: 600;
        font-size: 12px;
        text-align: center;
        color: #274B89;
        margin-top: 10px;
        margin-bottom: 20px;
`
