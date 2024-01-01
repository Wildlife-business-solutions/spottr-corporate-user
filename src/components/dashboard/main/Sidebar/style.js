import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 90%;
  height: 100vh;
  background-color: #e7eef8;
  display: flex;
  flex-direction: column;
  padding: 70px 20px 10px 40px;
  //   opacity: 0.4;
  z-index: 5;
  transition: all 0.3s linear;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  overflow: auto;
`;

export const SideNotification = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: 75px;
  margin-top: -5px;
`;

export const Paragraph = styled.p`
  color: white;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const Menu = styled.div``;

export const NavLink = styled(Link)`
  text-decoration: none;
`;

export const LogoArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  p {
    font-size: 20px;
    cursor: pointer;
  }

  img {
  }
`;
export const FaceArea = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  img {
    border-radius: 50%;
    margin-right: 15px;
    border: 4px solid #274b89;
    width: 80px;
    border-radius: 50%;
  }

  p {
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
  }

  small {
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 150%;
    color: #929aa7;
  }
`;

export const SideMenuDiv = styled.div`
  display: flex;
  width: 100%;
  margin-top: 30px;
  /* background-color: #274B89;
        height: 40px; */

  img {
    width: 25px;
    margin-right: 20px;
  }

  p {
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #274b89;
  }

  &.activeLink {
    background-color: #274b89;
    height: 50px;
    padding: 10px;
    box-shadow: 0px 2.5865px 12.9325px rgba(0, 0, 0, 0.07);
    border-radius: 6px;
    color: white;

    p {
      color: white;
    }
  }
`;

export const CorporateTitle = styled.div`
  margin-top: 100px;
`;

export const AddNewProductContainer = styled.div`
  width: 100%;
  padding: 15px;
  background: #274b89;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  margin-top: 25px;
`;
