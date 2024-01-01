import React, { useReducer, useState } from "react";
import AdminBackdrop from "components/UI/AdminModal";
import ModalContent from "components/UI/ModalContent";
import { Div, SpottrP } from "GlobalStyles/spotrrStyles/style";
import { LoginButton } from "pages/signin/Login/style";
import Filters from "pages/dashboard/main/search/Filters";
// import Input from "../../../../components/onboading/inputField/style";
import { RestartDiv } from "components/modals/inputProductModal/style";
import { Input } from "../../../../../GlobalStyles/spotrrStyles/style";
import AllFilledDetails from "./allFilledDetails";

const initialState = {
  taskTitle: "",
  description: "",
  rewardFeeAmount: 0,
  currencySymbol: "SUSD",
  unit: "/day",
  taskType: "",
  maxParticipant: "",
  location: "",
  days: "0",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "taskTitle":
      return { ...state, taskTitle: action.payload };
    case "description":
      return { ...state, description: action.payload };
    case "rewardFeeAmount":
      return { ...state, rewardFeeAmount: action.payload };
    case "currencySymbol":
      return { ...state, currencySymbol: action.payload };
    case "unit":
      return { ...state, unit: action.payload };
    case "taskType":
      return { ...state, taskType: action.payload };
    case "maxParticipant":
      return { ...state, maxParticipant: action.payload };
    case "location":
      return { ...state, location: action.payload };
    case "days":
      return { ...state, days: action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CreateTask = ({ show, close }) => {
  const [showContentModal, setShowContentModal] = useState(0);
  const [state, dispatchReducer] = useReducer(reducer, initialState);
  const [value, setValue] = useState(0);

  React.useEffect(() => {
    console.log(state, "state");
  }, [state]);

  const handleSlider = (e) => {
    dispatchReducer({
      type: "days",
      payload: e.target.value,
    });
  };

  const onNext = () => {
    setShowContentModal(showContentModal + 1);
  };
  const onHandleBack = () => {
    setShowContentModal(showContentModal - 1);
  };
  const onRestart = () => {
    setShowContentModal(0);
    dispatchReducer({
      type: "reset",
    });
  };

  return (
    <AdminBackdrop showAdminModal={show}>
      <ModalContent
        isClosing={true}
        close={close}
        br="24px"
        wd="600px"
        hg="auto"
        p="50px"
        modalHeader="">
        <Div padding="0 30px">
          {showContentModal !== 0 && (
            <RestartDiv>
              <h3 onClick={onHandleBack}>Back</h3>
              <h3 onClick={onRestart}>Restart</h3>
            </RestartDiv>
          )}
          {showContentModal === 0 && (
            <>
              <Div color="#274b89" fs="24px" ta="left">
                <SpottrP fw="600">Task Title</SpottrP>
              </Div>
              <Input brd="none" p="10px 20px">
                <input
                  value={state?.taskTitle}
                  onChange={(e) =>
                    dispatchReducer({
                      type: "taskTitle",
                      payload: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Type a good name"
                />
              </Input>
              <SpottrP tAlign="left">
                Use something quite Straughtforward to help your users find you
                quickier. E.g: PlayStation 3
              </SpottrP>

              <LoginButton
                bg="#274B89"
                wbtn="100%"
                mg="120px 0 0 0"
                onClick={onNext}>
                Continue
              </LoginButton>
            </>
          )}
          {showContentModal === 1 && (
            <>
              <Div color="#274b89" fs="24px" ta="left">
                <SpottrP fw="600">Instructions/Descriptions</SpottrP>
              </Div>
              <Input hg="200px" brd="none" p="10px 20px">
                <textarea
                  value={state?.description}
                  onChange={(e) =>
                    dispatchReducer({
                      type: "description",
                      payload: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Write something..."
                />
              </Input>
              <SpottrP tAlign="left">
                Make sure you are descriptive and detailed as it assure trust
                with users
              </SpottrP>

              <LoginButton
                bg="#274B89"
                wbtn="100%"
                mg="50px 0 0 0"
                onClick={onNext}>
                Continue
              </LoginButton>
            </>
          )}
          {showContentModal === 2 && (
            <>
              <Div color="#274b89" fs="24px" ta="left">
                <SpottrP fw="600">Input task reward fee</SpottrP>
              </Div>

              <Div
                display="flex"
                justify="center"
                margin="20px 0px 0px 0px"
                padding="20px 0">
                <input
                  type="number"
                  value={state?.rewardFeeAmount}
                  style={{
                    width: "80px",
                    border: "none",
                    textalign: "right",
                    fontSize: "30px",
                  }}
                  onChange={(e) =>
                    dispatchReducer({
                      type: "rewardFeeAmount",
                      payload: e.target.value,
                    })
                  }
                  autoFocus
                />
                <Filters
                  options={["SUSD", "NGN", "USD"]}
                  col="black"
                  action={(e) =>
                    dispatchReducer({
                      type: "currencySymbol",
                      payload: e.target.value,
                    })
                  }
                  // show="none"
                  wd="60px"
                  // lt="388px"
                  // setCurrency={setCurrency}
                />
              </Div>
              <Div
                display="flex"
                width="120px"
                height="50px"
                border="1px solid #C2E0FF"
                br="4px"
                margin="100px auto 0px"
                backgroundColor="#F8F8F8">
                <Filters
                  action={(e) =>
                    dispatchReducer({ type: "unit", payload: e.target.value })
                  }
                  options={["/day", "/unit"]}
                  col="transparent"
                />
              </Div>
              <LoginButton
                bg="#274B89"
                wbtn="100%"
                mg="50px 0 0 0"
                onClick={onNext}>
                Continue
              </LoginButton>
            </>
          )}
          {showContentModal === 3 && (
            <>
              <Div color="#274b89" fs="24px" ta="left">
                <SpottrP fw="600">Complete Task info</SpottrP>
              </Div>
              <Div margin="20px 0px 0px 0px">
                <Filters
                  brd="none"
                  wd="100%"
                  title=""
                  hg="60px"
                  color="#C4C4C4"
                  pl="20px"
                  pr="20px"
                  bg="#ECF7FF"
                  swd="100%"
                  action={(e) =>
                    dispatchReducer({
                      type: "taskType",
                      payload: e.target.value,
                    })
                  }
                  // action={handleChangeForAdminRole}
                  options={["Task Type", "Team", "Guest"]}
                />
                <Div margin="12px 0">
                  <Filters
                    brd="none"
                    wd="100%"
                    title=""
                    hg="55px"
                    color="#C4C4C4"
                    pl="20px"
                    pr="20px"
                    bg="#ECF7FF"
                    swd="100%"
                    action={(e) =>
                      dispatchReducer({
                        type: "maxParticipant",
                        payload: e.target.value,
                      })
                    }
                    // action={handleChangeForAdminRole}
                    options={["Set max participant", "Team", "Guest"]}
                  />
                </Div>
                <Filters
                  wd="100%"
                  title=""
                  brd="none"
                  hg="55px"
                  color="#C4C4C4"
                  pl="20px"
                  pr="20px"
                  bg="#ECF7FF"
                  swd="100%"
                  action={(e) =>
                    dispatchReducer({
                      type: "location",
                      payload: e.target.value,
                    })
                  }
                  // action={handleChangeForAdminRole}
                  options={["Set location", "Team", "Guest"]}
                />
                <Div color="#274b89" fs="12px" padding="15px 0">
                  For how many days?
                </Div>
                <Div fw="bold" ta="center" fs="36px" color="#274b89">
                  {state.days} Days
                </Div>

                <Div display="flex" justify="center" padding="10px 0 0 0">
                  <input
                    style={{ width: "200px", cursor: "pointer" }}
                    type="range"
                    min={0}
                    max={10}
                    value={state.days}
                    step={1}
                    onChange={handleSlider}
                  />
                </Div>
              </Div>

              <LoginButton
                bg="#274B89"
                wbtn="100%"
                mg="50px 0 0 0"
                onClick={onNext}>
                Continue
              </LoginButton>
            </>
          )}
          {showContentModal === 4 && (
            <>
              <Div color="#274b89" fs="24px" ta="left">
                <SpottrP fw="600">Tasks</SpottrP>
              </Div>
              <AllFilledDetails data={state} />
              <LoginButton
                bg="#274B89"
                wbtn="100%"
                mg="50px 0 0 0"
                onClick={close}>
                Post
              </LoginButton>
            </>
          )}
        </Div>
      </ModalContent>
    </AdminBackdrop>
  );
};

export default CreateTask;
