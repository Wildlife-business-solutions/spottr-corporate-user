import React from "react";
import { Div } from "GlobalStyles/spotrrStyles/style";
import SingleTaskItemActive from "../taskItem/singleTaskActive";
import Colors from "GlobalStyles/utils/appColors";

function ActiveTasks({ handleRedirectToTaskDetail }) {
  return (
    <>
      {[...new Array(12)].map((product, i) => (
        <Div
          display="contents"
          onClick={() =>
            i < 5
              ? handleRedirectToTaskDetail(i, "active")
              : handleRedirectToTaskDetail(i, "activeUpload")
          }>
          <SingleTaskItemActive
            key={i}
            statusBgColor={Colors.lightyellow}
            statusTextColor={Colors.yellow}
            title="Multi-Colored Children’s Sportwear"
            statusText="Active"
          />
        </Div>
      ))}
    </>
  );
}

export default ActiveTasks;
