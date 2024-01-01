import React from 'react'
import AdminBackdrop from "components/UI/AdminModal";
import ModalContent from 'components/UI/ModalContent';
import { Div } from "GlobalStyles/spotrrStyles/style";
import { LoginButton } from 'pages/signin/Login/style';
import report from 'assets/svg/report.svg'

const Transactionstatus = ({show, close, trxnStatus}) => {
  const btnalign = { display: "flex", alignItems: "center", justifyContent: "center" }

  return (

    <AdminBackdrop showAdminModal={show}>

      <ModalContent
          close={close}
          br={"24px"}
          wd={"512px"}
          hg={"439px"}
          mwd="490px"
          isClosing={true}
          disp="flex"
      >
        <Div width="350px" margin="0 auto">
            <Div color="#274b89" fw="bold" fs="36px" ta="left" margin="10px 0">N200000</Div>
            <Div display="flex" justify="space-between">
                <Div></Div>
                <LoginButton bg="hsla(6, 69%, 53%, 0.06)" wbtn="83px" hg="30.92px" style={btnalign}>
                    <img src={report} alt="transaction report"/>
                    <small style={{ fontWeight: '100', paddingLeft: '15px', color: '#FB4D39' }}>Report</small>
                </LoginButton>
            </Div>
            <Div margin="15px 0" fs="14px">
                <Div color="#929AA7" ta="left">Recipients:</Div>
                <Div color="#274b89" ta="left">Self</Div>
            </Div>
            <Div margin="15px 0" fs="14px">
                <Div color="#929AA7" ta="left">Username:</Div>
                <Div color="#274b89" ta="left"></Div>
            </Div>
            <Div margin="15px 0" display="flex" justify="space-between" width="280px">
                <Div fs="14px">
                    <Div color="#929AA7" ta="left">Transaction Fee</Div>
                    <Div color="#274b89" ta="left">NGN0</Div>
                </Div>
                <Div fs="14px">
                    <Div color="#929AA7" ta="left">Payment Method</Div>
                    <Div color="#274b89" ta="left"></Div>
                </Div>
            </Div>
            <Div margin="15px 0" fs="14px">
                <Div color="#929AA7" ta="left">Transaction ID:</Div>
                <Div color="#274b89" ta="left">tdg87wdgh7udh32bd3dh3b</Div>
            </Div>
            <Div>

            </Div>
        </Div>
      </ModalContent>
    </AdminBackdrop>
  )
}

export default Transactionstatus
