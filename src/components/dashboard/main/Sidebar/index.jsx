import React from "react";
import {
  AddNewProductContainer,
  Container,
  CorporateTitle,
  FaceArea,
  LogoArea,
  Menu,
  SideNotification,
} from "./style";
import Logo from "assets/svg/logo.svg";
import Bell from "assets/svg/bellIcon.jpg";
import Message from "assets/svg/messageIcon.svg";
import {
  CompanyName,
  CorporateHeader,
  NotificationIcon,
} from "pages/dashboard/main/dashboardHeader/style";
import SideMenu from "./sideMenu";
import { AddNewCategories } from "../../../../pages/dashboard/main/dashboardHeader/style";
import { useCorporateProduct } from "../../../../context/addProduct";
import { useCorporateMenu } from "context/corporateMenu";
import { useSelector } from "react-redux";

const Sidebar = ({ open, setOpen }) => {
  const { corporateProduct, setCorporateProduct } = useCorporateProduct();
  const { corporateMenu, setCorporateMenu } = useCorporateMenu();
  const { data } = useSelector((state) => state.authorize);

  function productModal() {
    setCorporateProduct({
      ...corporateProduct,
      showProductModal: true,
    });
  }
  function onActiveClick(name) {
    setCorporateMenu(() => {
      const menu = corporateMenu.map((men) => {
        if (name === men.text) {
          return {
            ...men,
            isActive: true,
          };
        } else {
          return {
            ...men,
            isActive: false,
          };
        }
      });
      return [...menu];
    });
  }
  return (
    <Container open={open}>
      <LogoArea>
        <img src={Logo} alt="ime" />
        <p onClick={() => setOpen(false)}>x</p>
      </LogoArea>
      <FaceArea>
        <img src={data?.profileUrl} alt="looks" />
        <div>
          <p>{data?.brandName} </p>
          <small>@{data?.username} </small>
        </div>
      </FaceArea>
      <SideNotification>
        <NotificationIcon src={Bell} alt="not" />
        <NotificationIcon src={Message} alt="not" />
      </SideNotification>
      <Menu>
        {corporateMenu.map((menu, i) => (
          <SideMenu
            key={i}
            setOpen={setOpen}
            link={menu.link}
            name={menu.text}
            onActiveClick={onActiveClick}
            isActive={menu.isActive}
            icon={menu.isActive ? menu.icon : menu.iconActive}
            text={menu.text}
          />
        ))}
      </Menu>
      <AddNewProductContainer>
        <AddNewCategories
          style={{ fontSize: "18px", color: "white" }}
          onClick={() => {
            setOpen(false);
            productModal();
          }}>
          + add new category
        </AddNewCategories>
      </AddNewProductContainer>
      <CorporateTitle>
        <CorporateHeader>Corporate Account</CorporateHeader>
        <CompanyName>{data?.brandName}</CompanyName>
      </CorporateTitle>
    </Container>
  );
};

export default Sidebar;
