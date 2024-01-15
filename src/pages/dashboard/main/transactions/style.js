import media from "GlobalStyles/utils/media";
import styled from "styled-components/macro";

export const TableRowDiv = styled.tr`
  background-color: ${({ bg }) => bg};
  width: 100%;
  opacity: ${({ status }) => (status === "Blacklisted" ? 0.4 : 1)};
  transition: background 0.3s ease-in-out;
  position: relative;
  cursor: pointer;

  td {
    align-items: center;
    text-align: center;
    border: 1px solid transparent;
  }
  .tdstyle {
    width: 400px;
    padding: 20px;
    text-align: center;
  }
  &:hover {
    // background: green;
    background: hsla(210, 100%, 88%, 0.3);
  }
`;
export const TransactionDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 3px 10px;
  border-bottom: 1px solid #e5e5e5;

  img {
    width: 21px;
    height: 21px;
  }
`;
export const TableDiv = styled.div`

    table {
        border-collapse: collapse;
        width: 100%;

        
    }

    th, td {
        padding: 5px 7px;
        font-size: 13px;
        text-align: center;
        // margin-top: 20px;
    }

    td{
        // width: 200px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        // margin: 0;
        // resize: horizontal;
    }


    // table{
    //     width: 100%;
    //     margin-top: 10px;
    //     font-size: 12px;
    //     position: relative;
    //     // border-collapse: collapse

    //     thead{
    //         font-weight: bold;
    //         margin-bottom: 10px;
    //     }

    //     ${media.tablet`
    //         min-width: 1000px;
    //     `}

    //     tbody{
    //         background-color: #F6F6F6;
    //         // border-spacing: 5px 10px;
    //     }
    }
`;

export const BarchartArea = styled.div`
  // height: 580px;
  // width: 500px;
  margin-top: 35px;
  // overflow: auto;
  // margin-left: -30px;
`;

export const TransactionContainer = styled.div`
  width: 1200px;
  // padding: 10px;
  display: flex;
  padding-top: 15px;
  // background: red;

  ${media.tablet`
        flex-direction: column;
    `}
`;

export const TransHistory = styled.div`
  width: 60%;
  padding-right: 15px;
  border-right: 2px solid #ececec;

  ${media.tablet`
        width: 100%;
        overflow: auto;
        border-right: none;
    `}
`;

export const TransDetails = styled.div`
  width: 40%;
  padding-left: 40px;

  ${media.tablet`
        width: 100%;
    `}
`;

export const TransTopic = styled.div`
  p {
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #000000;
  }

  small {
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 150%;
    color: #929aa7;
  }

  ${media.tablet`
        justify-content: flex-start;
        margin-right: 20px;
    `}
`;

export const TransDetailsDiv = styled.div`
  width: 100%;
  padding: 0 10px;

  h2 {
    color: #274b89;
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 29.6299px;
    line-height: 40px;
    display: flex;
    align-items: center;
  }
`;
export const DetailsHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: relative;

  div {
    display: flex;
    align-items: center;

    p {
      margin-left: 10px;
      color: #39b54a;
    }
  }

  .settstyle {
    position: absolute;
    right: 0px;
    top: -45px;
    cursor: pointer;
    transition: 0.4s;

    p {
      color: #274b89;
      font-weight: bold;
    }

    &:hover {
      opacity: 0.6;
    }
  }
`;

export const DetailsDivArea = styled.div`
  margin-top: 25px;

  p {
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 9.87662px;
    line-height: 13px;
    color: #929aa7;
  }

  h3 {
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 14.8149px;
    line-height: 20px;
    color: #274b89;
  }
`;

export const DetailsSpread = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.div`
  width: ${({ wd }) => (wd ? wd : "100%")};
  color: ${({ color }) => (color ? color : "#274b89")};

  div {
    display: ${({ dis }) => (dis ? dis : null)};
    margin: 20px 0;
    border: none;
    height: ${({ hg }) => (hg ? hg : "60px")};
    border-radius: 5px;
    background: ${({ bg }) => (bg ? bg : null)};
    cursor: pointer;
    font-size: 16px;
    padding-right: 20px;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    margin: ${({ mar }) => (mar ? mar : "20px 0")};
    height: ${({ hg }) => (hg ? hg : "60px")};
    border: 1px solid transparent;
    border-radius: 5px;
    font-family: Nunito;
    font-size: 16px;
    padding-left: 20px;
    background: ${({ bg }) => (bg ? bg : null)};
    transition: 0.4s;
    color: #274b89;

    &::placeholder {
      font-family: Nunito;
      font-size: 16px;
      color: ${({ pcol }) => (pcol ? pcol : "#C4C4C4")};
    }

    &:focus {
      border-color: #274b89;
    }
  }

  p {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
    padding-left: 20px;
    color: #c4c4c4;
  }
`;

export const PaymentTypeBody = styled.div`
  width: 400px;
  // height: 30px;
  margin: 20px auto 0 auto;
  // background: red;

  h4 {
    padding-top: 30px;
    color: #274b89;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const InputAmountBody = styled.div`
  padding-top: 20px;

  input[type="number"] {
    appearance: none;
  }
`;
