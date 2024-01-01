import media from "GlobalStyles/utils/media";
import styled from "styled-components/macro";
import Colors from "GlobalStyles/utils/appColors";
export const MenuContainer = styled.div`
  width: 280px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  max-height: 100vh;
  background: #fff;
  box-shadow: 0px 2.5865px 12.9325px rgba(0, 0, 0, 0.07);
  border-radius: 1.93988px;
  display: flex;
  flex-direction: column;
  padding: 30px 30px 0px 25px;
  // padding-left: 15px;
  // padding-right: 15px;
  transition: all 0.5s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  overflow: auto;
  ${media.tablet`
        display: none;
    `}
`;

export const MenuItem = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  width: 100%;
  padding: 12px 0;
  // margin-top:6px;
  // height: 40px;
  color: ${Colors.primary};
  border: none;
  /* background-color: transparent; */
  cursor: pointer;

  &.activeLink {
    background-color: ${Colors.grey};
    box-shadow: 0px 2.5865px 12.9325px rgba(0, 0, 0, 0.07);
    border-radius: 1px;
  }
`;
export const MenuText = styled.small`
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  margin-left: 15px;
`;

export const MenuIcon = styled.img`
  width: 22px;
  height: 22px;
  margin-left: 6px;
  margin-left: ${({ marginLeft }) => (marginLeft ? 20 : null)};
`;

export const BigMenuItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 25px 0 0 0;
  // max-height: 100vh;
  overflow-y: auto;
`;

export const MenuDropdownIcon = styled.img`
  margin-top: 10px;
  width: 10px;
  margin-left: 5px;
`;

export const MenuIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const MobileMenuContainer = styled.div`
  display: none;
  position: absolute;
  top: 0;

  img {
    cursor: pointer;
    width: 33px;
    z-index: 7;
  }

  ${media.tablet`
        /* margin-top: -15px; */
        display: flex;
        height: 50px;
        width: 100%;
        background-color: white;
        padding: 0 0 0 10px;
    `}
`;
export const UserInfoMenuContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const MenuToggleContainer = styled.div`
  position: fixed;
  left: 15px;
  top: 30px;
  z-index: 5;
  display: ${({ open }) => (open ? "none" : "")};
  cursor: pointer;
`;
