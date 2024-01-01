import React from 'react'
import {useCorporateProduct} from 'context/addProduct';
import headerMenuCData from 'pages/dashboard/main/dashboardHeader/menu';
import RandomSingle from './randomsingle';
import {Button, Div, Img} from 'GlobalStyles/spotrrStyles/style'
import {RandomMobileMenuContainer} from './style'
import Colors from 'GlobalStyles/utils/appColors';
import AddWhite from "assets/svg/addwhite.svg";

function RandowMobileMenu() {
    const {corporateProduct, setCorporateProduct} = useCorporateProduct();

    function productModal() {
        setCorporateProduct({
            ...corporateProduct,
            showProductModal: true,
        });
    }

    return (
        <RandomMobileMenuContainer>
            <Div width="400px" display="flex" wrap="wrap" alignI="center">
                {headerMenuCData.map((menu, i) => (
                    <RandomSingle
                        key={i}
                        text={menu.text}
                        link={menu.link}
                        icon={menu.icon}
                        // handleCLickedActive={() => setSubHeaderMenu(i)}
                        // Active={subHeaderMenu === i ? "menu-active" : null}
                    />
                ))}
            </Div>
            <Button
                style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}
                p="10px 8px"
                w="100px"
                br="3px"
                bc={Colors.primary}
                color={Colors.white}
                onClick={productModal}
            >
                <Img src={AddWhite} alt="Message"/> Add New
            </Button>

        </RandomMobileMenuContainer>
    )
}

export default RandowMobileMenu
