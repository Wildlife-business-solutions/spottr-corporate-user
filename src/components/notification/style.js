import styled from "styled-components/macro";


export const NotificationBody = styled.div `
    position: absolute;
    width: 360.84px;
    height: 602px;
    padding: 50px 0;
    right: ${({left}) => left};
    top: 110px;
    background: rgba(255, 255, 255, 1);
    border-radius: 5px;
    box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.2);
    z-index:20;
    overflow-y: hidden;
`;

export const HeaderLabel = styled.h2`
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 22.3828px;
    line-height: 31px;
    margin-bottom: 10px;
    color: #274b89;
`;
export const NotificationText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 11.1914px;
    line-height: 15px;
    color: #000000;
`;

export const SortMark = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0 30px 0;
    padding: 0 30px;
`;
export const SortText = styled.p`
   color: rgba(59, 59, 59, 0.7);
   font-size: 13px;
`;
export const SortTextValue = styled.span`
  color: #274b89;
  font-style: normal;
  font-weight: bold;
  cursor: pointer;
  font-size: 13px;
  transition: color .3s ease-in-out;

  &:hover{
    color: hsla(218, 56%, 35%, 0.7);
  }
`;
export const MarkasreadText = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  color: #274b89;
  cursor: pointer;
  font-size: 14px;
  transition: color .3s ease-in-out;

  &:hover{
    color: hsla(218, 56%, 35%, 0.7);
  }
`;

export const userDpContainer = styled.div `
    // display:flex;
    // flex-wrap:wrap;
    position: relative;
`;
/* export const UserDp = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`; */

export const UserStatusIndicator = styled.div `
  position: absolute;
  top: 45px;
  left: 60px;
  img{
    height: 13px;
    width: 13px;
  }
`;
export const AgoText = styled.span`
  font-size: 10px;
  color: ${({color}) => color || null };
`;

 export const MessageTextContainer =styled.div `
  width: 240px;
  display: flex;
  flex-direction: column;
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  line-height: 17px;
  font-size: 14px;
  color: #274b89;
`;

export const Spacer = styled.div`
  // flex: 1;
`;
export const TextBottom = styled.p`
  color:${({color}) => color || null };
  font-size: ${({size}) => size || "12px"};
`;
export const NotificationItemContainer = styled.div `
    display: flex;
    margin-top: 10px;
    justify-content:space-between;
    align-items: center;
    cursor: pointer;
    position: relative;
    padding: 10px 30px 10px 30px;
    border: ${({ brd }) => brd ? brd: null};
    border-radius: ${({ brr }) => brr ? brr : null};
    border-top: ${({ brdt }) => brdt ? brdt : null};
    border-bottom: ${({ brdb }) => brdb ? brdb : null};
`;


  export const UserDp = styled.img `
    width: 45px;
    height: 45px;
    border-radius: 50%;
    object-fit: cover;
`;

export const UserDpContainer = styled.div `
    width:26px; 
    height: 26px;
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    align-items: center;
`;
export const UserDpContent = styled.div `
    display: flex;
    flex-wrap:wrap;
    `;

  export const NotificationItemWrapper = styled.div `
    width:100%;
    height:65%;
    overflow: scroll;
  `;

export const OpenMessages = styled.div`
    text-align:center;
    font-size: 13px;
    padding: 20px 0;
    color: #274B89;
    font-family: Nunito;
    font-weight: bold;
    cursor: pointer;
    transition: color .3s ease-in-out;

    &:hover{
      color: hsla(218, 56%, 35%, 0.7);
  }
  `;
