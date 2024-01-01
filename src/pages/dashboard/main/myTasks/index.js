import React, { useState } from "react";

import Colors from "GlobalStyles/utils/appColors";

import { Button, Div } from "GlobalStyles/spotrrStyles/style";
import { Spacer } from "components/notification/style";
import { useHistory } from "react-router-dom";
import NewTasks from "../tasks/newTasks/index";
import TasksHead from "../tasks/head/index";
import { TaskBoxDiv } from "../tasks/style";
import { TbackAreaContent } from "../tasks/head/style";
import { SpottrLink } from "../../../../GlobalStyles/spotrrStyles/style";
import { REQUESTS } from "../../../../utilities/static/route-const";
import backArrow from "assets/svg/backArrow.svg";

function MyTasks() {
  const [taskmenu, setTaskMenu] = useState(0);
  const [input, setInput] = useState("");
  const history = useHistory();

  const handleRedirectToTaskDetail = (i) => {
    history.push(`/dashboard/taskdetail/${i}`);
  };

  return (
    <div>
      <TaskBoxDiv>
        <Div display="flex" flexDirection="column">
          <TbackAreaContent>
            <SpottrLink to={REQUESTS}>
              <Div width="100px" display="flex">
                <img src={backArrow} alt="icon" />
                <p>Go Back</p>
              </Div>
            </SpottrLink>
          </TbackAreaContent>
          <Spacer />

          <NewTasks handleRedirectToTaskDetail={handleRedirectToTaskDetail} />
        </Div>
      </TaskBoxDiv>
    </div>
  );
}

export default MyTasks;
