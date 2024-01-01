import React, { useState } from "react";
import { useAdminModalContext } from "context/AdminModalContext";
import TaskDialog from "components/UI/Dialog";
import NotifDialog from "components/UI/Dialog/Notification";
import { Div } from "GlobalStyles/spotrrStyles/style";
import SingleTaskItem from "./taskItem/singleTask";
import { Input } from "GlobalStyles/spotrrStyles/style";
import Filters from "pages/dashboard/main/search/Filters";
import { SpottrLink } from "GlobalStyles/spotrrStyles/style";
import { TASKS } from "../../../../utilities/static/route-const";
import { LoginButton } from "pages/signin/Login/style";

const Createtask = ({
  olddesc = "For regular goods. Lorem ipsum dolor sit amet, con",
}) => {
  const [desc, setdesc] = useState(olddesc);
  const [confirm, setConfirm] = useState(false);
  const [postdialog, setpostdialog] = useState(false);

  const handledescchange = (e) => {
    setdesc(e.target.value);
  };

  const { showmodal, setShowModal } = useAdminModalContext();

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenTaskDialog = () => {
    setShowModal(true);
    setpostdialog(true);
    setConfirm(false);
  };

  const adstylebody = {
    position: "relative",
    width: "370px",
    height: "610px",
    background: "#fff",
    // padding: '12px',
    marginLeft: "35px",
    borderRadius: "5px",
    // boxShadow: '0 0 5px rgba(0,0,0,0.2)'
  };

  const handleOpenConfirmDialog = () => {
    setShowModal(false);
    setConfirm(true);
    setpostdialog(false);
  };

  const [value, setValue] = useState(0);

  const handleSlider = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      {postdialog && (
        <TaskDialog
          show={showmodal}
          close={handleCloseModal}
          dialoghead="Post Task Now?"
          dialogcontent="Are you sure you want to post this task to users?"
          proceed={handleOpenConfirmDialog}
        />
      )}

      {confirm && (
        <NotifDialog
          show={showmodal}
          close={handleCloseModal}
          dialoghead="Task Sent Successfully!"
          dialogcontent={`The task is now active`}
        />
      )}
      {/* <TaskHeader
        searchheader="Tasks"
        parentLink={TASKS}
        searchsubheader="Create tasks"
      /> */}
      <Div display="flex" justify="space-between" width="1200px">
        <Div style={adstylebody} alignI="center" border="1px solid #E7E7E7">
          <Div pos="absolute" style={{ top: "190px", left: "25px" }}>
            <SingleTaskItem title="Multi-Colored Children’s Sportwear" />
          </Div>

          <Div
            color="#FF4B3E"
            fs="36px"
            ta="center"
            fw="bold"
            padding="30% 0 0 0">
            02:33 mins left
          </Div>
          <Div padding="20px 30px">
            <Div fw="bold" fs="13px" ta="left">
              Instructions:
            </Div>
            <Div padding="15px 0" fs="12px">
              {desc}
            </Div>
          </Div>
        </Div>
        <Div
          width="370px"
          height="595px"
          backgroundColor="white"
          br="5px"
          border="1px solid #E7E7E7"
          padding="17px 20px">
          <Div>
            <Div color="#274b89" fs="12px">
              Task Title
            </Div>
            <Input bg="#F8F8F8" dis="none" pcol="#C4C4C4">
              <input placeholder="Type a good name" />
            </Input>
            <Div padding="0 0 20px 0" fs="14px">
              Use something quite Straughtforward to help your users find you
              quickier. E.g: PlayStation 3
            </Div>
          </Div>
          <Div>
            <Div display="flex" justify="space-between" alignI="center">
              <Div color="#274b89" fs="12px">
                Instructions/Description
              </Div>
              <Div color="#274b89" fs="12px">
                {desc.length}/500
              </Div>
            </Div>
            <Input bg="#F8F8F8" wd="100%" hg="174px">
              <textarea
                placeholder="Write something..."
                value={desc}
                style={{
                  fontSize: "12px",
                  padding: "10px 20px",
                  resize: "none",
                }}
                onChange={handledescchange}
                maxLength="500"
              />
            </Input>
            <Div fs="14px">
              Make sure you are descriptive and detailed as it assure trust with
              users
            </Div>
          </Div>
        </Div>
        <Div
          width="370px"
          height="646px"
          backgroundColor="#fff"
          br="5px"
          border="1px solid #E7E7E7"
          padding="17px 20px">
          <Div color="#274b89" fs="12px">
            Input task reward fee
          </Div>
          <Div
            display="flex"
            justify="center"
            alignI="center"
            padding="45px 0 20px 0">
            <input
              type="text"
              style={{
                width: "70px",
                border: "none",
                textalign: "right",
                fontSize: "35px",
                fontWeight: "bold",
                borderBottom: "1.3px solid grey",
                background: "transparent",
              }}
              value={0}
            />
            <Filters
              options={["CLIQ", "SUSD", "FIAT"]}
              col="transparent"
              wd="60px"
            />
          </Div>
          <Div
            width="106px"
            height="33px"
            br="4px"
            margin="0 auto"
            backgroundColor="#F8F8F8"
            display="flex"
            justify="center"
            alignI="center">
            <Filters
              options={["/day", "/unit"]}
              col="transparent"
              wd="60px"
              lt="388px"
            />
          </Div>
          <Div color="#274b89" fs="12px" padding="55px 0 8px 0" ta="left">
            Complete Task info
          </Div>
          <Filters
            wd="100%"
            title=""
            hg="55px"
            color="#C4C4C4"
            pl="20px"
            bg="#ECF7FF"
            swd="100%"
            // action={handleChangeForAdminRole}
            options={["Task Type", "Team", "Guest"]}
          />
          <Div margin="12px 0">
            <Filters
              wd="100%"
              title=""
              hg="55px"
              color="#C4C4C4"
              pl="20px"
              bg="#ECF7FF"
              swd="100%"
              // action={handleChangeForAdminRole}
              options={["Set max participant", "Team", "Guest"]}
            />
          </Div>
          <Filters
            wd="100%"
            title=""
            hg="55px"
            color="#C4C4C4"
            pl="20px"
            bg="#ECF7FF"
            swd="100%"
            // action={handleChangeForAdminRole}
            options={["Set location", "Team", "Guest"]}
          />
          <Div color="#274b89" fs="12px" padding="15px 0">
            For how many days?
          </Div>
          <Div fw="bold" ta="center" fs="36px" color="#274b89">
            {value} Days
          </Div>

          <Div display="flex" justify="center" padding="10px 0 0 0">
            <input
              style={{ width: "200px", cursor: "pointer" }}
              type="range"
              min={0}
              max={10}
              value={value}
              step={1}
              onChange={handleSlider}
            />
          </Div>
        </Div>
      </Div>
      <Div padding="25px 0" ta="right">
        <SpottrLink to={TASKS}>
          <LoginButton
            mg="0 0 0 10px"
            fz="14px"
            wbtn="120px"
            hg="45px"
            p="0px"
            brd="1px solid #3670D4"
            bg="transparent"
            col="#3670D4">
            Cancel
          </LoginButton>
        </SpottrLink>
        <LoginButton
          mg="0 0 0 10px"
          fz="14px"
          wbtn="120px"
          hg="45px"
          p="0px"
          onClick={handleOpenTaskDialog}>
          Next
        </LoginButton>
      </Div>
    </>
  );
};

export default Createtask;
