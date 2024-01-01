import React from "react";
import { Button, Div, Img } from "GlobalStyles/spotrrStyles/style";
import Colors from "GlobalStyles/appColors";
import CheckedImage from "assets/svg/heavy-check-mark.svg";
import Modal from "components/UI/Modal";
import GobackImage from "assets/svg/back.svg";
import ShareImage from "assets/svg/share.svg";

export default function TransactionResultModal(props) {
  const handleClose = () => {
    props.setShowModal(false);
  };
  const handleShare = () => {
    props.setShowModal(false);
  };
  return (
    <Modal
      show={props.showModal}
      minHeight="550px"
      padding="60px"
      width="600px"
      height="550px"
      showClose={false}>
      <Div>
        <Div
          display="flex"
          margin="0 0 20px 0"
          color="#39B54A"
          fs="24px"
          fw="bold">
          <Img src={CheckedImage} />
          Sent
        </Div>
        <Div>
          <Div color={Colors.primary} fs="28px" fw="bold">
            N{(200500).toLocaleString()}
          </Div>
        </Div>
        <Div padding="20px 0">
          <Div fs="12px" color={Colors.grey}>
            Recipients
          </Div>
          <Div fs="20px" color={Colors.primary}>
            Self
          </Div>
        </Div>
        <Div display="flex" justify="space-between">
          <Div padding="20px 0">
            <Div fs="12px" color={Colors.grey}>
              Username:
            </Div>
            <Div fs="20px" color={Colors.primary}>
              @adedamola456
            </Div>
          </Div>
          <Div padding="20px 0">
            <Div fs="12px" color={Colors.grey}>
              Transaction Fee:
            </Div>
            <Div fs="20px" color={Colors.primary}>
              NGN0
            </Div>
          </Div>
          <Div padding="20px 0">
            <Div fs="12px" color={Colors.grey}>
              Payment method:
            </Div>
            <Div fs="20px" color={Colors.primary}>
              REFERRAL
            </Div>
          </Div>
        </Div>
        <Div padding="20px 0">
          <Div fs="12px" color={Colors.grey}>
            Transaction ID:
          </Div>
          <Div fs="20px" color={Colors.primary}>
            tdg87wdgh7udh32bd3dh3b
          </Div>
        </Div>
        <Div
          display="flex"
          justify="center"
          width="50%"
          margin="30px auto 0 auto">
          <Button
            bc={Colors.white}
            color={Colors.grey}
            w="100%"
            h="50px"
            onClick={handleClose}>
            <Img src={GobackImage} />
          </Button>
          <Button
            bc={Colors.white}
            color={Colors.grey}
            w="100%"
            h="50px"
            onClick={handleShare}>
            <Img src={ShareImage} />
          </Button>
        </Div>
      </Div>
    </Modal>
  );
}
