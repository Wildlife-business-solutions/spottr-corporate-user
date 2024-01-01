import React from 'react'
import AdminBackdrop from "components/UI/AdminModal";
import ModalContent from 'components/UI/ModalContent';
import { LoginButton } from 'pages/signin/Login/style';
import { Div } from "GlobalStyles/spotrrStyles/style";
import back from 'assets/svg/back.svg'
import share from 'assets/svg/share.svg'
import sent from 'assets/svg/setIcon.svg';
import report from 'assets/svg/report.svg'

const Refstatus = ({show, close}) => {
    const btnalign = { display: "flex", alignItems: "center", justifyContent: "center" }
    return (

        <AdminBackdrop showAdminModal={show}>

            <ModalContent
                close={close}
                br="24px"
                wd=""
                // hg="600px"
                mwd="490px"
                modalHeader=""
            >
                <Div padding="0 40px">
                    <Div display="flex" justify="space-between" alignI="center">
                        <Div display="flex" justify="space-between" alignI="center">
                            <img src={sent} alt="sent"/>
                            <Div color="#39B54A" fs="24px" fw="bold" padding="0 0 0 15px">Sent</Div>
                        </Div>
                        {/* <Div color="#929AA7" fs="8px">awaiting confirmation</Div> */}
                    </Div>
                    <Div display="flex" justify="space-between" alignI="center">
                        <Div color="#274b89" fw="bold" fs="36px" ta="left" margin="10px 0">N500</Div>
                        <LoginButton bg="hsla(6, 69%, 53%, 0.06)" wbtn="83px" hg="30.92px" style={btnalign}>
                            <img src={report} alt="report"/>
                            <small style={{ fontWeight: '100', paddingLeft: '15px', color: '#FB4D39' }}>Report</small>
                        </LoginButton>
                    </Div>
                    <Div margin="15px 0" fs="14px">
                        <Div color="#929AA7" ta="left">Recipients:</Div>
                        <Div color="#274b89" ta="left" fw="bold">Self</Div>
                    </Div>
                    <Div margin="25px 0" display="flex" justify="space-between">
                        <Div fs="14px">
                            <Div color="#929AA7" ta="left">Username:</Div>
                            <Div color="#274b89" ta="left" fw="bold">@adedamola</Div>
                        </Div>
                        <Div fs="14px">
                            <Div color="#929AA7" ta="left">Transaction Fee</Div>
                            <Div color="#274b89" ta="left" fw="bold">NGN0</Div>
                        </Div>
                        <Div fs="14px">
                            <Div color="#929AA7" ta="left">Payment Method</Div>
                            <Div color="#274b89" ta="left" fw="bold">REFERRAL</Div>
                        </Div>
                    </Div>
                    <Div margin="15px 0" fs="14px">
                        <Div color="#929AA7" ta="left">Transaction ID:</Div>
                        <Div color="#274b89" ta="left" fw="bold">tdg87wdgh7udh32bd3dh3b</Div>
                    </Div>
                    <Div display="flex" alignI="center" justify="space-around" padding="25px 0 0 0" style={{ cursor: "pointer" }}>
                        <img src={back} onClick={close(false)} alt="back arrow"/>
                        <img src={share} alt="share"/>
                    </Div>
                </Div>

            </ModalContent>
        </AdminBackdrop>
    )
}

export default Refstatus
