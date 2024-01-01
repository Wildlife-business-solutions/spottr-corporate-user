import React, { useState } from "react";
import { Div } from "GlobalStyles/spotrrStyles/style";
import { NotifiContent } from "components/notification/NotificationContent";
import editpen from "assets/svg/editpen.svg";
import leftarr from "assets/svg/arrleft.svg";
import jane from "assets/mem/user.svg";
import {
  NotificationBody,
  NotificationText,
  HeaderLabel,
  SortMark,
  SortText,
  SortTextValue,
  MarkasreadText,
  NotificationItemWrapper,
  UserDp,
  UserStatusIndicator,
  Chat,
} from "./style";
import onlineStatus from "assets/svg/online_indicator.svg";
import notOnlineStatus from "assets/svg/notonline.svg";
import upimage from "assets/svg/imageup.svg";
import send from "assets/svg/sendmsg.svg";
import MessagesHeader from "../search/Search";
import { useDispatch, useSelector } from "react-redux";
import { setProfile, setSendChat } from "store/messages/messageReducer";
import { useLocation } from "react-router-dom";

const Messages = () => {
  const [messagebox, setShowMessageBox] = useState(false);
  const { search } = useLocation();
  const dispatch = useDispatch();
  const [typedMessage, setTypedMessage] = useState("second");
  const [userdata, setuserdata] = useState({});
  const { messagedUser, sendChat, receivedChat, profile } = useSelector(
    (state) => state.messageDetails
  );

  React.useEffect(() => {
    if (search === "?message") {
      setShowMessageBox(true);
    }
    // return () => {
    //   dispatch(setProfile([]));
    // };
  }, []);

  const getUserdata = (id) => {
    setuserdata(messagedUser.find((user) => user.id === id));
    setShowMessageBox(true);
  };

  const handleSend = () => {
    dispatch(setSendChat(typedMessage));
  };

  const inputstyle = {
    width: "310px",
    border: "none",
    background: "transparent",
    fontFamily: "Nunito",
  };

  return (
    <Div padding="10px 0 0 0">
      <MessagesHeader searchheader="Messages" />
      <Div
        display="flex"
        gap="40px"
        justify="space-between"
        width="80%"
        padding="0 0 30px 0">
        <NotificationBody>
          <div>
            <SortMark>
              <HeaderLabel>Messages</HeaderLabel>
              <img src={editpen} alt="edit message" />
            </SortMark>
            <NotificationText>{`You have 2 new messages`}</NotificationText>
          </div>
          <SortMark>
            <SortText>
              Sort by: <SortTextValue>Date</SortTextValue>
            </SortText>
            <MarkasreadText>Mark all as Read</MarkasreadText>
          </SortMark>
          <NotificationItemWrapper>
            {messagedUser?.map((data) => (
              <NotifiContent
                key={data.id}
                userImage={data.userImage}
                username={data.user}
                title={data.title}
                time={data.time}
                message={data.message}
                isOnlineStatus={data.isOnline}
                action={() => getUserdata(data.id)}
                brd="1px solid rgba(0, 0, 0, 0.1)"
                brr="4px"
              />
            ))}
          </NotificationItemWrapper>
        </NotificationBody>
        {messagebox && (
          <Div
            border="0.3px solid #BBC4D4"
            width="55%"
            height="715px"
            backgroundColor="#fff"
            br="5px"
            padding="25px 25px 20px 25px">
            <Div
              width="350px"
              display="flex"
              justify="space-around"
              alignI="center">
              <div onClick={() => setShowMessageBox(false)}>
                <img src={leftarr} alt="left arrow" />
              </div>
              <Div display="flex" pos="relative" width="200px" alignI="center">
                {/* <UserDp src={userdata.userImage} alt="user-dp" />    */}
                <UserDp
                  src={search !== "?message" ? userdata.userImage : jane}
                  alt="user-dp"
                />
                <UserStatusIndicator>
                  <img
                    // src={userdata.isOnline ? onlineStatus : notOnlineStatus}
                    src={
                      search !== "?message"
                        ? userdata.isOnline
                          ? onlineStatus
                          : notOnlineStatus
                        : onlineStatus
                    }
                    alt="status indicator"
                  />
                </UserStatusIndicator>
                <Div padding="0 0 0 12px">
                  <Div fw="bold" fs="12px">
                    {search !== "?message" ? userdata.user : profile.username}:
                  </Div>
                  <Div fs="12px">
                    {userdata.isOnline ? "Online" : "Offline"}
                  </Div>
                </Div>
              </Div>
            </Div>

            <Div
              margin="15px auto"
              height="580px"
              display="flex"
              flexDirection="column"
              justify="space-between">
              <Div display="flex" flexDirection="column">
                {search !== "?message" ? (
                  <>
                    <Chat className="chatleft">Hello world and all</Chat>
                    <Chat className="chatright">keep doing stuff people</Chat>
                  </>
                ) : (
                  <>
                    {receivedChat.map((i) => (
                      <Chat className="chatleft">{i}</Chat>
                    ))}
                    {sendChat.map((i) => (
                      <Chat className="chatright">{i}</Chat>
                    ))}
                  </>
                )}
              </Div>

              <Div
                backgroundColor="#F5F5F5"
                width="100%"
                padding="0 25px"
                height="47px"
                br="100px"
                display="flex"
                justify="space-between"
                alignI="center">
                <img src={upimage} alt="" />
                <input
                  placeholder="Type something"
                  onChange={(e) => setTypedMessage(e.target.value)}
                  style={inputstyle}
                />
                <div onClick={handleSend}>
                  <img src={send} alt="" />
                </div>
              </Div>
            </Div>
          </Div>
        )}
      </Div>
    </Div>
  );
};

export default Messages;
