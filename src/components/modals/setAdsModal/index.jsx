import React, {useRef, useState} from "react";
import Modal from "components/UI/Modal";
import SetAdsDiv from "./setAdsDiv";
import ConfirmAdsPaymentDiv from "./confirmAdsPaymentDiv";
import Colors from "GlobalStyles/appColors";
import {Button, Div} from "GlobalStyles/spotrrStyles/style";

export default function SetAdsModal(props) {
    const [page, setPage] = useState(0);
    const [budget, setBudget] = useState(0);
    const [days, setDays] = useState(0);
    // const [adsTypes, setAdsTypes] = useState([]);
    const btnConfirm = useRef("");

    const modalClosed = () => {
        setPage(0);
        props.setShowModal(false);
    }

    const handleConfirm = () => {
        if (page === 0) {
            setPage(1);
        }
        if (page === 1) {
            setPage(0);
            props.setShowModal(false);
            props.setShowPaymentModal(true);
        }
    }

    return (
        <Modal
            show={props.showModal}
            width="450px"
            height="580px"
            showClose={false}
        >
            {page === 0 && <SetAdsDiv
                setBudget={setBudget}
                setDays={setDays}
                // setAdsTypes={setAdsTypes}
                handleCancel={modalClosed}
            />}
            {page === 1 && <ConfirmAdsPaymentDiv
                budget={budget}
                days={days}
                handleCancel={modalClosed}
            />}
            <Div display="flex" justify="center" alignI="center" margin="50px 0 0 0">
                <Button ref={btnConfirm} bc={Colors.primary} color={Colors.white} w="300px" h="50px"
                        position="absolute" bottom="20px" onClick={handleConfirm}>
                    {page === 0 && 'Continue'}
                    {page === 1 && 'Pay Now'}
                </Button>
            </Div>
        </Modal>
    );
}
