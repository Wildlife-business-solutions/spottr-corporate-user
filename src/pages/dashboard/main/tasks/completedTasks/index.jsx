import Colors from "GlobalStyles/utils/appColors";
import { Div } from "GlobalStyles/spotrrStyles/style";
import React from "react";
import SingleTaskItemActive from "../taskItem/singleTaskActive";

function CompletedTasks({ handleRedirectToTaskDetail }) {
  return (
    <>
      {[...new Array(12)].map((product, i) => (
        <Div
          display="contents"
          onClick={() => handleRedirectToTaskDetail(i, "completed")}>
          <SingleTaskItemActive
            key={i}
            statusBgColor={Colors.lightergreen}
            title="Multi-Colored Children’s Sportwear"
            statusTextColor={Colors.lightgreen2}
            statusText="Completed"
          />
        </Div>
      ))}
    </>
  );
}

export default CompletedTasks;
