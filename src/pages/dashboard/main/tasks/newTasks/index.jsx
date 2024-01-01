import { Div } from "GlobalStyles/spotrrStyles/style";
import React from "react";
import SingleTaskItem from "../taskItem/singleTask";
import SingleTaskItemActive from "../taskItem/singleTaskActive";

function NewTasks({ handleRedirectToTaskDetail }) {
  return (
    <>
      {[...new Array(12)].map((product, i) => (
        <Div
          display="contents"
          onClick={() => handleRedirectToTaskDetail(i, "new")}>
          <SingleTaskItemActive
            key={i}
            statusText="New"
            statusTextColor="red"
            title="Multi-Colored Children’s Sportwear"
          />
        </Div>
      ))}
    </>
  );
}

export default NewTasks;
