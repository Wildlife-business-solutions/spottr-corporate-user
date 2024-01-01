import React from 'react'
import {Button, Div, ModalSubTitle} from "GlobalStyles/spotrrStyles/style";
import Colors from "GlobalStyles/appColors";

export default function AmountConfirmDiv(props) {
    const handleBack = () => {
        props.setPage(1);
    }

    return (
        <Div minHeight="350px">
            <Div display="flex" justify="space-between" margin="0 0 20px 0">
                <ModalSubTitle>Send Cliq Token > Input amount</ModalSubTitle>
                <Button color={Colors.primary} bc={Colors.white} onClick={handleBack}>Back</Button>
            </Div>
            <Div padding="20px 0">
                <Div fs="12px" color={Colors.primary}>Current Balance</Div>
                <Div fs="20px" color={Colors.primary}>N3,847,895</Div>
            </Div>
            <Div display="flex" justify="center" alignI="center" margin="20px 0">
                <Div color={Colors.grey} fs="14px">Total Cost</Div>
            </Div>
            <Div display="flex" justify="center" alignI="center">
                <Div color={Colors.primary} fs="36px" fw="bold">N{(4800000).toLocaleString()}</Div>
            </Div>
            <Div display="flex" justify="center" alignI="center" margin="50px 0 0 0">
                <Div color={Colors.grey} fs="14px" mr="5px">Fee:</Div>
                <Div color={Colors.primary} fs="14px"> N{(800).toLocaleString()}</Div>
            </Div>
            <Div display="flex" justify="center" alignI="center">
                <Div color={Colors.grey} fs="14px" mr="5px">We will deduct: </Div>
                <Div color={Colors.primary} fs="14px">N{(4800800).toLocaleString()}</Div>
            </Div>
        </Div>
    );
}
