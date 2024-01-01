import React from "react";
import { NotifiContent } from "./NotificationContent";
import {
  NotificationBody,
  NotificationText,
  HeaderLabel,
  SortMark,
  SortText,
  SortTextValue,
  MarkasreadText,
  NotificationItemWrapper,
} from "./style";

function NotificationDropDown({ message, headerText, left }) {
  return (
    <NotificationBody left={left}>
        <div>
          <HeaderLabel>{headerText}</HeaderLabel>
          <NotificationText>{message}</NotificationText>
        </div>
      <SortMark>
        <SortText>
          Sort by: <SortTextValue>Date</SortTextValue>
        </SortText>
        <MarkasreadText>Mark all as Read</MarkasreadText>
      </SortMark>
      <NotificationItemWrapper>
        {[...new Array(10)].map((data, i) => (
          <NotifiContent />
        ))}
      </NotificationItemWrapper>
    </NotificationBody>
  );
}

export default NotificationDropDown;
