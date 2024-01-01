import React, {useRef} from "react";
import {Button, Div, Img, ModalSubTitle} from "GlobalStyles/spotrrStyles/style";
import DropDown from "components/onboading/describeForm/dropDown";
import AlertCircle from "assets/svg/alertCircle.svg";
import Colors from "GlobalStyles/appColors";
import SpottrSlider from "components/UI/SpottrSlider";

export default function SetAdsDiv(props) {
    const txtBudget = useRef("");
    const txtDays = useRef("");

    const adstypes = [
        {_id: "1", name: "Map pins", subId: "1"},
        {_id: "2", name: "Product lists", subId: "2"},
        {_id: "3", name: "Call outs", subId: "3"},
        {_id: "4", name: "Top banner", subId: "4"},
        {_id: "5", name: "Main banner", subId: "5"},
        {_id: "6", name: "Map takeover", subId: "6"}];

    const handleBudgetChange = (e) => {
        props.setBudget(e.target.value * 100);
        txtBudget.current["textContent"] = "N" + (e.target.value * 100).toLocaleString();
    }

    const handleDaysChange = (e) => {
        props.setDays(e.target.value);
        txtDays.current["textContent"] = e.target.value + " Days";
    }

    return (
        <Div minHeight="400px">
            <Div>
                <Div display="flex" justify="space-between">
                    <ModalSubTitle>Set ads</ModalSubTitle>
                    <Button fs="12px" fw="bold" color={Colors.primary} bc={Colors.white} onClick={props.handleCancel}>Cancel</Button>
                </Div>
                <DropDown noText data={adstypes} placeHolder="Advert Type"/>
                <Div display="flex" margin="10px 10px 0 10px">
                    <Img src={AlertCircle} alt="alert-circle" height={18}/>
                    <Div color={Colors.primary} fs="12px" width="100%" padding="0 0 0 0" margin="0 0 0 10px">
                        See Preview of Advert Types
                    </Div>
                </Div>
            </Div>
            <Div margin="30px 0">
                <ModalSubTitle>Set Budget</ModalSubTitle>
                <Div
                    display="flex"
                    justify="center"
                    alignI="center">
                    <h1 ref={txtBudget} style={{color: Colors.primary}}>N0</h1>
                    <h3 style={{margin: "10px", color: Colors.grey}}>/day</h3>
                </Div>
                <SpottrSlider range={50} onChange={handleBudgetChange}/>
            </Div>
            <Div margin="30px 0">
                <ModalSubTitle>For how many days?</ModalSubTitle>
                <Div
                    display="flex"
                    justify="center"
                    alignI="center">
                    <h1 ref={txtDays} style={{color: Colors.primary}}>0 Days</h1>
                </Div>
                <SpottrSlider range={30} onChange={handleDaysChange}/>
            </Div>
        </Div>
    );
}