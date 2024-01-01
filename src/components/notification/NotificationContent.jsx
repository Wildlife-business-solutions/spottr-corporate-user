import React from "react";
import {
  NotificationItemContainer,
  UserDp,
  UserStatusIndicator,
  MessageTextContainer,
  TextBottom,
  AgoText,
} from "./style";
import onlineStatus from "assets/svg/online_indicator.svg";
import notOnlineStatus from "assets/svg/notonline.svg";
import Colors from "GlobalStyles/appColors";

export const NotifiContent = ({userImage, username, title, time, message, isOnlineStatus, action, brdt, brdb, brd, brr}) => {
  return (
    <NotificationItemContainer brd={brd} brdt={brdt} brdb={brdb} brr={brr} onClick={action}>
      <userDpContainer>
        <UserDp src={userImage} alt="user-dp" />
        <UserStatusIndicator>
          <img src={isOnlineStatus ? onlineStatus : notOnlineStatus} alt="status indicator" />
        </UserStatusIndicator>
      </userDpContainer>
      <MessageTextContainer>
        <TextBottom color={isOnlineStatus ? Colors.primary : 'black'}>
          {username} <AgoText color={Colors.ligterGrey}>{time} ago</AgoText>
        </TextBottom>
        <TextBottom color={isOnlineStatus ? Colors.primary : 'black'}>
          {title}
        </TextBottom>
        <TextBottom color={Colors.muted}>
          {message}
        </TextBottom>
      </MessageTextContainer>
    </NotificationItemContainer>
  );
};
