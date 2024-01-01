import React, {useRef, useState} from "react";
import Modal from "components/UI/Modal";
import SelectPaymentMethodDiv from "./selectPaymentMethodDiv";
import SelectAssetsDiv from "./selectAssetsDiv";
import AmountConfirmDiv from "./amountConfirmDiv";
import TransactionConfirmDiv from "./transactionConfirmDiv";
import Colors from "GlobalStyles/appColors";
import {Button, Div} from "../../../GlobalStyles/spotrrStyles/style";

export default function PaymentModal(props) {
    const [page, setPage] = useState(0);
    const [currency, setCurrency] = useState(0);
    const btnConfirm = useRef("");

    const handleCancel = () => {
        setPage(0);
        props.setShowModal(false);
    }

    const handleContinue = () => {
        if (page === 2 || page === 3)
            setPage(page + 1);
        if (page === 3) {
            setPage(0);
            props.setShowModal(false);
            props.setShowTransResultModal(true);
        }
    }

    return (
        <Modal
            show={props.showModal}
            width="380px"
            height="500px"
            showClose={false}
        >
            {page === 0 &&
            <SelectPaymentMethodDiv
                setPage={setPage}
                currency={currency}
                setCurrency={setCurrency}
            />}
            {page === 1 &&
            <SelectAssetsDiv
                setPage={setPage}
                currency={currency}
                setCurrency={setCurrency}
            />}
            {page === 2 &&
            <AmountConfirmDiv
                setPage={setPage}
                currency={currency}
                setCurrency={setCurrency}
            />}
            {page === 3 &&
            <TransactionConfirmDiv
                setPage={setPage}
                currency={currency}
                setCurrency={setCurrency}
            />}
            {(page === 0 || page === 1) &&
            <Div display="flex" justify="center" alignI="center" margin="30px 0 0 0">
                <Button ref={btnConfirm} bc={Colors.white} color={Colors.primary} m="0 auto"
                        position="absolute" bottom="20px" onClick={handleCancel}>
                    Cancel
                </Button>
            </Div>
            }
            {(page === 2 || page === 3) &&
            <Div display="flex" justify="center" alignI="center" margin="30px 0 0 0">
                <Button ref={btnConfirm} bc={Colors.primary} color={Colors.white} w="100%" h="50px" m="0 auto"
                        position="absolute" bottom="20px" onClick={handleContinue}>
                    Continue
                </Button>
            </Div>
            }
        </Modal>
    );
}
