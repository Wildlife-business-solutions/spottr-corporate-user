import React from 'react'
import PinInput from "components/UI/PinInput";
import {Button, Div, ModalSubTitle} from "GlobalStyles/spotrrStyles/style";
import Colors from "GlobalStyles/appColors";

export default function TransactionConfirmDiv(props) {
    const handleBack = () => {
        props.setPage(2);
    }

    return (
        <Div minHeight="350px">
            <Div display="flex" justify="space-between" margin="0 0 20px 0">
                <ModalSubTitle>Transaction Confirmation</ModalSubTitle>
                <Button color={Colors.primary} bc={Colors.white} onClick={handleBack}>Back</Button>
            </Div>
            <Div padding="20px 0">
                <Div fs="12px" color={Colors.primary}>Current Balance</Div>
                <Div fs="20px" color={Colors.primary}>N3,847,895</Div>
            </Div>
            <Div color={Colors.primary} fs="24px" fw="bold">Transaction PIN</Div>
            <PinInput/>
            <Div display="flex" justify="center" alignI="center" margin="50px 0">
                <Div color={Colors.grey} fs="14px" m="0 50px">Kindly input the transaction PIN to continue</Div>
            </Div>
        </Div>
    );
}
