import React from "react";
import { Div, Img, Input, SpottrP } from "GlobalStyles/spotrrStyles/style";
import { SpottrLink } from "GlobalStyles/spotrrStyles/style";
import { OPPORTUNITIES } from "../../../../../utilities/static/route-const";
import backArrow from "assets/svg/backArrow.svg";
import GoogleMap from "components/dashboard/main/GoogleMap";
import image from "assets/opImage.png";
import CallImage from "assets/svg/call.svg";
import MessageImage from "assets/svg/message.svg";
import { Button } from "GlobalStyles/spotrrStyles/style";
import InfoImage from "assets/svg/info.svg";
import Colors from "GlobalStyles/appColors";
import SingleTaskItem from "../taskItem/singleTask";
import { useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";
import TaskActive from "./taskActive";
import { useHistory } from "react-router";

const containerStyle = {
  width: "100%",
  height: "220px",
};

const TaskDetails = () => {
  const history = useHistory();
  const { search } = useLocation();

  const [activeInput, setActiveInput] = React.useState({
    radioInput: "",
  });

  const handleRedirectToTasks = () => {
    history.push({
      pathname: `/dashboard/tasks`,
    });
  };

  const handleCall = () => {};

  const handleMesssage = () => {};

  const handleInfo = () => {};

  return (
    <Div width="1100px" margin="30px 0">
      <SpottrLink to={OPPORTUNITIES}>
        <Div width="100px" display={"flex"}>
          <img src={backArrow} alt="icon" />
          <p style={{ fontSize: "15px", color: "#274889", marginLeft: "15px" }}>
            Go back
          </p>
        </Div>
      </SpottrLink>
      <Div display="flex" margin="30px 0">
        <Div backgroundColor="#ffffff" width="70%" padding="0 0 50px 0">
          <Div>
            <GoogleMap style={containerStyle} />
            <Div
              backgroundColor="#ffffff"
              display="flex"
              justify-content="center"
              alignI="center">
              <Div
                zIndex="9"
                boxShadow="0px 4px 20px rgba(0, 0, 0, 0.07)"
                backgroundColor="#ffffff"
                width="75%"
                height="130px"
                margin="-50px auto 20px auto"
                br="5px">
                <SingleTaskItem
                  imgWidth="auto"
                  imgHeight="100%"
                  heightInner={"90px"}
                />
              </Div>
            </Div>
          </Div>
          <Div width="75%" margin="50px auto">
            <Div ta="center" margin="20px 0px 35px 0px">
              <SpottrP color="#FF4B3E" fw="700" fs="50px">
                02:33mins left
              </SpottrP>
            </Div>
            <Div>
              <SpottrP color="rgba(0, 0, 0, 0.7)" fw="700" fs="20px">
                Instructions:
              </SpottrP>
              <SpottrP fs="20px" color={Colors.grey} m="35px 0">
                <>
                  {" "}
                  For regular goods for good exchange, the exchange area shows a
                  list of goods that have been indicated for trading and then
                  any user who has a new good to be traded for another comes to
                  the exchange and indicates their good.
                </>
              </SpottrP>
            </Div>
            <Div className="mt-5">
              {search === "?new" && (
                <>
                  <Div display="flex" justify="center">
                    <Button
                      bc={Colors.primary}
                      color={Colors.white}
                      br="5px"
                      w="300px"
                      onClick={handleRedirectToTasks}
                      h="50px"
                      m=" auto">
                      Accept
                    </Button>
                  </Div>
                  <Div className="mt-3" display="flex" justify="center">
                    <Button
                      bc={Colors.primary}
                      color={Colors.white}
                      onClick={handleRedirectToTasks}
                      br="5px"
                      w="300px"
                      h="50px">
                      Reject
                    </Button>
                  </Div>
                </>
              )}
              {search === "?active" && (
                <>
                  <TaskActive
                    activeInput={activeInput}
                    setActiveInput={setActiveInput}
                  />
                  <Div className="mt-3 " display="flex" justify="center">
                    <Button
                      bc={Colors.primary}
                      color={Colors.white}
                      br="5px"
                      disabled={activeInput.radioInput === ""}
                      w="300px"
                      onClick={handleRedirectToTasks}
                      h="50px">
                      Done
                    </Button>
                  </Div>
                </>
              )}
              {search === "?activeUpload" && (
                <>
                  <Input
                    brd="none"
                    hg="100px"
                    pfs="20px"
                    p="0px 10px"
                    mar="0px">
                    <textarea type="text" placeholder="Description..." />
                  </Input>
                  <Input brd="none" fs="20px" p="0px 10px" mar="20px 0px">
                    <input type="file" placeholder="upload..." />
                  </Input>
                  <Div className="mt-3 " display="flex" justify="center">
                    <Button
                      bc={Colors.primary}
                      color={Colors.white}
                      br="5px"
                      onClick={handleRedirectToTasks}
                      w="300px"
                      h="50px">
                      Done
                    </Button>
                  </Div>
                </>
              )}
            </Div>
          </Div>

          <Div
            margin="50px 0px 20px 0px"
            display="flex"
            justify="center"
            alignI="center">
            <Button
              bc={Colors.white}
              color={Colors.primary}
              w="150px"
              h="50px"
              m="0 10px"
              onClick={handleCall}>
              <Img src={CallImage} />
            </Button>
            <Button
              bc={Colors.white}
              color={Colors.primary}
              w="150px"
              h="50px"
              m="0 10px"
              onClick={handleMesssage}>
              <Img src={MessageImage} />
            </Button>
            <Button
              bc={Colors.white}
              color={Colors.primary}
              w="150px"
              h="50px"
              m="0 10px"
              onClick={handleInfo}>
              <Img src={InfoImage} />
            </Button>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default TaskDetails;
